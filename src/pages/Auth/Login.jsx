import React, { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-modal';
import { useMutation, useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginSuccess } from '../../Slice/authSlice';
import { loginUser, registerUser, verifyOtp } from '../../Slice/authThunk';
import { setCartItems } from '../../Slice/cartSlice';
import api from '../../Utils/api'

const useRegisterQuery = () => {
  return useMutation(
    async (registerData) => {
      const res = await api.post('/api/auth/local/register', registerData);
      return res.data;
    });
}





const Login = ({ setIsOpen, modalIsOpen }) => {

  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loginMobile, setLoginMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpMessage, setOtpMessage] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerMobile, setRegisterMobile] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const useLoginQuery = () => useMutation(
    async (loginData) => {
      const res = await api.post('/api/auth/local', loginData);
      return res.data;
    },
    {
      onSuccess: (data) => {
        const { jwt, user } = data;
        localStorage.setItem('JwtToken', jwt);
        dispatch(loginSuccess({ token: jwt, user })); // Set auth data in Redux
        // Fetch user cart after login
        fetchCartData(user.id);
      },
    }
  );

  const fetchCartData = async (userId) => {
    try {
      // Fetch the user's cart from Strapi backend (ensure the API endpoint and structure are correct)
      const { data } = await api.get(`/api/users/33?populate=cart`);
      console.log('33 users cart fetched',data);
      // Assuming the cart data is in 'cart' field in response
      dispatch(setCartItems(data?.cart || [])); // Set cart items in Redux
    } catch (error) {
      console.error("Failed to fetch cart data:", error);
    }
  };

  useEffect(()=>{
    fetchCartData();
  },[])



  const {data:auth} = useQuery("Auth", async ()=>{
    const res = await api.get(`/api/users/33`)
    return res.data;
  })

// console.log('Login Deatils',auth);

localStorage.setItem('User', auth);
localStorage.setItem('UserId', auth?.id);
localStorage.setItem('EmailId', auth?.email);
localStorage.setItem('JwtToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImlhdCI6MTcyNjU1NjM5MSwiZXhwIjoxNzI5MTQ4MzkxfQ.IJyBOWaN_7YtEJvbUibEs3IIcXxtAfqmEz8O8TK0q3k');
localStorage.getItem('JwtToken');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: '0px',
      width: 'fit-content',
      margin: 'auto',
      zIndex: 50,
    },
  };
  const useOtpQuery = () => {
    return useMutation(
      async (otpData) => {
        const res = await api.post('/api/auth/verifyOTP', otpData);
        setOtpMessage(res.data.message);
        console.log(res)
        return res.data;
      });
  }
  const SentOtp = otpMessage;

  const {mutate:mutateRegister} = useRegisterQuery();
  const {mutate:mutateLogin } = useLoginQuery();
  const {mutate:mutateOtp } = useOtpQuery();

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginMobile && loginPassword) {
      try {
        await dispatch(loginUser({ identifier: loginMobile, password: loginPassword })).unwrap();
        setIsOpen(false);
      } catch (error) {
        toast.error('Login failed. Please try again.');
      }
    } else {
      toast.error('Invalid credentials');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerMobile && registerEmail && registerPassword && registerName) {
      try {
        await dispatch(registerUser({
          PhoneNumber: registerMobile,
          email: registerEmail,
          password: registerPassword,
          username: registerName
        })).unwrap();
        toast.success('OTP has been sent to you.');
        setIsOtpSent(true);
      } catch (error) {
        toast.error('Registration failed. Please try again.');
      }
    } else {
      toast.error('Please fill in all fields');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await dispatch(verifyOtp({
        phoneNumber: registerMobile,
        otp: otp
      })).unwrap();
      toast.success("OTP Verification Successful");
      setIsOpen(false);
    } catch (error) {
      toast.error("Invalid OTP.");
    }
  };

  const handleForgotPassword = () => {
    alert('Password reset link has been sent to your email');
    closeModal();
  };

console.log(modalIsOpen,'sidugfisajdofjdjf');

  return (
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Login Modal"
      overlayClassName="fixed inset-0 bg-red bg-opacity-70 z-[9999]"
    >
      {isLogin ? (
      <div className="bg-red bg3 shadow-2xl lg:grid grid-cols-2 w-full mx-auto transition duration-1000 ease-out">
      <div className='lg:flex hidden justify-center relative object-cover'>
        <img className='object-cover' src="https://api.shriworkscraft.com/uploads/ganesha_statue_cf533b6df9.webp" alt="" />
      </div>
      <form onSubmit={handleLogin} className='flex flex-col gap-3 lg:my-5 mx-2 p-2'>
        <h2 className='text-2xl text-yellow uppercase text-center font-bold'>Login to Shriworks</h2>
        <div className='flex relative flex-col items-center justify-center'>
          <input
            type='tel'
            className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
            placeholder='Phone Number'
            value={loginMobile}
            onChange={(e) => setLoginMobile(e.target.value)}
            autoComplete='Email'
            maxLength={10}
          />
          <input
            type="password"
            className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
            placeholder='Password'
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            autoComplete='current-password'
          />
        </div>
        <div className='w-full'>
          <p
            className='text-white float-end mr-1 font-bold cursor-pointer text-sm'
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </p>
        </div>
        <div className='flex flex-col'>
          <button
            type="submit"
            className='rounded-md my-2 text-red font-bold bg-yellow w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base shadow-md uppercase hover:bg-white transition duration-200 ease-in'
          >
            Login
          </button>
          <button
            type="button"
            className='rounded-md my-2 text-red bg-white w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base font-bold shadow-md uppercase hover:bg-red hover:text-yellow transition duration-200 ease-in'
            onClick={() => setIsLogin(false)}
          >
            New to Shriworks?
          </button>
        </div>
      </form>
    </div>
      
      ) : (
        <div className="bg-red bg3 shadow-2xl lg:grid grid-cols-2 w-full mx-auto transition duration-1000 ease-out">
        <div className='lg:flex hidden justify-center relative object-cover'>
          <img className='object-cover' src="https://api.shriworkscraft.com/uploads/91724_VLJH_0_L_221baac9a2.jpg" alt="" />
        </div>
        <form onSubmit={handleRegister} className='flex flex-col gap-3 lg:my-5 mx-2 p-2'>
          <h2 className='text-2xl text-yellow uppercase text-center font-bold'>Signup to Shriworks</h2>
          <div className='flex relative flex-col items-center justify-center'>
            <input
              type='text'
              className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
              placeholder='Your Name'
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              required={true}
            />
            <input
              type='email'
              className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
              placeholder='Email address'
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              required={true}
            />
            <input
              type='tel'
              className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
              placeholder='Phone Number'
              value={registerMobile}
              onChange={(e) => setRegisterMobile(e.target.value)}
              minLength={10}
              maxLength={10}
              required={true}
            />
            <input
              type="password"
              className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
              placeholder='Password'
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              required={true}
            />
    
        {isOtpSent && (
          <input
            type='text'
            className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
            placeholder='Enter OTP'
            value={otp}
            maxLength={6}
            minLength={6}
            onChange={(e)=>{setOtp(e.target.value)}}
            required={true}
          />
        )}
          </div>
          <div className='flex flex-col'>
             
          {isOtpSent ? (
          <button
            type="button"
            className='rounded-md my-2 text-red font-bold bg-yellow w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base shadow-md uppercase hover:bg-white transition duration-200 ease-in'
            onClick={handleVerifyOtp}
          >
            Verify OTP
          </button>
        ) : (
          <button
            type="submit"
            className='rounded-md my-2 text-red font-bold bg-yellow w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base shadow-md uppercase hover:bg-white transition duration-200 ease-in'
          >
            Register
          </button>
        )}
            <button
              type="button"
              className='rounded-md my-2 text-red bg-white w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base font-bold shadow-md uppercase hover:bg-red hover:text-yellow transition duration-200 ease-in'
              onClick={() => setIsLogin(true)}
            >
              Existing user? Log in
            </button>
          </div>
        </form>
      </div>
      )}
    </Modal>
  );
};

export default Login;
