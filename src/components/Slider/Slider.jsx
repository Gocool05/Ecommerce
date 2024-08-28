import React from "react";
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useQuery } from "react-query";
import api from "../../Utils/api";
import Loading from "../Loading/Loading";

const HomeSlider = ({sliderData}) => {
  const slider = sliderData?.attributes?.Slider
  const baseUrl = api.defaults.baseURL;

  return (
<>
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
          src={`${baseUrl}${images?.Image?.data?.attributes?.url}`}
          alt={images?.Image?.data?.attributes?.name}
          loading='eager'
        />
      </div>
    ))}
  </Carousel>

</>
  );
};

export default HomeSlider;
