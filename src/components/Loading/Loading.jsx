import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading-overlay">
   <div class="loader relative  flex justify-center  items-center flex-col ">
    <div  style={{animationDirection:'reverse'}} className='absolute -z-10 animate-spin-slow    border-[25px] h-52 w-52 object-cover border-black border-double rounded-full'> 
    </div>
    <div className='absolute -z-5 animate-spin-custom opacity-85  border-[25px] h-48 w-48 object-cover border-white border-dotted rounded-full'> 
    </div>
    {/* <div  style={{animationDirection:'reverse'}}  className='absolute -z-5 animate-spin-custom opacity-85   border-[25px] h-64 w-64 object-cover border-yellow border-dashed rounded-full'> 
    </div>
    <div  style={{animationDirection:'reverse'}} className='absolute -z-10 animate-spin-slow    border-[25px] h-64 w-64 object-cover border-black border-double rounded-full'> 
    </div> */}
    <img className='relative animate-pulse   h-44' src="/favicon.png" alt="" />
  </div>
    {/* <h2 className='text-yellow font-bold animate-pulse text-2xl uppercase'>loading . . .</h2> */}
  </div>
  )
}

export default Loading