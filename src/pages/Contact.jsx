import { Headset, MessageCircleMore, AtSign } from 'lucide-react';
import assets from '../assets/assets';

const phone = import.meta.env.VITE_WHATSAPP_PHONE

const Contact = () => {
  return (
    <div className='px-6 md:px-16 lg:px-40 max-w-7xl mx-auto py-10'>
      <h1 className='main-statement text-main font-extrabold'>Contact Us</h1>
      <div className='mt-10 flex flex-col-reverse lg:flex-row justify-center gap-10 items-center'>
        <div className='w-full lg:w-1/2 h-[400px] shadow-xl rounded-2xl'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8408364158176!2d80.2166156!3d12.982030000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52673c7c298d0d%3A0x2ed97367397f3b6d!2sGRK%20Events!5e0!3m2!1sen!2sin!4v1747055167712!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className='border-1 border-gray-300 rounded-lg w-full h-full'
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className='p-5 py-10 space-y-5 bg-mustard rounded-2xl'>
          <p className='base-mustard'>Hii! We are always here to help you.</p>
          <div className='flex gap-3 items-center bg-white/30 p-3 rounded-lg'>
            <Headset />
            <div>
              <p className='base-mustard text-left text-sm'>Helpline</p>
              <p className='base-mustard text-left text-sm'>{`+91 ${phone}`}</p>
            </div>
          </div>
          <div className='flex gap-3 items-stretch bg-white/30 p-3 rounded-lg'>
            <MessageCircleMore />
            <div>
              <p className='base-mustard text-left text-sm'>SMS/Whastsapp</p>
              <p className='base-mustard text-left text-sm'>{`+91 ${phone}`}</p>
            </div>
          </div>
          <div className='flex gap-3 items-stretch bg-white/30 p-3 rounded-lg'>
            <AtSign />
            <div>
              <p className='base-mustard text-left text-sm'>E-Mail</p>
              <p className='base-mustard text-left text-sm'>{`+91 ${phone}`}</p>
            </div>
          </div>

          <hr />

          <p className='base-mustard text-left px-3 text-sm font-bold'>Connect with us</p>
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
      </div>
    </div>
  )
}

export default Contact