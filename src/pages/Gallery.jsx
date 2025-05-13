import React, { useContext, useState } from 'react'
import GalleryCard from '../components/GalleryCard'
import { EventContext } from '../context/EventContext'

const Gallery = () => {
  const { gallery } = useContext(EventContext)
  return (
    <div className="px-6 md:px-16 lg:px-40 max-w-4/5 mx-auto items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
      {gallery.map((post) => (
        <GalleryCard
          key={post.id}
          id={post.id}
          imageurl={post.imageurl}
          title={post.title}
          location={post.location}
          price={post.price}
        />
      ))}
    </div>
  )
}

export default Gallery