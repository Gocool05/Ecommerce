import React from 'react'
import { useQuery } from 'react-query'
import Card from '../../components/Card/Card'
import FilterBar from '../../components/FilterBar/FilterBar'
import api from '../../Utils/api'

const Shop = () => {

  const Products = async () => {
    const res = await api.get('/api/Products?populate=*');
    return res.data.data;
  }

  const { data: products, isLoading, isError } = useQuery('Products', Products);


  return (
 <section>
    <FilterBar/>
    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 p-3 lg:px-10'>
    {products?.map((product, index) => (
        <div className='p-2' key={index}>
            <Card  product={product} />
        </div>
          ))}
    </div>
 </section>
  )
}

export default Shop