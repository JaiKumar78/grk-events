import React from 'react'

import { Link } from 'react-router-dom'

const GalleryCard = ({ imageurl, title, location, price, id }) => {
  return (
    <Link to={`/events/${id}`} className='rounded-xl group relative shadow-card hover:shadow-cardhover card overflow-hidden border border-gray-300'>
      <img 
        src={imageurl[0]} 
        alt={title} 
        className='h-[30vh] md:h-[40vh] w-full object-cover transition-transform duration-300 group-hover:scale-103' 
      />
      
      {/* Hover Info */}
      <div className='group-hover:flex hidden flex-col absolute bottom-0 left-0 right-0 bg-white/60 backdrop-blur-md m-2 p-4 rounded-md transition-all duration-500'>
        <p className='text-black text-base font-semibold'>{title}</p>
        <p className='text-gray-800 text-sm'>{location}</p>
        <p className='text-black text-sm font-medium mt-1'>₹{price}</p>
      </div>
    </Link>
  )
}

export default GalleryCard