import react from '@heroicons/react';
import React, { useState } from 'react';
import ReactModal from 'react-modal';

const Login = ({ setIsOpen, modalIsOpen }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [otpInput, setOtpInput] = useState("");

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const dummyOtp = '123456'; // Replace with your OTP generation logic

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

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLogin = () => {
    // Dummy login check
    if (loginEmail === 'test@example.com' && loginPassword === 'password') {
      setIsOtpSent(true); // Proceed to OTP verification
    } else {
      alert('Invalid credentials');
    }
  };

  const handleRegister = () => {
    // Dummy register check
    if (registerEmail && registerPassword && registerName) {
      setIsOtpSent(true); // Proceed to OTP verification
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleVerifyOtp = () => {
    if (otpInput === dummyOtp) {
      alert('OTP verified! You are logged in.');
      setIsOpen(false); // Close the modal on successful OTP verification
    } else {
      alert('Invalid OTP');
    }
  };

  const handleForgotPassword = () => {
    // Simulate sending a password reset email
    alert('A password reset link has been sent to your email.');
    setIsOpen(false); // Close the modal or redirect to a password reset page
  };

  const LoginForm = () => (
    <div className="bg-red bg3 shadow-2xl lg:grid grid-cols-2 w-full mx-auto transition duration-1000 ease-out">
      <div className='lg:flex hidden justify-center relative object-cover'>
        <img className='object-cover' src="https://api.shriworkscraft.com/uploads/ganesha_statue_cf533b6df9.webp" alt="" />
      </div>
      <form onSubmit={handleLogin} className='flex flex-col gap-3 lg:my-5 mx-2 p-2'>
        <h2 className='text-2xl text-yellow uppercase text-center font-bold'>Login to Shriworks</h2>
        <div className='flex relative flex-col items-center justify-center'>
          <input
            type='email'
            className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
            placeholder='Email'
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          {console.log(loginEmail,'LoginEmail')}
          <input
            type="password"
            className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
            placeholder='Password'
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
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
            className='rounded-md my-2 text-red font-bold bg-yellow w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base shadow-md uppercase hover:bg-white transition duration-200 ease-in'
            // onClick={handleLogin}
          >
            Login
          </button>
          <button
            className='rounded-md my-2 text-red bg-white w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base font-bold shadow-md uppercase hover:bg-red hover:text-yellow transition duration-200 ease-in'
            onClick={() => setIsLogin(false)}
          >
            New to Shriworks?
          </button>
        </div>
      </form>
    </div>
  );

  const SignUpForm = () => (
    <div className="bg-red bg3 shadow-2xl lg:grid grid-cols-2 w-full mx-auto transition duration-1000 ease-out">
      <div className='lg:flex hidden justify-center relative object-cover'>
        <img className='object-cover' src="https://api.shriworkscraft.com/uploads/91724_VLJH_0_L_221baac9a2.jpg" alt="" />
      </div>
      <form onSubmit={handleRegister} className='flex flex-col gap-3 lg:my-5 mx-2 p-2'>
        <h2 className='text-2xl text-yellow uppercase text-center font-bold'>Signup to Shriworks</h2>
        <div className='flex relative flex-col items-center justify-center'>
          <input
            type='text'
            className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg
            m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
            placeholder='Your Name'
            value={registerName}
            onChange={(e) => setRegisterName(e.target.value)}
          />
          <input
            type='email'
            className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
            placeholder='Email'
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <input
            type="password"
            className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
            placeholder='Password'
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          {isOtpSent && (
            <input
              type='text'
              className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
              placeholder='Enter OTP'
              value={otpInput}
              onChange={(e) => setOtpInput(e.target.value)}
            />
          )}
        </div>
        <div className='flex flex-col'>
          <button
            className='rounded-md my-2 text-red font-bold bg-yellow w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base shadow-md uppercase hover:bg-white transition duration-200 ease-in'
            // onClick={handleRegister}
          >
            Register
          </button>
          <button
            className='rounded-md my-2 text-red bg-white w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base font-bold shadow-md uppercase hover:bg-red hover:text-yellow transition duration-200 ease-in'
            onClick={() => setIsLogin(true)}
          >
            Existing user? Log in
          </button>
        </div>
      </form>
    </div>
  );

  const OtpVerification = () => (
    <div className="bg-red bg3 shadow-2xl lg:grid grid-cols-2 w-full mx-auto transition duration-1000 ease-out">
      <div className='lg:flex hidden justify-center relative object-cover'>
        <img className='object-cover' src="https://api.shriworkscraft.com/uploads/ganesha_statue_cf533b6df9.webp" alt="" />
      </div>
      <div className='flex flex-col gap-3 lg:my-5 mx-2 p-2'>
        <h2 className='text-2xl text-yellow uppercase text-center font-bold'>OTP Verification</h2>
        <div className='flex relative flex-col items-center justify-center'>
          <input
            type='text'
            className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
            placeholder='Enter OTP'
            value={otpInput}
            onChange={(e) => setOtpInput(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <button
            className='rounded-md my-2 text-red font-bold bg-yellow w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base shadow-md uppercase hover:bg-white transition duration-200 ease-in'
            onClick={handleVerifyOtp}
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        overlayClassName="fixed inset-0 bg-red bg-opacity-70 z-[9999]"
      >
        {isOtpSent ? <OtpVerification /> : isLogin ? <LoginForm /> : <SignUpForm />}
      </ReactModal>
    </div>
  );
};

export default Login;
