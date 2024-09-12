import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import api from '../../Utils/api';

const UserProfile = () => {
  // Fetch user profile data and order history
  const { data: user, refetch: refetchUser } = useQuery('user', async ()=>{
    const res = await api.get('/api/user');
    return res.data;
  });
  const { data: orders } = useQuery('orders', async()=>{
    const res = await api.get('/api/user/orders');
    return res.data;
  });

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
    oldPassword: '',
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
      <h1 className="text-2xl font-bold mb-8">User Profile</h1>
      
      {/* Profile Info Section */}
      <div className="profile-info mb-12">
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
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save Changes
          </button>
        </form>
      </div>

      {/* Password Update Section */}
      <div className="password-update mb-12">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <form onSubmit={handleUpdatePassword} className="space-y-4">
          <div>
            <label className="block text-gray-700">Old Password</label>
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
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Update Password
          </button>
        </form>
      </div>

      {/* Order History Section */}
      <div className="order-history">
        <h2 className="text-xl font-semibold mb-4">Order History</h2>
        <ul className="space-y-4">
          {orders?.map((order) => (
            <li key={order.id} className="border p-4 rounded-lg">
              <div className="flex justify-between">
                <span>Order ID: {order.id}</span>
                <span>{order.date}</span>
              </div>
              <div>Status: {order.status}</div>
              <div>Total: ${order.total}</div>
              {/* Expandable order details */}
              <details className="mt-2">
                <summary>View Items</summary>
                <ul className="pl-4">
                  {order.items.map((item) => (
                    <li key={item.id} className="py-1">
                      {item.name} x {item.quantity} - ${item.price}
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
