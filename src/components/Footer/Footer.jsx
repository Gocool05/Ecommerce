import React from 'react'
import './Footer.css'
const Footer = () => {

  return (
<footer
  className="bg-red  sm:text-center bg2 text-surface/75  lg:text-left">

  <div className="mx-6 py-10 sm:text-center text-yellow md:text-left">
    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="">
        <h6
          className="mb-4 flex sm:items-center sm:justify-center font-semibold uppercase md:justify-start">
          ShriWorks
        </h6>
        <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi nobis molestias nam dolorem eligendi libero cupiditate ea, suscipit tempore ipsam quam ratione aliquid modi odio quis fugit. Rem, quos?
        </p>
      </div>

      <div className='flex sm:justify-center flex-col  '>
        <h6
          className="mb-4 flex  sm:justify-center font-semibold uppercase md:justify-start">
          Insights
        </h6>
        <p className="mb-4">
          <a href="#!">Return Policy</a>
        </p>
        <p className="mb-4">
          <a href="#!">Shipping Policy</a>
        </p>
        <p className="mb-4">
          <a href="#!">Cancellation Policy</a>
        </p>
        <p>
          <a href="#!">Terms and Condition</a>
        </p>
    
      </div>
      <div className='flex  flex-col  '>
        <h6
          className="mb-4 flex sm:justify-center font-semibold uppercase md:justify-start">
          Factory
        </h6>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path
                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </span>
          3, Aringar Anna,Co-operative Nagar Darasuram,
          Kumbakonam- 612702
        </p>
        <p className="mb-4 flex items-center sm:justify-center md:justify-start">
          <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path
                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </span>
          info@shriworks.com
        </p>
        <p className="mb-4 flex items-center sm:justify-center md:justify-start">
          <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd" />
            </svg>
          </span>
          (+ 91) 99428 44005
        </p>
      </div>
     
      <div>
        <h6
          className="mb-4 flex sm:justify-center font-semibold uppercase md:justify-start">
          Contact
        </h6>
        <p className="mb-4 flex items-center sm:justify-center md:justify-start">
          <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path
                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </span>
          Arcot Road,Vadapalani,
          Chennai- 600026
        </p>
        <p className="mb-4 flex items-center sm:justify-center md:justify-start">
          <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path
                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </span>
          info@shriworks.com
        </p>
        <p className="mb-4 flex items-center sm:justify-center md:justify-start">
          <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd" />
            </svg>
          </span>
          (+ 91) 99887 76655
        </p>

        <div className="flex p-2 bg-yellow w-fit rounded-lg ">
      <a href="#!" className="mx-2 [&>svg]:h-4 [&>svg]:w-4 vibrate-1 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#4e2a1b"
          viewBox="0 0 320 512">
          <path
            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
        </svg>
      </a>
      <a href="#!" className="mx-2 [&>svg]:h-4 [&>svg]:w-4 vibrate-1  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#4e2a1b"
          viewBox="0 0 512 512">
          <path
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      </a>
      <a href="#!" className="mx-2 [&>svg]:h-4 [&>svg]:w-4 vibrate-1 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#4e2a1b"
          viewBox="0 0 448 512">
          <path
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </a>
      <a href="#!" className="mx-2 [&>svg]:h-4 [&>svg]:w-4 vibrate-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#4e2a1b"
        viewBox="0 0 448 512">
        <path
          d="M380.9 97.1C339 55.2 285.1 32 228.6 32 102.8 32 0 134.8 0 260.6c0 45.9 12.2 90.8 35.4 129.6L1 480l92.4-32.4c36.5 19.8 77.7 30.3 119.7 30.3 125.9 0 228.6-102.7 228.6-228.5 0-56.6-22.1-110.4-61.8-150.3zm-158 317c-36.8 0-72.8-9.8-104.1-28.3l-7.4-4.4-55.1 19.3 18.6-53.4-4.8-7.9c-21.9-35.8-33.4-77.3-33.4-119.6 0-120.4 98-218.5 218.6-218.5 58.4 0 113.3 22.8 154.5 64 41.2 41.2 63.9 96.1 63.9 154.4 0 120.6-98.1 218.8-218.7 218.8zm121.2-163.3l-41.7-12.3c-5.5-1.6-11.3-.1-15.3 3.9l-14.8 14.8c-3.7 3.7-9.5 4.9-14.5 3-11.7-4.1-45.5-17.4-64.9-53.3-3.2-6.1-2.4-13.7 2.2-18.7l13.6-13.9c3.4-3.5 4.8-8.6 3.5-13.5l-13.2-48.9c-1.5-5.6-6.3-9.6-12-10.1-32.7-3-59.4 6.9-79.6 29.2-16.4 18.3-25.4 41.4-25.4 66 0 40.2 20.9 80.4 57.1 118.4 36.6 38.5 81.1 64.4 125.8 74.3 8.4 1.8 16.9 2.7 25.3 2.7 22.3 0 42.6-7.4 59.8-21.7 18.7-15.5 31.7-37.6 36.8-62.1 1.3-6.3-2.2-12.7-8.4-14.5z" />
      </svg>
    </a>
    <a href="#!" className="mx-2 [&>svg]:h-4 [&>svg]:w-4 vibrate-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#4e2a1b"
        viewBox="0 0 576 512">
        <path
          d="M549.655 124.083C534.224 81.428 498.659 49.787 457.003 35.262 411.029 18.575 288 18.575 288 18.575s-123.029 0-169.003 16.687c-41.656 14.525-77.221 46.166-92.652 88.821C7.737 171.648 0 219.918 0 256.002c0 36.084 7.737 84.354 26.345 131.919 15.431 42.655 50.996 74.296 92.652 88.821C164.971 493.43 288 493.43 288 493.43s123.029 0 169.003-16.687c41.656-14.525 77.221-46.166 92.652-88.821C568.263 340.354 576 292.084 576 256.002c0-36.084-7.737-84.354-26.345-131.919zM232 336.002V176.002l144 80-144 80z" />
      </svg>
    </a>



    </div>

      </div>
    </div>
  </div>

<hr className='mx-[5%] border-yellow opacity-25 '/>  
  <div className="text-yellow p-6 mx-[5%] text-center flex justify-between">
    <div>
    <span className='opacity-50'>© 2024 Copyright : </span>
    <a className="font-semibold uppercase" target='_blank' href="https://shriworks.com/">ShriWorks</a>
    </div>
    <div>
    <span className='opacity-50'>Developed by : </span>
    <a className="font-semibold uppercase" target='_blank' href="https://www.jgntechnologies.com/"
      >JGN TECHNOLOGIES</a>
    </div>
  </div>
</footer>
  )
}

export default Footer