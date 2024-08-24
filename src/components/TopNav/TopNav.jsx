import React, { useState } from 'react'
import { Menu, PopoverBackdrop, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {  MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const TopNav = () => {

  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = (category) => {
    setSelectedCategory(category);
  };


  return (
    <>
    <nav className=" shadow-lg py-5 items-center">
      <div className="px-5 sm:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Left section for the logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-red">
              <img className='h-16 sm:h-28' src='/Assests/logo.png' alt='Shriworks Logo'/>
            </a>
          </div>

          {/* Middle section for the nav menu */}

          <div className="lg:flex hidden items-center justify-center ">
            <div className="rounded-lg  p-5">
              <div className="flex">
                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-yellow bg-white p-5">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="pointer-events-none absolute w-5 fill-red transition"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-[300px] bg-white text-black pl-2 text-base font-semibold outline-0"
                  placeholder=""
                  id=""
                />

                {/* Dropdown here */}
                <Menu as="div" className="relative inline-block">
                  <div>
                    <MenuButton className="inline-flex border-l  border-yellow items-center w-full justify-center  shadow-sm bg-white p-3 text-sm font-semibold text-black ">
                     {selectedCategory}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-black"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-50 mt-2 w-56 overflow-hidden origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="py-1">
                      <MenuItem>
                      {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm text-black ${
                              active ? 'bg-white translate-x-1 transition-all duration-300 text-red' : ''
                            }`}
                            onClick={() => handleMenuItemClick('All Categories')}
                          >
                            All Categories
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                      {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm text-black ${
                              active ? 'bg-white translate-x-1 transition-all duration-300 text-red' : ''
                            }`}
                            onClick={() => handleMenuItemClick('Idols')}
                          >
                            Idols
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                      {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm text-black ${
                              active ? 'bg-white translate-x-1 transition-all duration-300 text-red' : ''
                            }`}
                            onClick={() => handleMenuItemClick('Ratham')}
                          >
                            Ratham
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                      {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm text-black ${
                              active ? 'bg-white translate-x-1 transition-all duration-300 text-red' : ''
                            }`}
                            onClick={() => handleMenuItemClick('Vaahanam')}
                          >
                            Vaahanam
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                      {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm text-black ${
                              active ? 'bg-white translate-x-1 transition-all duration-300 text-red' : ''
                            }`}
                            onClick={() => handleMenuItemClick('Greedum')}
                          >
                            Greedum
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                      {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm text-black ${
                              active ? 'bg-white translate-x-1 transition-all duration-300 text-red' : ''
                            }`}
                            onClick={() => handleMenuItemClick('Kalasam')}
                          >
                            Kalasam
                          </a>
                        )}
                      </MenuItem>
                      
                  
                    </div>
                  </MenuItems>
                </Menu>

                <input
                  type="button"
                  value="Search"
                  className="bg-red p-2 rounded-tr-lg rounded-br-lg text-yellow font-semibold hover:bg-red/85 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Right section for the search input, cart, and profile icon */}
          <div className="relative flex items-center space-x-4">
            <Link to={'/cart'}  className="text-red relative hover:-translate-y-1 transition-all duration-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className='absolute -bottom-2 -right-2 bg-red   text-yellow rounded-full text-[13px] px-1.5 py-0 h-fit'>2</span>
            </Link>



            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="flex items-center  text-red  hover:bg-red rounded-full p-2 hover:text-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-4 w-48 bg-yellow border-solid border-t-0  border-b-4 border-red border-2 rounded-md shadow-lg z-20">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 font-bold text-md  text-red ${
                          active ? "bg-red text-yellow" : ""
                        }`}
                      >
                        Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 font-bold text-md text-red ${
                          active ? "bg-red text-yellow" : ""
                        }`}
                      >
                        Logout
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
            {/* Hamburger menu for mobile screens */}
            <div className="relative">
      {/* Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-red "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Drawer Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-[9999] bg-cover bg-Pattern shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between p-4 ">
        <a href="/" className="text-xl font-bold text-red">
              <img className='h-16' src='/Assests/logo.png' alt='Shriworks Logo'/>
            </a>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-red "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-4 pt-2 pb-3  space-y-1">
          <Link
            to={'/'}
            className="text-red hover:text-black block px-3 py-2 rounded-md text-base font-bold"
          >
            Home
          </Link>
          <Popover className="relative text-red outline-none px-3 py-2 border-none">
            <Popover.Button className="flex outline-none gap-1 font-bold items-center">
              Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Popover.Button>
            <Popover.Panel className="flex flex-col mt-2 text-red border-red border-solid border-2 border-t-0 border-b-4 bg-yellow px-4 py-2 rounded-xl">
              <a className='hover:text-black ' href="/Idols">Idols</a>
              <a className='hover:text-black ' href="/Vaahanam">Vaahanam</a>
              <a className='hover:text-black ' href="/Radham">Radham</a>
              <a className='hover:text-black ' href="/Greedam">Greedam</a>
            </Popover.Panel>
          </Popover>
          <Link
                to={'/shop'}
                className="text-red hover:text-black block px-3 py-2 rounded-md text-base font-bold"
              >
                Shop
              </Link>
              <Link
                to={'/about'}
                className="text-red hover:text-black block px-3 py-2 rounded-md text-base font-bold"
              >
                About
              </Link>
              <Link
                to={'/blog'}
                className="text-red hover:text-black block px-3 py-2 rounded-md text-base font-bold"
              >
                Blog
              </Link>
              <Link
                to={'/contact'}
                className="text-red hover:text-black block px-3 py-2 rounded-md text-base font-bold"
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

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
    
          </div>
        </div>
      </div>
    </nav>


    <div className=" lg:hidden items-center justify-center ">
            <div className="rounded-lg  p-5">
              <div className="flex">
                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-yellow bg-white p-5">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="pointer-events-none absolute w-5 fill-red transition"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full bg-white text-black pl-2 text-base font-semibold outline-0"
                  placeholder=""
                  id=""
                />

                {/* Dropdown here */}
                <Menu as="div" className="relative  ">
                  <div>
                    <MenuButton className="flex border-l  border-yellow items-center w-max justify-center  shadow-sm bg-white p-3 text-sm font-semibold text-black ">
                     {selectedCategory}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-black"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-50 mt-2 w-56 overflow-hidden origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="py-1">
                      <MenuItem>
                      {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm text-black ${
                              active ? 'bg-white translate-x-1 transition-all duration-300 text-red' : ''
                            }`}
                            onClick={() => handleMenuItemClick('All Categories')}
                          >
                            All Categories
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                      {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm text-black ${
                              active ? 'bg-white translate-x-1 transition-all duration-300 text-red' : ''
                            }`}
                            onClick={() => handleMenuItemClick('Idols')}
                          >
                            Idols
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                      {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm text-black ${
                              active ? 'bg-white translate-x-1 transition-all duration-300 text-red' : ''
                            }`}
                            onClick={() => handleMenuItemClick('Ratham')}
                          >
                            Ratham
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                      {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm text-black ${
                              active ? 'bg-white translate-x-1 transition-all duration-300 text-red' : ''
                            }`}
                            onClick={() => handleMenuItemClick('Vaahanam')}
                          >
                            Vaahanam
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                      {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm text-black ${
                              active ? 'bg-white translate-x-1 transition-all duration-300 text-red' : ''
                            }`}
                            onClick={() => handleMenuItemClick('Greedum')}
                          >
                            Greedum
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                      {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm text-black ${
                              active ? 'bg-white translate-x-1 transition-all duration-300 text-red' : ''
                            }`}
                            onClick={() => handleMenuItemClick('Kalasam')}
                          >
                            Kalasam
                          </a>
                        )}
                      </MenuItem>
                      
                  
                    </div>
                  </MenuItems>
                </Menu>

                <input
                  type="button"
                  value="Search"
                  className="bg-red p-2 rounded-tr-lg rounded-br-lg text-yellow font-semibold hover:bg-red/85 transition-colors"
                />
              </div>
            </div>
          </div>
    </>
  );
}

export default TopNav