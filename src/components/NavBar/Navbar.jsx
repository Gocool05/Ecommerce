import React, { useState } from 'react';
import { Menu, PopoverBackdrop, Transition } from '@headlessui/react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Fragment } from 'react';
import TopNav from '../TopNav/TopNav';
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <>
    <nav className="bg-red  bg2 shadow-lg hidden lg:flex justify-center items-center h-16">
      <div className="px-5 hidden lg:flex sm:px-10">
            <div className="ml-10 flex  items-baseline space-x-4">
              <Link
                to={'/'}
                className="text-yellow hover:bg-yellow hover:-translate-y-1 transition-all duration-300 hover:text-red  px-3 py-2 rounded-md text-md font-bold"
              >
                Home
              </Link>
              <Popover className="relative text-yellow outline-none border-none">
              <PopoverButton className='flex outline-none font-bold gap-1 items-center'  >Categories 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              </PopoverButton>
              <PopoverPanel anchor="bottom" className="flex flex-col mt-2 z-50 text-yellow font-semibold  border-red border-solid border-2 border-t-0 border-b-4 bg-yellow   rounded-xl">
                <Link className='hover:bg-red px-4 py-2 hover:text-yellow text-black' to={"/Idols"}>Idols</Link>
                <Link className='hover:bg-red px-4 py-2 hover:text-yellow text-black' to={"/Vaahanam"}>Vaahanam</Link>
                <Link className='hover:bg-red px-4 py-2 hover:text-yellow text-black' to={"/Radham"}>Radham</Link>
                <Link className='hover:bg-red px-4 py-2 hover:text-yellow text-black' to={"/Greedam"}>Greedam</Link>
              </PopoverPanel>
            </Popover>
              <Link
                to={'/shop'}
                className="text-yellow shrink-0 hover:bg-yellow hover:-translate-y-1 transition-all duration-300 hover:text-red px-3 py-2 rounded-md text-md font-bold"
              >
                Shop
              </Link>
              <Link
                to={'/about'}
                className="text-yellow shrink-0 hover:bg-yellow hover:-translate-y-1 transition-all duration-300 hover:text-red px-3 py-2 rounded-md text-md font-bold"
              >
                About
              </Link>
              <Link
                to={'/blog'}
                className="text-yellow shrink-0 hover:bg-yellow hover:-translate-y-1 transition-all duration-300 hover:text-red px-3 py-2 rounded-md text-md font-bold"
              >
                Blog
              </Link>
              <Link
                to={'/contact'}
                className="text-yellow shrink-0 hover:bg-yellow hover:-translate-y-1 transition-all duration-300 hover:text-red px-3 py-2 rounded-md text-md font-bold"
              >
                Contact
              </Link>
              <a
                href="https://www.shriworks.com/"
                target='_blank'
                className="text-yellow hover:bg-yellow hover:-translate-y-1 transition-all duration-300 hover:text-red px-3 py-2 rounded-md text-md font-bold"
              >
                Factory 
              </a>
            </div>
          </div>

          {/* Right section for the search input, cart, and profile icon */}
    </nav>
    </>
  );
};

export default Navbar;
