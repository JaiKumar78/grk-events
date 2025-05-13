import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { EventContext } from '../context/EventContext'
import ServiceCard from '../components/ServiceCard'

import assets from '../assets/assets'

const serviceData = [
  {
    ellipseImage: assets.decorationicon,
    backgroundImage: assets.decorationimg,
    title: "Decorations",
    description: "Beautiful and elegant decor for weddings, birthdays, and all kinds of events.",
    link: "decorations",
  },
  {
    ellipseImage: assets.themedecicon,
    backgroundImage: assets.themedecimg,
    title: "Themed Decorations",
    description: "Creative themes tailored to your event’s personality and mood.",
    link: "themed_decorations",
  },
  {
    ellipseImage: assets.ceremonyicon,
    backgroundImage: assets.ceremonyimg,
    title: "Ceremony",
    description: "Professional setup for traditional, religious, or civil ceremonies.",
    link: "ceremony",
  },
  {
    ellipseImage: assets.partyicon,
    backgroundImage: assets.partyimg,
    title: "Party",
    description: "Vibrant and fun styling for casual, birthday, and private parties.",
    link: "party",
  },
  {
    ellipseImage: assets.eventservicesicon,
    backgroundImage: assets.eventservicesimg,
    title: "Event Services",
    description: "End-to-end event planning, management, and coordination services.",
    link: "event_services",
  },
  {
    ellipseImage: assets.activitiesicon,
    backgroundImage: assets.activitiesimg,
    title: "Activities",
    description: "Games, performances, and interactive experiences for guests of all ages.",
    link: "activities",
  },
];

const Services = () => {
  const { setActivePage } = useContext(EventContext)
  return (
    <>
      {/* Services Hero Section */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
            linear-gradient(0deg, rgba(10, 74, 74, 0.7), rgba(10, 74, 74, 0.7)),
            url(${assets.serviceherobg})
          `,
        }}
      >
        <div className="py-20 container">
          <p className="text-mustard base-mustard">OUR SERVICES</p>
          <p className="text-white main-statement mt-5">
            Bringing your dreams to life, one detail at a time
          </p>
          <p className="text-white base-mustard mt-10">
            Every celebration is unique, and we are here to craft experiences that are tailored just for you.
            Explore our range of services designed to turn your special moments into unforgettable memories.
          </p>
        </div>
      </div>
      <div className='mt-10 py-10 container'>
        <p className='text-main main-statement'>Services</p>
        <p className='base-mustard mt-5 '>With expertise in every aspect of event management, we offer services that ensure your special day is seamless, stunning, and stress-free.</p>
        <div className='container pt-15 pb-10 grid grid-cols-1 sm:grid-cols-2  gap-x-6 gap-y-12' >
          {serviceData.map((item, index) => (
            <ServiceCard
              key={index}
              ellipseImage={item.ellipseImage}
              backgroundImage={item.backgroundImage}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <div className='container py-10'>
        <p className='text-main main-statement'>Let's Start Planning Your Perfect Event</p>
        <p className='base-mustard mt-5'>
          Loved what you saw? Whether it's a grand celebration or an intimate gathering, we're here to make it extraordinary. Reach out and let's bring your vision to life.
        </p>
        <div className='mt-10 w-full text-center'>
          <Link to='/contact' onClick={() => setActivePage('/contact')} className='link-btn bg-mustard border-mustard text-white hover:bg-transparent hover:text-mustard'>
            BOOK NOW
          </Link>
        </div>
      </div>
    </>
  )
}

export default Services