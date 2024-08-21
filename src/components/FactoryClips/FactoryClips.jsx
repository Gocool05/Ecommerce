import React from 'react'
import './FactoryClips.css'
const FactoryClips = () => {
 

    const items = [
        { type: 'image', url: 'https://api.moviemads.com/uploads/empty_image_dd70f20899.jpg' },
        { type: 'video', url: 'https://api.moviemads.com/uploads/Trophy_09829cd62f.mp4' },
        { type: 'image', url: 'https://api.moviemads.com/uploads/empty_image_dd70f20899.jpg' },
        { type: 'video', url: 'https://api.moviemads.com/uploads/Trophy_09829cd62f.mp4' },
        { type: 'image', url: 'https://api.moviemads.com/uploads/empty_image_dd70f20899.jpg' },
      ];


  return (
<div className='mb-10'>

<h2 class="flex flex-row flex-nowrap py-10 items-center ">
          <span class="flex-grow block border-t border-red"></span>
          <span class="flex-none block mx-4 px-4 py-2.5 lg:text-xl rounded leading-none uppercase font-bold bg-red text-yellow">
              FACTORY CLIPS AND IMAGES
          </span>
          <span class="flex-grow block border-t border-red"></span>
      </h2>

<div className="grid grid-cols-1 bg-black bg1 sm:rounded-xl sm:grid-cols-3 md:mx-5 lg:mx-40  gap-2 p-2">
{/* First Column */}
<div className="grid grid-rows-2  gap-2">
  {items[0] && (
    <div className="h-72 relative group ">
  {items[0].type === 'image' ? (
    <img src={items[0].url} alt="item1" className="w-full transition-all duration-500 hover:scale-95 overflow-hidden  h-full object-cover" />
  ) : (
    <video src={items[0].url} controls className="w-full h-full transition-all duration-500 hover:scale-95 overflow-hidden object-cover" />
  )}
</div>
  )}
  {items[1] && (
    <div className="bg-black h-72">
      {items[1].type === 'image' ? (
        <img src={items[1].url} alt="item2" className="w-full transition-all duration-500 hover:scale-95 overflow-hidden h-full object-cover" />
      ) : (
        <video src={items[1].url} controls className="w-full transition-all duration-500 hover:scale-95 overflow-hidden h-full object-cover" />
      )}
    </div>
  )}
</div>

{/* Second Column */}
{items[2] && (
  <div className="bg-black h-auto">
    {items[2].type === 'image' ? (
      <img src={items[2].url} alt="item3" className="w-full h-full transition-all duration-500 hover:scale-95 overflow-hidden object-cover" />
    ) : (
      <video src={items[2].url} controls className="w-full h-full transition-all duration-500 hover:scale-95 overflow-hidden object-cover" />
    )}
  </div>
)}

{/* Third Column */}
<div className="grid grid-rows-2 gap-2">
  {items[3] && (
    <div className="bg-black h-72">
      {items[3].type === 'image' ? (
        <img src={items[3].url} alt="item4" className="w-full h-full transition-all duration-500 hover:scale-95 overflow-hidden object-cover" />
      ) : (
        <video src={items[3].url} controls className="w-full h-full transition-all duration-500 hover:scale-95 overflow-hidden object-cover" />
      )}
    </div>
  )}
  {items[4] && (
    <div className="bg-black h-72">
      {items[4].type === 'image' ? (
        <img src={items[4].url} alt="item5" className="w-full h-full transition-all duration-500 hover:scale-95 overflow-hidden object-cover" />
      ) : (
        <video src={items[4].url} controls className="w-full h-full transition-all duration-500 hover:scale-95 overflow-hidden object-cover" />
      )}
    </div>
  )}
</div>
</div>

</div>
  )
}

export default FactoryClips