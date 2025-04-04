import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card';
import FilterBar from '../../components/FilterBar/FilterBar';
import Loading from '../../components/Loading/Loading';
import api from '../../Utils/api';
import TechError from '../Error/TechError';

const Shop = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const categoryFromQuery = queryParams.get('category');
  const searchFromQuery = queryParams.get('search');

  const [selectedFilters, setSelectedFilters] = useState({
    material: '',
    price: '',
    category: '',
  });

  const [selectedSort, setSortCategory] = useState('Default');
  const itemsPerPage = 24;
  const observerRef = useRef(null); // Reference for intersection observer

  // Fetch products with infinite scrolling
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery(
    ['Products', selectedFilters, selectedSort],
    async ({ pageParam = 1 }) => {
      const filters = {
        ...(selectedFilters.material && { 'filters[Material]': selectedFilters.material }),
        ...(selectedFilters.category && { 'filters[category][CategoryName]': selectedFilters.category }),
        ...(selectedFilters.price && {
          'filters[Price][$gte]': selectedFilters.price[0],
          'filters[Price][$lte]': selectedFilters.price[1],
        }),
        ...(searchFromQuery && { 'filters[ProductName][$containsi]': searchFromQuery }),
      };

      const sorting = {
        'Price: Low to High': 'Price:asc',
        'Price: High to Low': 'Price:desc',
        'Alphabetically, A-Z': 'ProductName:asc',
        'Alphabetically, Z-A': 'ProductName:desc',
        'Latest': 'createdAt:desc',
      };

      const query = new URLSearchParams({
        ...filters,
        ...(selectedSort !== 'Default' && { sort: sorting[selectedSort] }),
        populate: '*',
        'pagination[page]': pageParam,
        'pagination[pageSize]': itemsPerPage,
      });

      const res = await api.get(`/api/Products?${query.toString()}`);
      return res.data;
    },
    {
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage?.meta?.pagination?.page + 1;
        return nextPage <= lastPage?.meta?.pagination?.pageCount ? nextPage : undefined;
      },
    }
  );

  const productsData = data?.pages.flatMap((page) => page.data) || [];

  useEffect(() => {
    if (categoryFromQuery) {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        category: categoryFromQuery,
      }));
    }
    if (searchFromQuery) {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        search: searchFromQuery,
      }));
    }
  }, [categoryFromQuery, searchFromQuery]);

   // Infinite scroll observer
   const lastProductRef = useCallback(
    (node) => {
      if (isFetchingNextPage || !hasNextPage) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  if (isLoading) return <Loading />;
  if (isError) return <TechError />;

  return (
    <section>
      <FilterBar
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        selectedSort={selectedSort}
        setSortCategory={setSortCategory}
      />

      {productsData.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 gap-2 sm:gap-3 p-3 lg:px-10">
          {productsData.map((product, index) => {
            if (index === productsData.length - 1) {
              return (
                <div className="sm:p-2" key={product.id} ref={lastProductRef}>
                  <Card product={product} />
                </div>
              );
            }
            return (
              <div className="sm:p-2" key={product.id}>
                <Card product={product} />
              </div>
            );
          })}
        </div>

      ) : (
        <div className="text-center p-16">
          <h2 className="text-red font-bold text-2xl">No products found matching your filters</h2>
        </div>
      )}

      {isFetchingNextPage && 
    <div class="flex-col gap-4 w-full my-10 flex items-center justify-center">
      <div
        class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-black rounded-full"
      >
        <div
          class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red rounded-full"
        ></div>
      </div>
    </div>
}
    </section>
  );
};

export default Shop;
