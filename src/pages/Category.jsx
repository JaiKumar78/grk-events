import React, { useContext, useState,useEffect } from 'react'

import { useParams, useLocation, Link } from 'react-router-dom'
import { EventContext } from '../context/EventContext';

import PostCard from '../components/PostCard';

const Category = () => {
    const { selection, subcategories, innerSubs, posts } = useContext(EventContext);
    const [currentSub, setCurrentSub] = useState('');
    const [currInnerSub, setCurrInnerSub] = useState('');
  
    useEffect(() => {
      if (subcategories.length > 0 && !currentSub && selection.subcategory) {
        setCurrentSub(selection.subcategory);
      }
      if (innerSubs.length > 0 && !currInnerSub && selection.innersub) {
        setCurrInnerSub(selection.innersub);
      }
    }, [subcategories, innerSubs, selection.subcategory, selection.innersub]);
  
    return (
      <>
        <p className='text-center main-statement text-main mt-10'>
          {decodeURIComponent(selection.category).replace(/_/g, ' ').toUpperCase()}
        </p>
  
        <div className='bg-sandal py-2  mt-10 w-full'>
          <div className='md:px-16 lg:px-40 max-w-4/5 mx-auto flex justify-center flex-wrap gap-2'>
            {subcategories.map((item, index) => (
            <Link
              onClick={() => setCurrentSub(item.name)}
              to={`/services/${selection.category}/${item.name.toLowerCase().replace(/\s+/g, '_')}`}
              key={index}
              className={`cursor-pointer text-xs md:text-sm base-mustard text-white p-3 rounded-4xl hover:bg-opacity-80 ${
                currentSub.trim() === item.name.trim() ? 'bg-gray-600' : 'bg-main'
              }`}
            >
              {item.name}
            </Link>
          ))}
          </div>
        </div>
  
        {innerSubs.length > 0 && (
          <div className='mt-5 mx-auto justify-center flex flex-wrap gap-2  md:px-16 lg:px-40 max-w-4/5'>
            {innerSubs.map((item, index) => (
              <Link
                key={index}
                onClick={() => setCurrInnerSub(item)}
                className={`p-2  text-white rounded-xl text-sm ${
                    currInnerSub.trim() === item.trim() ? 'bg-gray-600' : 'bg-main'
                }`}
                to={`/services/${selection.category}/${currentSub.toLowerCase().replace(/\s+/g, '_')}/${item.toLowerCase().replace(/\s+/g, '_')}`}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
        {posts.length > 0 ? (
          <div className=" px-6 md:px-16 lg:px-40 max-w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                location={post.location}
                price={post.price}
                imageurl={post.imageurl}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 px-6 md:px-16 lg:px-40 max-w-4/5 mx-auto">
            <p className='base-mustard text-xl font-bold'>COMING SOON...</p>
          </div>
        ) }
        
      </>
    );
  };

export default Category