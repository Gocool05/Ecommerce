import { FaceFrownIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import Loading from '../../components/Loading/Loading';
import api from '../../Utils/api';

const baseUrl = api.defaults.baseURL;
let UserId;
if(localStorage.getItem("RegUserId")){
  UserId = localStorage.getItem("RegUserId");
}else if(localStorage.getItem("LoginUserId")){
  UserId = localStorage.getItem("LoginUserId");
}

const UserProfile = () => {

  const { data: Invoice,isLoading } = useQuery(['invoice',UserId], async ()=>{
    const res = await api.get(`/api/users/${UserId}?populate[0]=invoices.Invoice&populate[1]=invoices.purchased_orders.product.ProductImage`);
    return res.data;
  }
  );

  if(isLoading) return <Loading/>;

  console.log(Invoice,'Invoice');

  return (
    <div className="profile-page max-w-4xl mx-auto p-8">
      {/* Order History Section */}
      <div className="order-history  mb-20">
        <h2 className="text-2xl text-black  font-bold mb-4">Order History</h2>
        {Invoice?.length<=0 || Invoice === null  || Invoice === undefined?(
          <div className='flex flex-col items-center justify-center'>
            <FaceFrownIcon color='#4e2a1b' height={80}  />
          <h3 className="text-black text-2xl text-center ">No orders Found</h3>
          </div>
        ):(
          <div className=''>.
          <div className='flex mb-5 flex-column sm:flex-row justify-between m-4'>
            <h3 className="text-black text-lg  ">Your Name: <span className='text-xl font-bold uppercase'>{Invoice?.username}</span></h3>
            <h3 className="text-black text-lg  ">Your Email: <span className='text-xl font-bold'>{Invoice?.email}</span></h3>
          </div>
          <h2 class="flex flex-row flex-nowrap mb-10 items-center ">
          <span class="flex-grow block border-t border-red"></span>
          <span class="flex-none block mx-4 px-4 py-2.5 lg:text-xl rounded leading-none uppercase font-bold bg-red text-yellow">
              Download your invoice
          </span>
          <span class="flex-grow block border-t border-red"></span>
      </h2>
        {/* <ul className="space-y-4 space-x-4 w-full bg-black p-3"> */}
      
        {Invoice?.invoices.length ? (
        <ul className=' w-full bg-black p-5' >
          {Invoice?.invoices?.map((invoice,index) => (
                      <li className="flex justify-between border-b-2 py-5 items-center gap-5 text-yellow " key={index}>
                        <div className='w-full'>
                          {/* {console.log(invoice,'Invoices')} */}
                      Ordered Date:<span className="ml-2 text-white">
                        {invoice?.Invoice?.updatedAt ? new Date(invoice.Invoice.updatedAt).toLocaleString() : "N/A"}
                      </span>
                      <span className='flex flex-col gap-2 '>
                      {invoice?.purchased_orders.map((child,index)=>(
                        <div className='flex  gap-2 items-center p-2' key={index}>
                          <img className='h-14 sm:h-20 p-1 bg-yellow' src={`https://api.shriworks.com${child?.product?.ProductImage?.[0]?.url}`} alt="" />
                          <h1 className=''>{child?.product?.ProductName}</h1>
                        </div>
                      ))}
                      </span>
                      </div>
                      <a className='mr-2' href={`https://api.shriworks.com${invoice?.Invoice?.url}`} target={'_blank'} download={`${invoice?.Invoice?.name}`} >
                  <h3  className="hover:cursor-pointer m-3 text-sm  flex-wrap rounded justify-center w-full  flex transition-all hover:scale-105 duration-500 bg-yellow text-red  font-bold uppercase truncate">Download</h3>
                    </a>
                    </li>
          ))}
          </ul>
        ):(
          <div className='flex flex-col items-center justify-center'>
          <FaceFrownIcon color='#4e2a1b' height={80}  />
        <h3 className="text-black text-2xl text-center ">No Invoices Found</h3>
        </div>
        )}
        {/* </ul> */}
          </div>
        )
        }
      </div>
    </div>
  );
};

export default UserProfile;
