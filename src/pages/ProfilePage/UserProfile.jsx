import { FaceFrownIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import api from '../../Utils/api';

const baseUrl = api.defaults.baseURL;
let UserId;
if(localStorage.getItem("RegUserId")){
  UserId = localStorage.getItem("RegUserId");
}else if(localStorage.getItem("LoginUserId")){
  UserId = localStorage.getItem("LoginUserId");
}

const UserProfile = () => {
  // Fetch user profile data and order history
  const { data: user, refetch: refetchUser } = useQuery('user', async ()=>{
    const res = await api.get(`/api/users/${UserId}`);
    return res.data;
  });

  const { data: orders } = useQuery('orders', async()=>{
    const res = await api.get(`/api/users/${UserId}?populate[0]=purchased_orders&populate[1]=purchased_orders.product&populate[2]=purchased_orders.product.ProductImage`);
    return res?.data?.purchased_orders;
  });

  
  

// console.log(orders,'Purchased orders') 


  return (
    <div className="profile-page max-w-4xl mx-auto p-8">
      {/* Order History Section */}
      <div className="order-history  mb-20">
        <h2 className="text-2xl text-black  font-bold mb-4">Order History</h2>
        {orders?.length<=0 || orders === null  || orders === undefined?(
          <div className='flex flex-col items-center justify-center'>
            <FaceFrownIcon color='#4e2a1b' height={80}  />
          <h3 className="text-black text-2xl text-center ">No orders Found</h3>
          </div>
        ):(
          <div className=''>
        <ul className="space-y-4 w-full bg-black p-3">
          {orders?.map((order,index) => (
              <div className="flex items-start gap-4 border-b-2  rounded-md   border-yellow " key={index}>
              <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-2 bg3 mb-2 shrink-0 bg-yellow rounded-md">
                <img src={`${baseUrl}${order?.product?.ProductImage?.[0]?.url}`} className="w-full object-cover" />
              </div>
              <div className="w-full overflow-hidden">
               <div className='flex justify-between'>
                <h3 className="text-base text-yellow font-bold uppercase truncate">{order?.product?.ProductName}</h3>
              <a href='https://morth.nic.in/sites/default/files/dd12-13_0.pdf' target={'_blank'} download='dd12-13_0.pdf'>
                <h3 className="hover:cursor-pointer transition-all hover:scale-105 duration-500 sm:flex hidden bg-yellow text-red px-2 rounded font-bold uppercase truncate">Download Invoice</h3>
              </a>
               </div>
               
                <ul className="text-xs text-yellow space-y-2 mt-2">
                  <li className="flex flex-wrap gap-4">Quantity <span className="ml-auto text-white">{order?.Quantity}</span></li>
                  {order?.product?.Offer ? (
                    <li className="flex flex-wrap gap-4">Total Price <span className="ml-auto text-white">&#8377; {Number((order?.product?.Price - ((order.product?.Offer/100) * order.product?.Price)))*(order?.Quantity)}</span></li>
                    ):(
                      <li className="flex flex-wrap gap-4">Total Price <span className="ml-auto text-white">&#8377; {Number(order?.product?.Price)*(order?.Quantity)}</span></li>
                      )}
                      <li className="flex flex-wrap gap-4">
                      Ordered Date
                      <span className="ml-auto text-white">
                        {order?.updatedAt ? new Date(order.updatedAt).toLocaleDateString() : "N/A"}
                      </span>
                    </li>
                </ul>
              <a href='https://morth.nic.in/sites/default/files/dd12-13_0.pdf' target={'_blank'} download='dd12-13_0.pdf'>
              <h3 className="hover:cursor-pointer m-3 text-sm  rounded justify-center w-full sm:hidden flex transition-all hover:scale-105 duration-500 bg-yellow text-red  font-bold uppercase truncate">Download Invoice</h3>
                </a>
              </div>
            </div>
          ))}
        </ul>
          </div>
        )
        }
      </div>
    </div>
  );
};

export default UserProfile;
