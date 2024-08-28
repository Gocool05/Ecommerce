import React from 'react'

const NotFound = () => {
  return (
    <div className="text-center p-20">
    <h1 className="mb-4 text-6xl font-semibold text-red">404</h1>
    <p className="mb-4 text-2xl text-black">Oops! Looks like the page is not available.</p>
    <div className="animate-pulse items-center justify-center flex">
      <img  className='h-24 w-24  ' src='/favicon.png' alt='Shriworks Logo'/>
    </div>
    <p className="mt-4 text-xl text-black">Let's get you back <a href="/" className="text-red text-xl font-bold uppercase">home</a>.</p>
  </div>
  )
}

export default NotFound