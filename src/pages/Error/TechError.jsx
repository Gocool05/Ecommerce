import React from 'react'

const TechError = () => {
  return (
    <div className="text-center p-20">
    <h1 className="mb-4 text-6xl font-semibold text-red">Oops!</h1>
    <p className="mb-4 text-2xl text-black">Something went wrong. We're working on it!</p>
    <div className="animate-pulse items-center justify-center flex">
      <img  className='h-24 w-24  ' src='/favicon.png' alt='Shriworks Logo'/>
    </div>
    <p className="mt-4 text-xl text-black">Let's get you back to the homepage <a href="/" className="text-red text-xl font-bold uppercase">home</a>.</p>
  </div>
  )
}

export default TechError