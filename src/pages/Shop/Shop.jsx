import React from 'react'
import Card from '../../components/Card/Card'
import FilterBar from '../../components/FilterBar/FilterBar'

const Shop = () => {
  return (
 <section>
    <FilterBar/>
    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 p-3 lg:px-10'>
    {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="p-2">
            <Card />
          </div>
        ))}
    </div>
 </section>
  )
}

export default Shop