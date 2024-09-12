import React, { useState } from 'react';
import Modal from 'react-modal';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import api from '../../Utils/api'

const useRegisterQuery = () => {
  return useMutation(
    async (registerData) => {
      const res = await api.post('/api/auth/local/register', registerData);
      return res.data;
    });
}

const useLoginQuery = () => {
  return useMutation(
    async (loginData) => {
      const res = await api.post('/api/auth/local', loginData);
      return res.data;
    });
}


const Login = ({ setIsOpen, modalIsOpen }) => {

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

  const handleLogin = (e) => {
    e.preventDefault();
  if(loginMobile  && loginPassword){
    // Call the mutation function from useRegisterQuery
    mutateLogin({ 
      identifier: loginMobile,
      password: loginPassword, 
      });
}else {
    alert('Invalid credentials');
  }
  };

  
  const handleRegister = async(e) => {
    e.preventDefault();
     if (registerMobile && registerEmail && registerPassword && registerName) {
      try {
        // Call the mutation function from useRegisterQuery
        mutateRegister({ 
           PhoneNumber: registerMobile,
           email:registerEmail,
           password: registerPassword, 
           username: registerName,
          });
        
        // Simulate OTP being sent to new users
        toast.success('OTP has been sent to you.');
          setIsOtpSent(true);
      } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
      }
    } else {
      alert('Please fill in all fields');
    }
  };


  const handleVerifyOtp = async () => {
    try {
      // Trigger the OTP mutation and verify the OTP
      mutateOtp({
        phoneNumber: registerMobile,
        otp: otp,
      }, {
        onSuccess: (data) => {
          // Use the response data to check if OTP verification was successful
          if (data.message) {
            toast.success("OTP Verification Successful");
            setLoggedIn(true);
            closeModal();
          } else {
            toast.error("Invalid OTP");
          }
        },
        onError: (error) => {
          console.error("OTP verification failed:", error);
          toast.error("Invalid OTP.");
        }
      });
    } catch (error) {
      console.error("Error in OTP verification:", error);
      toast.error("OTP verification failed. Please try again.");
    }
  };
  
    localStorage.setItem('loggedIn',loggedIn);

  const handleForgotPassword = () => {
    alert('Password reset link has been sent to your email');
    closeModal();
  };



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
