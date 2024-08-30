import React from 'react'
import { useState } from 'react';
import ReactModal from 'react-modal';

const Login = ({setIsOpen,modalIsOpen}) => {

    const [isLogin,setIsLogin] = useState(true);
    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");
  
    const [registerEmail,setRegisterEmail] = useState("");
    const [registerPassword,setRegisterPassword] = useState("");
    const [registerName,setRegisterName] = useState("");
    const [registerAvatar,setRegisterAvatar] = useState("");

    function openModal() {
        setIsOpen(true);
      }
    function closeModal() {
        setIsOpen(false);
      }

      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          padding:'0px',
          width:'fit-content',
          margin:'auto',
          zIndex:50,
        },
      };

    const LoginForm = () => {
        return(
           <div className="bg-red bg3  shadow-2xl lg:grid grid-cols-2 w-full mx-auto   transition duration-1000 ease-out">
                
                <div className='lg:flex hidden justify-center relative  object-cover'>
                 <img className='object-cover' src="https://api.shriworkscraft.com/uploads/ganesha_statue_cf533b6df9.webp" alt="" />
                 {/* <div className='absolute  w-full h-full px-2 bg-[#000]/25 text-xl text-yellow uppercase font-bold'>
                   <h3 className='text-center'>Welcome to Shriworks</h3>
                   </div> */}
                  </div> 
                 {/* Inputs */}
                 <div className='flex flex-col gap-3 lg:my-5 mx-2 p-2'>
                  <h2 className='text-2xl text-yellow uppercase text-center font-bold'>Login to shriworks</h2>
                   <p className='text-black text-center text-sm'></p>
                 <div className='flex relative flex-col items-center justify-center'>
                  <input type='email' className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0' placeholder='Email'></input>
                  <input type="password" className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0' placeholder='Password'></input>
                 </div>
                   <div className='w-full'>
                  <p className='text-white float-end mr-1 font-bold cursor-pointer text-sm'>Forgot Password?</p> 
                   </div>
                 <div className='flex flex-col '> 
                  <button className='rounded-md my-2 text-red font-bold bg-yellow w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base  shadow-md uppercase  hover:bg-white transition duration-200 ease-in'>
                    Login
                  </button>
                  <button  className='rounded-md my-2 text-red bg-white w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base  font-bold shadow-md uppercase hover:bg-red hover:text-yellow transition duration-200 ease-in' onClick={() => setIsLogin(false)}>
                  New to Shriworks ?
                  </button>
                 </div>
              </div>

                 </div>
        )
      }
      
      const  SignUpForm = () => {
         return(
           <div className="bg-red bg3  shadow-2xl lg:grid grid-cols-2 w-full mx-auto   transition duration-1000 ease-out">
                
                <div className='lg:flex hidden justify-center relative  object-cover'>
                 <img className='object-cover' src="https://api.shriworkscraft.com/uploads/91724_VLJH_0_L_221baac9a2.jpg" alt="" />
                 {/* <div className='absolute  w-full h-full px-2 bg-[#000]/25 text-xl text-yellow uppercase font-bold'>
                   <h3 className='text-center'>Welcome to Shriworks</h3>
                   </div> */}
                  </div> 
                 {/* Inputs */}
                 <div className='flex flex-col gap-3 lg:my-5 mx-2 p-2'>
                  <h2 className='text-2xl text-yellow uppercase text-center font-bold'>Signup to shriworks</h2>
                   <p className='text-black text-center text-sm'></p>
                 <div className='flex relative flex-col items-center justify-center'>
                  <input type='text' className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0' placeholder='Your Name'></input>
                  <input type='email' className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0' placeholder='Email'></input>
                  <input type="password" className='rounded-sm px-2 py-2 w-full border-[1px] bg-white border-red lg:m-1 focus:shadow-md focus:border-black focus:outline-none focus:ring-0' placeholder='Password'></input>
                 </div>
                 <div className='flex flex-col '> 
                 <button className='rounded-md my-2 text-red font-bold bg-yellow w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base  shadow-md uppercase  hover:bg-white transition duration-200 ease-in'>
                    Register
                  </button>
                  <button  className='rounded-md my-2 text-red bg-white w-full lg:px-2 lg:py-2 py-1 px-1 text-[12px] md:text-base  font-bold shadow-md uppercase hover:bg-red hover:text-yellow transition duration-200 ease-in' onClick={() => setIsLogin(true)}>
                  Existing user? Log in
                  </button>
                 </div>
              </div>

                 </div>
         )
      }
    
      
      
      return (
        <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
        <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        overlayClassName="fixed inset-0 bg-red bg-opacity-70 z-[9999]" 
      >
          {
            isLogin? (
             <LoginForm/>
            ):(
             <SignUpForm/>
            )
          }
            </ReactModal>
            </div>
      )
}

export default Login;