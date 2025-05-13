import React, { useContext, useState } from 'react'
import GalleryCard from '../components/GalleryCard'
import { EventContext } from '../context/EventContext'

const Gallery = () => {
  const { gallery } = useContext(EventContext)
  return (
    <div className="max-w-7xl mx-auto items-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
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