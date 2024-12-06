import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../Utils/api';

const ForgetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const location = useLocation();

  // Function to extract query parameter from the URL
  const getQueryParam = (param) => {
    return new URLSearchParams(location.search).get(param);
  };

  // Fetch the 'code' from the URL
  const code = getQueryParam('code');

  const handleForgetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert('Passwords do not match');
      return;
    }else{
        if (code) {
            // console.log(code,newPassword,confirmNewPassword,'Forget Password');
            try {
              const res = await api.post(`api/auth/reset-password`, {
                code: code,
                password: newPassword,
                passwordConfirmation: confirmNewPassword,
              });
              // console.log(res, 'Forget password reset');
              alert('Password has been successfully reset!');
              window.location.href = '/';
            } catch (error) {
              console.log(error);
              alert('Failed to reset the password');
            }
          } else {
            alert('Invalid code.');
          }
    }
    
  };

  return (
    <div className='my-20 flex justify-center items-center'>
      <div className="password-update text-red mb-12 md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <form onSubmit={handleForgetPassword} className="space-y-4">
          <div>
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
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
    </div>
  );
};

export default ForgetPassword;
