import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading-overlay">
   <div class="loader relative  flex justify-center  items-center flex-col ">
    {/* <div  style={{animationDirection:'reverse'}} className='absolute -z-10 animate-spin-slow    border-[25px] h-52 w-52 object-cover border-black border-double rounded-full'> 
    </div> */}
    {/* <div className='absolute -z-5 animate-spin-custom opacity-85  border-[25px] h-48 w-48 object-cover border-white border-dotted rounded-full'> 
    </div> */}
 <div class="loader1"></div>

    <img className='relative  h-44' loading='eager' src="/favicon.png" alt="" />
  </div>
  </div> )
}

export default Loading