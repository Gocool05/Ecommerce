import React from 'react'

const OrderSuccess = () => {
  return (
    <div className="bg-[#fceecf] py-20 flex flex-col items-center justify-center p">
    <div className=" p-8 text-black  text-center">
      <img
        src="https://api.shriworks.com/uploads/output_onlinegiftools_e7992312b6.gif" // Update the path based on your folder structure
        alt="Order Success"
        className="w-32 h-32 mx-auto"
      />
      <h1 className="text-2xl text-green font-bold mt-4">
        Order Placed Successfully!
      </h1>
      <p className=" mt-2">
        Thank you for shopping with us.
      </p>
      <button
        className="mt-6 px-6 py-2 transition-all hover:scale-105 duration-100  rounded bg-red text-yellow"
        onClick={() => (window.location.href = "/")}
      >
        Go to Home
      </button>
    </div>
  </div>
  )
}

export default OrderSuccess