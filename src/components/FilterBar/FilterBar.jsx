import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import PriceRange from "../../Utils/PriceRange/PriceRange";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const FilterBar = () => {
  const [selectedSort, setSortCategory] = useState("Default");
  const [selectedCategory, setSelectedCategory] = useState("Default");
  const [selectedFilters, setSelectedFilters] = useState({
    material: "",
    price: "",
    category: "",
  });


  const handleMenuItemClick = (category) => {
    setSortCategory(category);
  };

  const handleFilterSelection = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setSortCategory("Default");
    setSelectedFilters({
      material: "",
      price: "",
      category: "",
    });
  };
  

  return (
    <>
    <section className="bg-red m-2 p-4">
      <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-10 items-center">
        <div className="flex gap-6 ">
          <h3 className="text-yellow  font-bold">Filter :</h3>
          <div className="flex gap-6 ">
          <Popover className="relative text-yellow outline-none border-none">
          {({ open, close }) => (
            <>
            <PopoverButton className="flex outline-none font-bold gap-1 items-center">
              Material
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </PopoverButton>
            <PopoverPanel
              anchor="bottom"
              className="flex flex-col mt-2 z-50 text-yellow font-semibold  border-red border-solid border-2 border-t-0 border-b-4 bg-yellow   rounded-xl"
            >
              <h6
                className="hover:bg-red hover:cursor-pointer  px-4 py-2 hover:text-yellow text-black"
                onClick={() => {handleFilterSelection("material", "Gold");close();}}
              >
                Gold
              </h6>
              <h6
                className="hover:bg-red hover:cursor-pointer px-4 py-2 hover:text-yellow text-black"
                onClick={() => {handleFilterSelection("material", "Silver");close();}}
              >
                Silver
              </h6>
            </PopoverPanel>
            </>
              )}
          </Popover>

          <Popover className="relative  text-yellow outline-none border-none">
          {({ open, close }) => (
            <>
            <PopoverButton className="flex outline-none font-bold gap-1 items-center">
              Price
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </PopoverButton>
            <PopoverPanel
              anchor="bottom"
              className="flex flex-col mt-2 z-50 text-yellow font-semibold  border-red border-solid border-2 border-t-0 border-b-4 bg-yellow   rounded-xl"
            >
              <div>
                <p className="text-red text-center p-2">Pick A Range :</p>
              </div>
              <div>
                <PriceRange
                onConfirm={close}
                 onChange={(range) => {
                  handleFilterSelection("price", range);
                }}
                />
              </div>
            </PopoverPanel>
            </>
              )}
          </Popover>

          <Popover className="relative text-yellow outline-none border-none">
          {({ open, close }) => (
            <>
            <PopoverButton  className="flex outline-none font-bold gap-1 items-center">
              Category
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </PopoverButton>
            <PopoverPanel
              anchor="bottom"
              className="flex flex-col mt-2 z-50 text-yellow font-semibold  border-red border-solid border-2 border-t-0 border-b-4 bg-yellow   rounded-xl"
            >
              <h6
                className="hover:bg-red px-4 py-2 hover:text-yellow text-black"
                onClick={() => {handleFilterSelection("category", "Idols");close();}}
              >
                Idols
              </h6>
              <h6
                className="hover:bg-red px-4 py-2 hover:text-yellow text-black"
                onClick={() => {handleFilterSelection("category", "Radham");close();}}
              >
                Radham
              </h6>
              <h6
                className="hover:bg-red px-4 py-2 hover:text-yellow text-black"
                onClick={() => {handleFilterSelection("category", "Vahanam");close();}}
              >
                Vahanam
              </h6>
              <h6
                className="hover:bg-red px-4 py-2 hover:text-yellow text-black"
                onClick={() => {handleFilterSelection("category", "Kelasam");close();}}
              >
                Kelasam
              </h6>
              <h6
                className="hover:bg-red px-4 py-2 hover:text-yellow text-black"
                onClick={() => {handleFilterSelection("category", "Kodimaram");close();}}
              >
                Kodimaram
              </h6>
              
            </PopoverPanel>
            </>
              )}
          </Popover>
          </div>
        </div>

        <div className="flex justify-center items-center text-yellow">
          <p className="mr-2"> Sort By :</p>
          <div className="">
            <Menu as="div" className="relative inline-block">
              <div>
                <MenuButton className="flex border-l  border-yellow items-center w-full justify-center rounded-sm shadow-sm bg-white p-1 text-sm font-semibold text-black ">
                  {selectedSort}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-black"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute  right-0 z-50 mt-2 w-56 overflow-hidden origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1 z-50">
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm text-black ${
                          active
                            ? "bg-white translate-x-1 transition-all duration-300 text-red"
                            : ""
                        }`}
                        onClick={() => handleMenuItemClick("Default")}
                      >
                        Default
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm text-black ${
                          active
                            ? "bg-white translate-x-1 transition-all duration-300 text-red"
                            : ""
                        }`}
                        onClick={() =>  handleMenuItemClick("Price: Low to High") 
                        }
                      >
                        Price: Low to High
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm text-black ${
                          active
                            ? "bg-white translate-x-1 transition-all duration-300 text-red"
                            : ""
                        }`}
                        onClick={() =>
                          handleMenuItemClick("Price: High to Low")
                        }
                      >
                        Price: High to Low
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm text-black ${
                          active
                            ? "bg-white translate-x-1 transition-all duration-300 text-red"
                            : ""
                        }`}
                        onClick={() =>
                          handleMenuItemClick("Alphabetically, A-Z")
                        }
                      >
                        Alphabetically, A-Z
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm text-black ${
                          active
                            ? "bg-white translate-x-1 transition-all duration-300 text-red"
                            : ""
                        }`}
                        onClick={() =>
                          handleMenuItemClick("Alphabetically, Z-A")
                        }
                      >
                        Alphabetically, Z-A
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm text-black ${
                          active
                            ? "bg-white translate-x-1 transition-all duration-300 text-red"
                            : ""
                        }`}
                        onClick={() => handleMenuItemClick("Latest")}
                      >
                        Latest
                      </a>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </section>

{selectedFilters.category || selectedFilters.material || selectedFilters.price ? (
  <div className="mt-4 mx-4 flex flex-col sm:flex-row sm:justify-start sm:gap-5 sm:items-center">
        <p className="text-lg text-red font-bold ">Selected Filters:</p>
        <div className="flex gap-2">
        {Object.entries(selectedFilters).map(([key, value]) => (
          key === 'price' && value ? (
            // Format price range
            <span key={key} className="bg-yellow flex text-sm sm:text-lg shadow-lg shadow-red text-red px-2 py-1 rounded-md">
              {`Price: ${value[0]} - ${value[1]}`}
            </span>
          ) : (
            value && (
              <span key={key} className="bg-yellow flex text-sm sm:text-lg shadow-lg shadow-red text-red px-2 py-1 rounded-md">
                {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
              </span>
            )
          )
        ))}
          <button
            className="bg-red shadow-lg hover:scale-105 transition-all duration-200 shadow-red text-yellow px-3 py-1 rounded-md"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </div>
      </div>
): null}
    
    </>
  );
};

export default FilterBar;
