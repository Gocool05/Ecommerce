import React from 'react'

const AddToCart = () => {
  return (
    <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 class="text-2xl font-bold my-4">Shopping Cart</h1>
        <button class="bg-red hover:bg-opacity-95 text-white font-bold py-2 px-4 rounded">
      Checkout
    </button>
    </div>
    <div class="mt-8">
        <div class="flex flex-col md:flex-row border-b border-red py-4">
            <div class="flex-shrink-0">
                <img src="https://api.shriworkscraft.com/uploads/website_banner_11_e95e90137e.webp" alt="Product image" class="w-32 h-32 object-cover"/>
            </div>

            <div class="mt-4 md:mt-0 md:ml-6">
                <h2 class="text-lg text-red font-bold">Product Title</h2>
                <p class="mt-2 text-black">Product Description</p>
                <div class="mt-4 flex items-center justify-between">
                    <span class="mr-2 text-red">Quantity:</span>
                    <div class="flex items-center">
                        <button class="bg-red text-yellow cursor-pointer rounded-l-lg px-2 py-1" disabled>-</button>
                        <span class="mx-2 text-gray-600">1</span>
                        <button class="bg-red text-yellow cursor-pointer rounded-r-lg px-2 py-1" disabled>+</button>
                    </div>
                    <div class="ml-auto sm:ml-5 font-bold">&#8377; 2000.00</div>
                    
                </div>
            </div>

        </div>
        <div class="flex flex-col md:flex-row border-b border-red py-4">
            <div class="flex-shrink-0">
                <img src="https://api.shriworkscraft.com/uploads/Deep_Lady_bf553fa870.jpg" alt="Product image" class="w-32 h-32 object-cover"/>
            </div>

            <div class="mt-4 md:mt-0 md:ml-6">
                <h2 class="text-lg text-red font-bold">Product Title</h2>
                <p class="mt-2 text-black">Product Description</p>
                <div class="mt-4 flex items-center justify-between">
                    <span class="mr-2 text-red">Quantity:</span>
                    <div class="flex items-center">
                        <button class="bg-red text-yellow cursor-pointer rounded-l-lg px-2 py-1" disabled>-</button>
                        <span class="mx-2 text-gray-600">2</span>
                        <button class="bg-red text-yellow cursor-pointer rounded-r-lg px-2 py-1" disabled>+</button>
                    </div>
                    <div class="ml-auto sm:ml-5 font-bold">&#8377; 2000.00</div>
                    
                </div>
            </div>

        </div>
    </div>
    <div class="flex justify-end items-center mt-8">
        <span class="text-red mr-4">Subtotal:</span>
        <span class="text-xl font-bold">&#8377; 3500.00</span>
    </div>
</div>
  )
}

export default AddToCart