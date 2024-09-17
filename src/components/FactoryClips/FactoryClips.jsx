import React from 'react'
import Marquee from 'react-fast-marquee'
import Slider from 'react-slick';
import api from '../../Utils/api';
import Loading from '../Loading/Loading';
import './FactoryClips.css'
const baseUrl = api.defaults.baseURL;
const FactoryClips = ({Media,isLoading}) => {
  
  if (isLoading) return <Loading />;
  if (!Media) return null;

  return (
<div className='mb-10 px-2'>

<h2 class="flex flex-row flex-nowrap py-10 items-center ">
          <span class="flex-grow block border-t border-red"></span>
          <span class="flex-none block mx-4 px-4 py-2.5 lg:text-xl rounded leading-none uppercase font-bold bg-red text-yellow">
              FACTORY CLIPS AND IMAGES
          </span>
          <span class="flex-grow block border-t border-red"></span>
      </h2>

    <div className=' mb-10'>
      <Marquee play={true} direction={'right'} pauseOnHover={true} loop={0}>
      {Media?.map((item, index) => (
        <div className={`md:h-56 h-44  relative`} key={index}>
          {item.Type ==='Image' && 
          <a href={`${baseUrl}/${item?.Media?.data?.attributes?.url}`} target={'_blank'}>
          <img src={`${baseUrl}/${item?.Media?.data?.attributes?.url}`} alt="item" className="mx-2 md:mx-5 md:w-96 h-full transition-all border-4 border-red rounded-md   duration-500 hover:scale-95 overflow-hidden object-cover" />
        </a>
          }
            
        </div>
      ))}
    </Marquee>
    </div>
    <div className=''>
      <Marquee play={true} direction={'left'} pauseOnHover={true} loop={0}>
      {Media.map((item, index) => (
        <div className={`h-72 relative  gap-5`} key={index}>
             {item.Type ==='Video' && 
          <a href={`${baseUrl}/${item?.Media?.data?.attributes?.url}`} target={'_blank'}>
            <video loop autoPlay muted className="mx-2 md:mx-5 md:w-96 w-72 transition-all border-4 border-red rounded-md duration-500 hover:scale-95 overflow-hidden object-cover">
              <source src={`${baseUrl}/${item?.Media?.data?.attributes?.url}`} type="video/mp4" />
            </video>
            </a>
            }
        </div>
      ))}
    </Marquee>
    </div>

</div>
  )
}

export default FactoryClips