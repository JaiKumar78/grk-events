import { useContext  } from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'
import { EventContext } from '../context/EventContext'

const phone = import.meta.env.VITE_WHATSAPP_PHONE
const email = import.meta.env.VITE_EMAIL_ID

const Footer = () => {
  const { setActivePage } = useContext(EventContext)
  return (
    <footer className=" w-full border-t border-t-gray-300">
      {/* Top Section */}
      <div className=" flex flex-col md:flex-row justify-around items-start px-6 sm:px-10 md:px-16 py-5 gap-10 text-[#0A4A4A] font-['Playfair']">
        <div className='flex flex-col gap-3 justify-center items-center'>
          <div className='w-36 h-36 object-cover'>
            <img src={assets.logo} className='' alt="" />
          </div>
          <div className='flex gap-5 items-center px-3 py-1'>
            <a 
            href={`https://api.whatsapp.com/send/?phone=${phone}&text=Hi!%20I'm%20interested%20in%20your%20event%20services.&type=phone_number&app_absent=0`}
            target='_blank'
            ><img src={assets.whatsapp} alt="" className='w-6 h-6 cursor-pointer' /></a>
            <a 
            href="https://www.instagram.com/grkevents/?hl=en"
            target='_blank'><img src={assets.instagram} alt="" className='w-6 h-6 cursor-pointer' /></a>
            <a 
            href="https://www.youtube.com/channel/UCts8gx5EM48NnAQ1oXka2mg"
            target='_blank'><img src={assets.youtube} alt="" className='w-6 h-6 cursor-pointer'/></a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="w-full sm:w-auto">
          <h2 className="text-[24px] md:text-[28px] font-semibold underline mb-4">Quick Links</h2>
          <ul className="space-y-2 text-[16px] md:text-[18px]">
            <li><Link className='hover:underline underline-offset-2' to="/" onClick={() => setActivePage('/')}>Home</Link></li>
            <li><Link className='hover:underline underline-offset-2' to="/about" onClick={() => setActivePage('/about')}>About Us</Link></li>
            <li><Link className='hover:underline underline-offset-2' to="/services" onClick={() => setActivePage('/services')}>Services</Link></li>
            <li><Link className='hover:underline underline-offset-2' to="/gallery" onClick={() => setActivePage('/gallery')}>Gallery</Link></li>
            <li><Link className='hover:underline underline-offset-2' to="/contact" onClick={() => setActivePage('/contact')}>Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="w-full sm:w-auto">
          <h2 className="text-[24px] md:text-[28px] font-semibold underline mb-4">Services</h2>
          <ul className="space-y-2 text-[16px] md:text-[18px]">
            <li>Themed Decoratins</li>
            <li>Decorations</li>
            <li>Activities</li>
            <li>Ceremony</li>
            <li>Activities</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full sm:w-auto max-w-md">
          <h2 className="text-[24px] md:text-[28px] font-semibold underline mb-4">Contact</h2>
          <p className="text-[16px] md:text-[18px] mb-2">{`+91 ${phone}`}</p>
          <p className="text-[16px] md:text-[18px] mb-2">{email}</p>
          <p className="text-[16px] md:text-[18px] leading-7">
            4/1, 1st Cross St, near Murugan Temple, <br />
            Lakshmi Nagar, Velachery, Chennai, <br />
            Tamil Nadu 600042
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="h-[60px] bg-[#E2A56E] flex items-center justify-center text-[#0A4A4A] font-['Playfair'] text-[14px] md:text-[16px] text-center px-4">
        © 2025 GRK Events. All rights reserved.
      </div>
    </footer>

  )
}

export default Footer