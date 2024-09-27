import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useLocation, useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import FilterBar from '../../components/FilterBar/FilterBar'
import Loading from '../../components/Loading/Loading'
import api from '../../Utils/api'
import TechError from '../Error/TechError'

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


  const { data: productsData, isLoading, isError } = useQuery('Products', async () => {
    const res = await api.get('/api/Products?populate=*');
    return res.data.data;
  });

  useEffect(() => {
    // Update the selected category based on the query parameter
    if (categoryFromQuery) {
      setSelectedFilters(prevFilters => ({
        ...prevFilters,
        category: categoryFromQuery,
      }));
    }
    if(SearchFromQuery){
      setSelectedFilters(prevFilters => ({
       ...prevFilters,
        search: SearchFromQuery,
      }));
    }
  }, [categoryFromQuery,SearchFromQuery]);

  if(isLoading) return <Loading/>
  if(isError) return <TechError/>

  const products = Array.isArray(productsData) ? productsData : [];

  const filteredProducts = products.filter(product => {
    const { material, price, category,search } = selectedFilters;

    // Material filter
    const materialMatch = material ? product.attributes.Material === material : true;
    
    // Search filter
    const searchResult = search
    ? search.split(' ').every(word =>
        product.attributes.ProductName.toLowerCase().includes(word.toLowerCase())
      )
    : true;
    // Category filter
    const categoryMatch = category ? product.attributes.category.data.attributes.CategoryName === category : true;

    // Price filter
    const priceMatch = price ? (
      product.attributes.NewPrice >= price[0] && product.attributes.NewPrice <= price[1]
    ) : true;

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



 const indexOfLastProduct = currentPage * itemsPerPage;
const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
};

  
  return (
 <section>
    <FilterBar 
    selectedFilters={selectedFilters}
    setSelectedFilters={setSelectedFilters}
    selectedSort ={selectedSort}
    setSortCategory ={setSortCategory}
    />
    {sortedProducts.length!==0?(
      <>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 gap-2 sm:gap-3 p-3 lg:px-10'>
    {currentProducts?.map((product, index) => (
        <div className='sm:p-2' key={index}>
            <Card  product={product} />
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
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`px-3 py-1 mx-1 ${currentPage === index + 1 ? 'bg-white text-red' : 'bg-white/30'} rounded`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 mx-1 bg-red text-yellow rounded"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {'>'}
          </button>
        </div>
      </>
       
    ):(
      <div className="text-center p-16">
        
        <h2 className='text-red font-bold text-2xl'>No products found matching your filters</h2>
      </div> 
    )}
 </section>
  )
}

export default Shop;