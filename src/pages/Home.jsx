import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'

import { EventContext } from '../context/EventContext'
import assets from '../assets/assets'
import ServiceRepCard from '../components/servicerepcard'

const serviceRepData = [
  {
    title: 'Decoration',
    description: 'Captivating ambiance designed with elegance and creativity.',
    img: assets.balloons,
  },
  {
    title: 'Photography',
    description: 'Capturing Moments, Creating Memories — Every Shot Tells Your Story.',
    img: assets.cameraicon,
  },
  {
    title: 'Ceremony',
    description: 'Seamless planning for meaningful, beautiful, and joyful celebrations.',
    img: assets.ceremonyicon,
  },
];

const Home = () => {
  const { setActivePage } = useContext(EventContext)
  return (
    <>
      {/* hero section */}
      <div className="relative bg-main py-20">
          <div className="flex flex-col xl:flex-row items-center gap-10 px-6 md:px-16 lg:px-40 max-w-4/5 mx-auto">
          
          {/* Left Text Section */}
          <div className="text-white xl:w-1/2">
            <p className="main-statement text-left">
              Turning Special Days into Unforgettable Experiences
            </p>
            <p className="base-mustard text-left mt-6">
              We believe every event is a story waiting to be told. Whether it's an elegant wedding, a corporate conference, or a lively celebration, our team transforms your ideas into extraordinary experiences. With expert planning, personalized service, and a passion for perfection, we turn your special moments into lifelong memories.
            </p>
            <div className="flex flex-wrap gap-4 mt-7">
              <a
                href="/contact"
                onClick={() => setActivePage('/contact')}
                className="link-btn bg-white text-main hover:text-white hover:bg-transparent hover:border-white"
              >
                BOOK NOW
              </a>
              <a
                href="/about"
                onClick={() => setActivePage('/about')}
                className="link-btn hover:text-main hover:bg-white"
              >
                OUR STORY
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="xl:w-1/2">
            <div className="flex gap-3 items-center justify-center">
              <img src={assets.hero1} alt="decor" className="w-1/2 h-50 rounded-lg object-cover border-mustard border-2" />
              <img src={assets.hero2} alt="decor2" className="w-1/2 h-50  rounded-lg object-cover border-mustard border-2" />
            </div>
            <div className="mt-3">
              <img src={assets.hero3} alt="decor3" className="w-full h-50 rounded-lg object-cover border-mustard border-2" />
            </div>
          </div>
        </div>
      </div>

      {/* about section */}
      <div className='mt-20 flex flex-col items-center  xl:flex-row gap-[10%] px-6 md:px-16 lg:px-40 max-w-4/5 mx-auto'>
        <div className='xl:w-1/2'>
          <div className="relative w-fit">
            {/* Main Image */}
            <img
              src={assets.about1}
              className="w-[450px] h-[450px] rounded-[10px] object-cover"
              alt="Main About"
            />

            {/* Overlay Image 1 */}
            <div
              className=" hidden md:block absolute top-[10%] left-[-12%] w-[150px] h-[170px] rounded-[10px] bg-cover bg-center"
              style={{ backgroundImage: `url(${assets.about2})` }}
            ></div>

            {/* Overlay Image 2 (adjust position to avoid overlap) */}
            <div
              className="hidden md:block absolute top-[55%] left-[73%] w-[150px] h-[170px] rounded-[10px] bg-cover bg-center"
              style={{ backgroundImage: `url(${assets.decorationimg})` }}
            ></div>
          </div>
        </div>


        <div className="xl:w-1/2 space-y-8">
          <p className="text-main main-statement text-left">
            Bringing Your Dreams to Life, One Moment at a Time
          </p>

          <p className="base-mustard text-left">
            We’re passionate event creators dedicated to making every gathering extraordinary. With years of expertise and a flair for innovation, we craft experiences that reflect your style, purpose, and dreams. Our mission is simple — to turn your vision into reality, with care, creativity, and seamless execution.
          </p>

          <a
            href="/about"
            onClick={() => setActivePage('/about')}
            className="link-btn bg-mustard text-white hover:bg-transparent hover:text-mustard hover:border-mustard inline-block"
          >
            KNOW ABOUT US
          </a>
        </div>
      </div>

      {/* service */}
      <div className='mt-20 px-6 md:px-16 lg:px-40 max-w-4/5 mx-auto'>
        <p className='text-main main-statement'>
          Creative, Precise, and Heartfelt Solutions
        </p>
        <p className='base-mustard mt-10'>
          From the first idea to the final applause, we turn your vision into a seamless and unforgettable event experience. Every detail is thoughtfully designed to reflect your style, your goals, and your story.
        </p>
      </div>  
        <div className='flex flex-col lg:flex-row gap-10 items-center justify-center py-10'>
        {serviceRepData.map((service, index) => (
          <ServiceRepCard 
            key={index}
            title={service.title}
            description={service.description}
            img={service.img}
          />
        ))}
        </div>
      <div className='mt-10 px-6 md:px-16 lg:px-40 max-w-4/5 mx-auto'>
        <p className='base-mustard '>
          We believe in creating events that are as unique as you are. Discover all the ways we can make your occasion truly special. Explore our services and start planning your perfect day.
        </p>
        <div className='w-full text-center'>
          <a 
            href='/services'
            onClick={() => setActivePage('/services')}
            className='link-btn inline-block mt-10 bg-main text-white hover:bg-transparent hover:text-main hover:border-main'
          >EXPLORE NOW</a>
        </div>
      </div>

      {/* instasection */}
      <div className='mt-20 text-center xl:flex-row gap-[10%] px-6 md:px-16 lg:px-40 max-w-4/5 mx-auto'>
        <div className='space-y-5'>
          <p className='text-main main-statement '>From Our Lens to Your Feed: Celebrating Every Moment</p>
          <p className='base-mustard '>Nothing speaks louder than the joy and memories our clients share. From stunning photos to heartfelt posts, we love seeing the moments we’ve crafted together come to life on social media. Every post, tag, and shoutout tells a story — and we’re proud to be a part of it.</p>
          <a 
            href='/gallery'
            onClick={() =>setActivePage('/gallery')}
            className='link-btn text-white bg-mustard hover:text-mustard hover:bg-transparent hover:border-mustard inline-block'
          >OUR WORKS</a>
        </div>
      </div>

      {/* Quote */}
      <div
        className="mt-10 bg-cover bg-center bg-main/80 p-10"
      >
        <div className='container py-10 border-2 border-sandal'>
        <div className=' text-center border-sandal border-2 p-10 bg-sandal text-white space-y-2'>
          <p className='main-statement text-2xl font-normal'>Let’s Create Magic Together</p>
          <p className='font-cursive base-mustard text-2xl md:text-3xl'>Every great story begins with a simple hello. Let’s connect, dream, and craft a celebration that’s uniquely yours. Your perfect moment is just a message away.</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home