import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
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
  const SearchFromQuery = queryParams.get('search');
  
  const [selectedFilters, setSelectedFilters] = useState({
    material: "",
    price: "",
    category: "",
  });
  const [selectedSort, setSortCategory] = useState("Default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Fetching products based on pagination and other params
  const { data: PData, isLoading, isError } = useQuery(
    ['Products', currentPage], // Pass currentPage as a dependency
    async () => {
      const res = await api.get(`/api/Products?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${itemsPerPage}`);
      return res.data;
    },
    {
      keepPreviousData: true, // This keeps the previous page's data while fetching the new page
    }
  );

  const productsData = PData?.data;
  const pageCount = PData?.meta?.pagination?.pageCount;

  useEffect(() => {
    if (categoryFromQuery) {
      setSelectedFilters(prevFilters => ({
        ...prevFilters,
        category: categoryFromQuery,
      }));
    }
    if (SearchFromQuery) {
      setSelectedFilters(prevFilters => ({
        ...prevFilters,
        search: SearchFromQuery,
      }));
    }
  }, [categoryFromQuery, SearchFromQuery]);

  if (isLoading) return <Loading />;
  if (isError) return <TechError />;

  const products = Array.isArray(productsData) ? productsData : [];

  const filteredProducts = products.filter(product => {
    const { material, price, category, search } = selectedFilters;

    const materialMatch = material ? product.attributes.Material === material : true;
    const searchResult = search
      ? search.split(' ').every(word =>
          product.attributes.ProductName.toLowerCase().includes(word.toLowerCase())
        )
      : true;
    const categoryMatch = category ? product.attributes.category.data.attributes.CategoryName === category : true;
    const priceMatch = price ? product.attributes.Price >= price[0] && product.attributes.Price <= price[1] : true;

    return materialMatch && categoryMatch && priceMatch && searchResult;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (selectedSort) {
      case "Price: Low to High":
        return a.attributes.NewPrice - b.attributes.NewPrice;
      case "Price: High to Low":
        return b.attributes.NewPrice - a.attributes.NewPrice;
      case "Alphabetically, A-Z":
        return a.attributes.ProductName.localeCompare(b.attributes.ProductName);
      case "Alphabetically, Z-A":
        return b.attributes.ProductName.localeCompare(a.attributes.ProductName);
      case "Latest":
        return new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt);
      default:
        return 0;
    }
  });

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= pageCount) {
      window.scrollTo(0, 0); // Scroll to top on page change
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section>
      <FilterBar 
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        selectedSort={selectedSort}
        setSortCategory={setSortCategory}
      />
      {sortedProducts.length !== 0 ? (
        <>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 gap-2 sm:gap-3 p-3 lg:px-10'>
            {sortedProducts?.map((product, index) => (
              <div className='sm:p-2' key={index}>
                <Card product={product} />
              </div>
            ))}
          </div>

          <div className="w-full flex py-10 justify-center items-center mx-auto">
            <button
              className="px-3 py-1 mx-1 bg-red text-yellow rounded"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {'<'}
            </button>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index + 1}
                className={`px-3 py-1 mx-1 ${currentPage === index + 1 ? 'bg-black text-yellow' : 'bg-white/30'} rounded`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="px-3 py-1 mx-1 bg-red text-yellow rounded"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pageCount}
            >
              {'>'}
            </button>
          </div>
        </>
      ) : (
        <div className="text-center p-16">
          <h2 className='text-red font-bold text-2xl'>No products found matching your filters</h2>
        </div> 
      )}
    </section>
  );
};

export default Shop;
