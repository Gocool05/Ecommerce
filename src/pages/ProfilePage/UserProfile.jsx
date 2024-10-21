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
  // console.log(orders,'Order history')

  // Mutations for updating user info and password
  const updateUser = useMutation(async (userData) => {
    const res = await api.put('/api/user', userData);
    return res.data;
  }, {
    onSuccess: () => refetchUser(),
  });

  const updatePassword = useMutation(async (passwordData) => {
    const res = await api.post('/api/user/change-password', passwordData);
    return res.data;
  });

  // Form states
  const [userData, setUserData] = useState({
    username: user?.username || '',
    email: user?.email || '',
  });
  
  const [passwordData, setPasswordData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  // Handle profile update
  const handleUpdateUser = (e) => {
    e.preventDefault();
    updateUser.mutate(userData);
  };

  // Handle password update
  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (passwordData.newPassword === passwordData.confirmPassword) {
      updatePassword.mutate(passwordData);
    } else {
      alert('New password and confirmation do not match.');
    }
  };




  return (
    <div className="profile-page max-w-4xl mx-auto p-8">
      {/* <h1 className="text-2xl font-bold uppercase text-red mb-8">User Profile</h1> */}
      
      {/* Profile Info Section */}
      {/* <div className='flex justify-between sm:flex-row flex-col gap-10'>
      <div className="profile-info text-red mb-12 md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Edit Profile Information</h2>
        <form onSubmit={handleUpdateUser} className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-red text-white rounded"
          >
            Save Changes
          </button>
        </form>
      </div>
      <div className="password-update text-red mb-12 md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <form onSubmit={handleUpdatePassword} className="space-y-4">
          <div>
            <label className="block text-gray-700">Current Password</label>
            <input
              type="password"
              name="oldPassword"
              value={passwordData.oldPassword}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-red text-white rounded"
          >
            Update Password
          </button>
        </form>
      </div>
      </div> */}

      {/* Order History Section */}
      <div className="order-history  mb-20">
        <h2 className="text-2xl text-black  font-bold mb-4">Order History</h2>
        {orders?.length<0 || orders === null || orders === undefined?(
          <div className='flex flex-col items-center justify-center'>
            <FaceFrownIcon color='#4e2a1b' height={80}  />
          <h3 className="text-black text-2xl text-center ">No orders Found</h3>
          </div>
        ):(
        <ul className="space-y-4 bg-black p-3 rounded">
          {orders?.map((order,index) => (
              <div className="flex items-start gap-4 border-b-2 rounded-md   border-yellow " key={index}>
              <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-2 bg3 mb-2 shrink-0 bg-yellow rounded-md">
                <img src={`${baseUrl}${order.product?.ProductImage[0]?.url}`} className="w-full object-cover" />
              </div>
              <div className="w-full overflow-hidden">
                <h3 className="text-base text-yellow font-bold uppercase truncate">{order?.product?.ProductName}</h3>
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
              </div>
            </div>
          ))}
        </ul>
        )
        }
      </div>
    </div>
  );
};

export default UserProfile;
