import React from "react";
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useQuery } from "react-query";
import api from "../../Utils/api";
import Loading from "../Loading/Loading";

const HomeSlider = () => {

  const SetSliderImage = async() =>{
    const res = await api.get('/api/home-sliders?populate=*');
    return res.data.data
  }

  const { data:Sliders,isLoading,isError} = useQuery('SliderImage',SetSliderImage);

  if(isLoading) return <Loading/>
  
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
    {Sliders?.map((images, index) => (
      <div className="" key={index}>
        <img
          src={`${baseUrl}${images.attributes.Image.data.attributes.url}`}
          alt={images.attributes.Image.data.attributes.name}
          loading='eager'
        />
      </div>
    ))}
  </Carousel>

</>
  );
};

export default HomeSlider;
