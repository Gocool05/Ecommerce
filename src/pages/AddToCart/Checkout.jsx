import { LockClosedIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Checkout = () => {
  return (
    <div class="lg:p-10 p-5">
    <div class="flex max-sm:flex-col gap-12 max-lg:gap-4 ">
      <div class="bg-gradient-to-r from-red via-black sm:h-fit to-black  sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
        <div class="">
          <div class="px-4 py-8 sm:overflow-auto ">
            <div class="space-y-4">

              <div class="flex items-start gap-4">
                <div class="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-yellow rounded-md">
                  <img src='https://api.shriworkscraft.com/uploads/ganesha_statue_cf533b6df9.webp' class="w-full object-cover" />
                </div>
                <div class="w-full">
                  <h3 class="text-base text-yellow font-bold uppercase">Vinayagar Idols</h3>
                  <ul class="text-xs text-white space-y-2 mt-2">
                    <li class="flex flex-wrap gap-4">Size <span class="ml-auto">37</span></li>
                    <li class="flex flex-wrap gap-4">Quantity <span class="ml-auto">2</span></li>
                    <li class="flex flex-wrap gap-4">Total Price <span class="ml-auto">&#8377; 40</span></li>
                  </ul>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-yellow rounded-md">
                  <img src='https://api.shriworkscraft.com/uploads/Taajoo_df1916308c.png' class="w-full object-cover" />
                </div>
                <div class="w-full">
                  <h3 class="text-base text-yellow font-bold uppercase">Buddha Idols</h3>
                  <ul class="text-xs text-white space-y-2 mt-2">
                    <li class="flex flex-wrap gap-4">Size <span class="ml-auto">37</span></li>
                    <li class="flex flex-wrap gap-4">Quantity <span class="ml-auto">2</span></li>
                    <li class="flex flex-wrap gap-4">Total Price <span class="ml-auto">&#8377; 40</span></li>
                  </ul>
                </div>
              </div>
            

            </div>
          </div>

          <div class=" border-red border-2 bg-yellow w-full p-4">
            <h4 class="flex flex-wrap gap-4 text-base text-black">Total <span class="ml-auto">&#8377; 84.00</span></h4>
          </div>
        </div>
      </div>

      <div class="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
        <h2 class="text-2xl font-bold text-black">Complete your order</h2>
        <form class="mt-8">
          <div>
            <h3 class="text-base text-black mb-4">Personal Details</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <input type="text" placeholder="First Name"
                  class="px-4 py-3 bg-white  text-black w-full text-sm rounded-md focus:outline-black" />
              </div>

              <div>
                <input type="text" placeholder="Last Name"
                  class="px-4 py-3 bg-white  text-black w-full text-sm rounded-md focus:outline-black" />
              </div>

              <div>
                <input type="email" placeholder="Email"
                  class="px-4 py-3 bg-white  text-black w-full text-sm rounded-md focus:outline-black" />
              </div>

              <div>
                <input type="tel" placeholder="Phone No."
                  class="px-4 py-3 bg-white  text-black w-full text-sm rounded-md focus:outline-black" />
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h3 class="text-base text-black mb-4">Shipping Address</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <input type="address-line1" placeholder="Address Line"
                  class="px-4 py-3 bg-white  text-black w-full text-sm rounded-md focus:outline-black" />
              </div>
              <div>
                <input type="text" placeholder="City"
                  class="px-4 py-3 bg-white  text-black w-full text-sm rounded-md focus:outline-black" />
              </div>
              <div>
                <input type="text" placeholder="State"
                  class="px-4 py-3 bg-white  text-black w-full text-sm rounded-md focus:outline-black" />
              </div>
              <div>
                <input type="text" placeholder="Zip Code"
                  class="px-4 py-3 bg-white  text-black w-full text-sm rounded-md focus:outline-black" />
              </div>
            </div>

            <div className='mt-8'>
            <h3 class="text-base text-black mb-4">Order Notes (Optional)</h3>
            <textarea className='bg-white w-full' rows="4" cols="50">
            
            </textarea>
              </div>

            <div class="grid lg:grid-cols-2 gap-4 mt-8 text-sm text-black">
         <div className='bg-black text-yellow rounded-lg p-5'>
          <p>By clicking the "Proceed to checkout" button, you agree to our <a href="#" class="text-blue">Terms & Conditions</a> and <a href="#" class="text-blue">Privacy Policy</a> </p>
         </div>
         <div className='bg-black text-yellow rounded-lg p-5'>
          <p>By clicking the "Proceed to checkout" button, you will be redirected to the payment page.</p>
         </div>
        </div>

            <div class="flex gap-4 max-md:flex-col mt-8">
              <button type="button" class="rounded-md flex justify-center items-center gap-3 px-6 py-3 w-full text-sm tracking-wide bg-black hover:bg-red text-yellow"><span><LockClosedIcon height={20}/></span> Proceed to checkout</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Checkout