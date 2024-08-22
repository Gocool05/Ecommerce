import React from 'react'
import Marquee from 'react-fast-marquee'
import { useQuery } from 'react-query'
import api from '../../Utils/api'
import './CategorySlider.css'


const CategorySlider = () => {
  
  const Category = async () =>{
    const res = await api.get('/api/categories?populate=*');
    return res.data.data;
  }
  
  const { data, isLoading, isError} = useQuery('Categories',Category);
  const baseUrl = api.defaults.baseURL;

  console.log('category',data);

  return (
    <div className=' py-10'>

        <h2 class="flex flex-row flex-nowrap items-center ">
          <span class="flex-grow block border-t border-red"></span>
          <span class="flex-none block mx-4 px-4 py-2.5 lg:text-xl rounded leading-none uppercase font-bold bg-red text-yellow">
              Categories
          </span>
          <span class="flex-grow block border-t border-red"></span>
      </h2>


        <Marquee play={true} direction={'left'} pauseOnHover={true} loop={0} >
         
         {data?.map((cate,index)=>(
          <div key={index} className='h-60 w-60 border-red border-4 bg-yellow  mt-10 mx-4 flex justify-center  rounded '>
            <img className='relative  object-cover' src={`${baseUrl}${cate.attributes?.Image?.data.attributes.url}`} alt={cate?.attributes?.CategoryName}/>
             <h1 className='absolute font-bold bottom-0 w-40 text-center m-2 bg-red py-1 px-2  text-yellow border-2 rounded-lg border-yellow text-sm'>{cate?.attributes?.CategoryName}</h1>
             {console.log(cate?.attributes?.Image?.data.attributes.url,'URL')}
          </div>
         ))}


        </Marquee>
        <Marquee play={true} direction={'right'} pauseOnHover={true} loop={0}>
        {data?.map((cate,index)=>(
          <div key={index} className='h-60 w-60 border-red border-4 bg-yellow  mt-10 mx-4 flex justify-center  rounded '>
            <img className='relative  object-cover' src={`${baseUrl}${cate.attributes?.Image?.data.attributes.url}`} alt={cate?.attributes?.CategoryName}/>
             <h1 className='absolute font-bold bottom-0 w-40 text-center m-2 bg-red py-1 px-2  text-yellow border-2 rounded-lg border-yellow text-sm'>{cate?.attributes?.CategoryName}</h1>
             {console.log(cate?.attributes?.Image?.data.attributes.url,'URL')}
          </div>
         ))}
        </Marquee>
    </div>
  )
}

export default CategorySlider