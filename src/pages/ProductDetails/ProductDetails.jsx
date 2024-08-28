import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Marquee from 'react-fast-marquee';
import Card from '../../components/Card/Card';
import api from '../../Utils/api';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import { Link, useParams } from 'react-router-dom';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';

const ProductDetails = () => {
  const baseUrl = api.defaults.baseURL;
  const Id = useParams();
  window.scrollTo(0, 0);
  const ProductId = Id.id;
  const ProductDetails = async () => {
      const res = await api.get(`/api/Products/${ProductId}?populate=*`);
      return res.data.data;
  }
    const { data: products,isLoading, isError } = useQuery('Products', ProductDetails);
    
  console.log(products,'Details of the product')
  

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className='NextArrows'
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FFEEA9" // Icon color
          width="24px"
          height="24px"
        >
          <path d="M10 6l6 6-6 6V6z" />
        </svg>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
     className='PrevArrow'
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FFEEA9" // Icon color
          width="24px"
          height="24px"
        >
          <path d="M14 18l-6-6 6-6v12z" />
        </svg>
      </div>
    );
  };


  return (
    <section className="relative flex flex-col overflow-hidden">
      <div>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-2 lg:gap-16 lg:mx-10 lg:mt-10  ">
          <div className="slider-container1 ">
            <Carousel
              thumbWidth={100}
              showStatus={false}
              swipeable={true}
              showIndicators={false}
            >
              {products?.attributes?.ProductImage?.data.map((Images, index)=>
              <div key={index}>
                <img src={`${baseUrl}${Images.attributes?.url}`} />
              </div>
              )}

            </Carousel>
          </div>

          <div className="data w-full lg:pr-8 pr-0 xl:justify-start lg:justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
            <div className="data sm:w-full max-w-xl">
              <p className="text-lg font-medium leading-8 text-red mb-4">
                Idols&nbsp; /&nbsp; Lord Muruga
              </p>
              <h2 className="font-bold text-3xl  text-gray-900 mb-2 capitalize">
              {products?.attributes?.ProductName}
              </h2>
              <h3 className="font-bold text-xl  text-gray-900 mb-2 capitalize">
              {products?.attributes?.SubTitle}
              </h3>

              <div className="flex flex-row gap-2 sm:flex-row  sm:items-center mb-6">
                <h6 className="font-manrope font-semibold text-3xl leading-9 text-green  sm:border-r border-gray-200 ">
                  &#8377;{products?.attributes?.NewPrice}
                </h6>
                <h6 className="font-manrope  font-semibold text-xl line-through leading-9 text-black  sm:border-r border-gray-200">
                  &#8377;{products?.attributes?.OldPrice}
                </h6>
                <span className="text-xl text-red font-bold"> {products?.attributes?.Offer}{" "}% Off</span>
              </div>
              <div className="flex flex-col gap-2   mb-6">
                <h6 className="font-manrope font-normal text-xl  text-red  sm:border-r border-gray-200 ">
                  <span className="font-bold">SKU -</span> VPL0012
                </h6>
                <h6 className="font-manrope font-normal text-xl  text-red  sm:border-r border-gray-200 ">
                  <span className="font-bold">Weight -</span> 8.150 Kg
                </h6>
                <h6 className="font-manrope font-normal text-xl  text-red  sm:border-r border-gray-200 ">
                  <span className="font-bold">Dimensions -</span> 7 x 9.5 x 12 Inches
                </h6>
              </div>

              <div className="w-full pb-8  flex-wrap">
                <div className="grid  grid-cols-3 gap-3 max-w-sm ">
                  <button className="bg-[#A67C00] text-center py-1.5 px-6 w-full font-semibold text-lg  text-yellow border  flex items-center rounded-full justify-center transition-all duration-300  hover:shadow-sm hover:scale-105">
                    Gold
                  </button>
                  <button className="bg-[#A8A9AD] text-center py-1.5 px-6 w-full font-semibold text-lg  text-yellow border  flex items-center rounded-full justify-center transition-all duration-300  hover:shadow-sm hover:scale-105">
                    Silver
                  </button>
                  <button className="bg-[#b5a642] text-center py-1.5 px-6 w-full font-semibold text-lg  text-yellow border  flex items-center rounded-full justify-center transition-all duration-300  hover:shadow-sm hover:scale-105">
                    Brass
                  </button>
                  <button className="bg-[#72331d] text-center py-1.5 px-6 w-full font-semibold text-lg  text-yellow border  flex items-center rounded-full justify-center transition-all duration-300  hover:shadow-sm hover:scale-105">
                    Copper
                  </button>
                  <button className="bg-[#CD7F32] text-center py-1.5 px-6 w-full font-semibold text-lg  text-yellow border  flex items-center rounded-full justify-center transition-all duration-300  hover:shadow-sm hover:scale-105">
                    Panchalogan
                  </button>
                </div>
              </div>

              <div className="flex  gap-3 py-2">
                <div className="flex sm:items-center gap-3  ">
                  <select
                    aria-label="Select quantity"
                    class="py-2 px-3 bg-white rounded-md text-black mr-6 focus:outline-none "
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                  </select>
                </div>
                <button className="group py-2  rounded-full bg-red text-yellow font-semibold text-lg px-10 flex items-center justify-center gap-2 transition-all hover:scale-105 duration-500 ">
                  <svg
                    className="stroke-yellow font-bold "
                    width="24"
                    height="24"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                      stroke=""
                      stroke-width="2.6"
                      stroke-linecap="round"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>

              <div className="mt-2 flex flex-col gap-2">
                <h4 className="text-xl text-red font-bold uppercase">
                  Shipping Info{" "}
                </h4>
                <p className="text-black text-base font-normal ">
                  Dispatched in a maximum of 7-10 business days. This item is
                  not eligible for return. Cancellation requests will be
                  accepted strictly within 24 hours of placing the order only.
                  This product is made on order.
                </p>
                <p className="text-black text-base font-semibold ">
                  For ordering out of India please Contact us in Whatsapp.
                  Website shipment only within India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-0 mb-10 px-4 lg:px-16 flex flex-col gap-3">
        <h2 className="text-xl text-red font-bold uppercase"> Highlights</h2> 
        <p className='text-lg text-black font-bold text-justify  '>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          repellat unde accusantium veritatis ipsa id, atque ipsum ea pariatur
          saepe omnis dolor ducimus repudiandae provident nisi quae aperiam
          neque tempora.
        </p>
        <p className='text-lg text-black font-bold text-justify '>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          repellat unde accusantium veritatis ipsa id, atque ipsum ea pariatur
          saepe omnis dolor ducimus repudiandae provident nisi quae aperiam
          neque tempora.
        </p>
      </div>
</div>

      <RelatedProducts/>
    </section>
  );
}

export default ProductDetails;