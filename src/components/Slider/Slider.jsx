import React from "react";
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useQuery } from "react-query";
import api from "../../Utils/api";
import Loading from "../Loading/Loading";
import { useState } from "react";
import { useEffect } from "react";

const HomeSlider = ({sliderData}) => {
  const [isMobile, setIsMobile] = useState(false);
  const slider = sliderData?.attributes?.Slider
  const baseUrl = api.defaults.baseURL;

  const ScreenWidth = window.screen.width;
//   console.log(slider,'Slider Images')
//  console.log(ScreenWidth,'ScreenWidth')
 
  // Detect screen width and set isMobile accordingly
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450); // Set mobile threshold
    };
    
    // Set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 

  return (
  <Carousel
  autoPlay={true}
  infiniteLoop={true}
  showThumbs={false}
  showStatus={false}
  swipeable={true}
  className="custom-slider bg1 bg-red"
>
  {slider?.map((images, index) => (
    <div className="" key={index}>
      <img
        src={
          isMobile ? `${baseUrl}${images?.MobileImage?.data?.attributes?.url}`:`${baseUrl}${images?.Image?.data?.attributes?.url}`}
        alt={images?.Image?.data?.attributes?.name}
        loading='eager'
      />
    </div>
  ))}
</Carousel>
)


};
export default HomeSlider;
