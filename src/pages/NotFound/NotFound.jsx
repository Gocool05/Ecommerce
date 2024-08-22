import React from 'react'

const NotFound = () => {
  return (
    <div className="text-center p-20">
    <h1 className="mb-4 text-6xl font-semibold text-red">404</h1>
    <p className="mb-4 text-lg text-black">Oops! Looks like the page is not available.</p>
    <div className="animate-pulse items-center justify-center flex">
      <img  className='h-20 w-20  ' src='/favicon.png' alt='Shriworks Logo'/>
    </div>
    <p className="mt-4 text-black">Let's get you back <a href="/" className="text-red font-bold uppercase">home</a>.</p>
  </div>
  )
}

export default NotFound