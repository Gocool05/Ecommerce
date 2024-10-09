import React, { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-modal';
import { useMutation, useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginSuccess } from '../../Slice/authSlice';
import { loginUser, registerUser, resendOtp, verifyOtp } from '../../Slice/authThunk';
import { setCartItems } from '../../Slice/cartSlice';
import api from '../../Utils/api'

const LoginUserId = localStorage.getItem('LoginUserId');
const RegUserId = localStorage.getItem('RegUserId');
const RegName = localStorage.getItem('RegName');
const RegEmail = localStorage.getItem('RegEmail');
const RegNumber = localStorage.getItem('RegNumber');
let RegConfirmed = localStorage.getItem('RegConfirmed')==="true";
let UserId;

if(LoginUserId){
  UserId = LoginUserId;
}else if(RegUserId){
  UserId = RegUserId;
}else{
  UserId = null;
}

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
  const [loginEmail, setLoginEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpMessage, setOtpMessage] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerMobile, setRegisterMobile] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [timeLeft, setTimeLeft] = useState(30); // Timer countdown (30 seconds)
  const [isDisabled, setIsDisabled] = useState(false);
  const [Error, setError] = useState("");


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


  const {data:auth} = useQuery("Auth", async ()=>{
    const res = await api.get(`/api/users/${LoginUserId}`)
    return res.data;
  },{enabled:!UserId})
  // console.log(auth,'AUth Details')

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: '0px',
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
    if (loginEmail && loginPassword) {
      try {
        await dispatch(loginUser({ identifier: loginEmail, password: loginPassword })).unwrap();
        setIsOpen(false);
        localStorage.setItem('LoginConfirmed', true);
        toast.success('Logged in successfully');
        window.location.reload();
      } catch (error) {
        toast.error('Login failed. Please try again.');
        setTimeout(setError,3000);
        setError('Login failed. Please try again.');
      }
    } else {
      toast.error('Invalid credentials');
      setTimeout(setError,3000);
      setError('Invalid credentials');
    }
  };

    // Timer effect
    useEffect(() => {
      if (isOtpSent || !RegConfirmed && timeLeft > 0) {
        const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timerId);
      }
    }, [timeLeft, isOtpSent,RegEmail]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (registerMobile && registerEmail && registerPassword && registerName) {
      setIsDisabled(true);
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
        setError("Registration failed. Please try again");
        setTimeout(setError,3000);
        toast.error('Registration failed. Please try again');
      }
    } else {
      setError("Please fill in all fields");
      setTimeout(setError,3000);
      toast.error('Please fill in all fields');
    }
  };

  const handleVerifyOtp = async () => {
    let Email;
      if( registerEmail){
        Email = registerEmail;
        }else if(RegEmail){
          Email = RegEmail;
        }
    try {
      await dispatch(verifyOtp({
          emailId: Email,
          otp: otp,
      })).unwrap();
      toast.success("OTP Verification Successful");
      localStorage.setItem('userConfirmed', true);
      setIsOpen(false);
      window.location.reload();
    } catch (error) {
      setError("Invalid / Expired OTP.");
      setTimeout(setError,3000);
      toast.error("Invalid / Expired OTP.");
    }
  };
  const userConfirmed = localStorage.getItem('userConfirmed')==="true";
  // console.log(userConfirmed,'userConfirmed')

  const handleResendOtp = async () => {
    let Email;
    if( registerEmail){
      Email = registerEmail;
      }else if(RegEmail){
        Email = RegEmail;
      }
    try {
      await dispatch(resendOtp(
        {emailId: Email }
        )).unwrap();
        setTimeout(()=>{
          setIsDisabled(true);
        },1000)
        setIsDisabled(false);
      toast.success("New OTP has been sent.");
      setTimeLeft(60); // Reset the timer
    } catch (error) {
      setError("Failed to resend OTP. Please try again.");
      setTimeout(setError,3000);
      toast.error("Failed to resend OTP. Please try again.");
    }
  };


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
      ariaHideApp={false}
    >
      {!isLogin ? (
      <div className="bg-red bg3 shadow-2xl flex lg:grid grid-cols-2 w-full mx-auto transition duration-1000 ease-out">
      <div className='lg:flex hidden justify-center relative object-cover'>
        <img className='object-cover' src="https://api.shriworkscraft.com/uploads/ganesha_statue_cf533b6df9.webp" alt="" />
      </div>
      <form onSubmit={handleLogin} className='flex w-[300px] md:w-auto flex-col gap-3 lg:my-5 mx-2 p-2'>
        <h2 className='text-2xl text-yellow uppercase text-center font-bold'>Login to Shriworks</h2>
        <div className='flex relative flex-col items-center justify-center'>
          <input
            type='email'
            className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
            placeholder='Email Address'
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            autoComplete='Email'
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
            onClick={() => setIsLogin(true)}
          >
            New to Shriworks?
          </button>
        </div>
      </form>
    </div>
      
      ) : (
        <div className="bg-red bg3 shadow-2xl flex lg:grid grid-cols-2 w-full mx-auto transition duration-1000 ease-out">

        <div className='lg:flex hidden justify-center relative object-cover'>
          <img className='object-cover' src="https://api.shriworkscraft.com/uploads/91724_VLJH_0_L_221baac9a2.jpg" alt="" />
        </div>

            <div className='flex flex-col justify-center'>

        {!userConfirmed ? (<form  className='flex flex-col w-[300px] md:w-auto gap-3 lg:my-5 mx-2 p-2 justify-center '>
          <h2 className='text-2xl text-yellow uppercase text-center font-bold'>Signup to Shriworks</h2>
          <div className='flex relative flex-col items-center justify-center'>
          {!RegEmail &&
          <div>
            <input
              type='text'
              className='rounded-sm px-2 py-2 w-full border-[1px]  bg-white border-red my-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
              placeholder='Your Name'
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              required={true}
            />
            <input
              type='email'
              className='rounded-sm px-2 py-2 w-full border-[1px]  bg-white border-red my-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
              placeholder='Email address'
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              required={true}
            />
            <input
              type='tel'
              className='rounded-sm px-2 py-2 w-full border-[1px]  bg-white border-red my-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
              placeholder='Phone Number'
              value={registerMobile}
              onChange={(e) => setRegisterMobile(e.target.value)}
              minLength={10}
              maxLength={10}
              required={true}
            />
            <input
              type="password"
              className='rounded-sm px-2 py-2 w-full border-[1px]  bg-white border-red my-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
              placeholder='Password'
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              required={true}
            />
            </div>
          }
          </div>
          <div className='flex flex-col'>
             
          {isOtpSent || RegEmail? (
            <>
            <input 
            type='text'
            className='rounded-sm p-2 w-full border-[1px]  bg-white border-red  my-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0'
            placeholder='Enter OTP'
            value={otp}
            maxLength={6}
            minLength={6}
            onChange={(e)=>{setOtp(e.target.value)}}
            required
          />
          {Error && <p className='text-center text-[#FF0000] font-bold uppercase animate-pulse'>{Error}</p>}
          <p className='text-center py-2 text-yellow'>
                  {timeLeft > 0
                    ? `You can resend OTP in ${timeLeft}s`
                    : <button onClick={handleResendOtp} disabled={timeLeft > 0}>Resend OTP</button>}
                </p>
          <button
            type="button"
            className='rounded-md my-2 text-red font-bold bg-yellow w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base shadow-md uppercase hover:bg-white transition duration-200 ease-in'
            onClick={handleVerifyOtp}
            disabled={otp.length < 6}
            >
            Verify OTP
          </button>
            </>

        ) : (
          <>
          {Error && <p className='text-center text-[#FF0000] font-bold uppercase animate-pulse'>{Error}</p>}
          <button
            type="submit"
            className='rounded-md my-2 text-red font-bold bg-yellow w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base shadow-md uppercase hover:bg-white transition duration-200 ease-in'
            onClick={handleRegister}
            disabled={isDisabled}
          >
            Register
          </button>
          </>
        )}
            <button
              type="button"
              className='rounded-md my-2 text-red bg-white w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base font-bold shadow-md uppercase hover:bg-red hover:text-yellow transition duration-200 ease-in'
              onClick={() => setIsLogin(false)}
            >
              Existing user? Log in
            </button>
          </div>
        </form>
        ):(
          <div className='flex flex-col justify-center mx-2 px-2  items-center text-center '>
            <h2 className='text-2xl text-yellow uppercase mb-2 text-center font-bold'>User Already Registered</h2>
            <button
              type="button"
              className='rounded-md my-2 text-red bg-white w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base font-bold shadow-md uppercase hover:bg-red hover:text-yellow transition duration-200 ease-in'
              onClick={() => setIsLogin(false)}
            >
              Click here to Log in
            </button>
          </div>
          )
        }
            </div>
      </div>
      )}
    </Modal>
  );
};

export default Login;
