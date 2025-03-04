import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  // Fetching products with filters and sorting applied directly via API
  const { data: PData, isLoading, isError } = useQuery(
    ['Products', selectedFilters, selectedSort, currentPage],
    async () => {
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
        'pagination[page]': currentPage,
        'pagination[pageSize]': itemsPerPage,
      });
  
      const res = await api.get(`/api/Products?${query.toString()}`);
      return res.data;
    },
    { keepPreviousData: true }
  );

  const productsData = PData?.data || [];
  // console.log(productsData,'products data');
  const pageCount = PData?.meta?.pagination?.pageCount || 1;

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

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= pageCount) {
      window.scrollTo(0, 0); // Scroll to top on page change
      setCurrentPage(pageNumber);
    }
  };

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
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 gap-2 sm:gap-3 p-3 lg:px-10">
            {productsData.map((product) => (
              <div className="sm:p-2" key={product.id}>
                <Card product={product} />
              </div>
            ))}
          </div>

          <div className="w-full flex py-10 justify-center overflow-x-auto items-center mx-auto">
            <button
              className="px-3 py-3 mx-1 bg-red text-yellow rounded"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {'<'}
            </button>
                <div className='flex max-w-52 sm:max-w-96 overflow-x-scroll'>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index + 1}
                className={`px-3 py-1 mx-1 w-full  ${currentPage === index + 1 ? 'bg-black text-yellow' : 'bg-white/30'} rounded`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
                </div>

            <button
              className="px-3 py-3 mx-1 bg-red text-yellow rounded"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pageCount}
            >
              {'>'}
            </button>
          </div>
        </>
      ) : (
        <div className="text-center p-16">
          <h2 className="text-red font-bold text-2xl">No products found matching your filters</h2>
        </div>
      )}
    </section>
  );
};

export default Shop;
