import React from 'react'
import Marquee from 'react-fast-marquee'
import api from '../../Utils/api';
const baseUrl = api.defaults.baseURL;
const Testimonials = (Test) => {
    console.log(Test,'Checking Testinomials...')
  return (
    <div className='mb-10 px-2 bg-black md:bg5 '>
    <h2 class="flex flex-row flex-nowrap py-3 md:pt-10 items-center ">
              <span class="flex-grow block border-t border-yellow"></span>
              <span class="flex-none block mx-4 px-4 py-2.5 lg:text-xl rounded leading-none uppercase font-bold bg-yellow text-black">
              Testimonials
              </span>
              <span class="flex-grow block border-t border-yellow"></span>
          </h2>
          <div className='md:mt-0 rounded-xl mt-3 mb-10 md:px-5 py-5 md:py-10 '>
            <Marquee play={true} direction={'right'} pauseOnClick={true} pauseOnHover={true} loop={0}>
            {Test?.Test?.map((test,index)=>(
           <div className='w-48 md:w-72 border-8  border-yellow border-double  mx-2  rounded-xl' key={index}>
           <img className='' src={`${baseUrl}/${test?.attributes?.Image?.data?.attributes?.url}`} alt="Customer Testimonials" />
            </div>
            ))}
            </Marquee>
            </div>


          </div>
  )
}

export default Testimonials