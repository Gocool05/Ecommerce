import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading-overlay">
   <div class="loader relative  flex justify-center  items-center flex-col ">
    <div class="loader1"></div>
    <img className='relative  h-44' loading='eager' src="/favicon.png" alt="" />
  </div>
  </div> )
}

export default Loading