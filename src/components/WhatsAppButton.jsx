import React from 'react';
import assets from '../assets/assets';

const WhatsAppButton = () => {
  const phone = import.meta.env.VITE_WHATSAPP_PHONE;
  return (
    <a
      href={`https://api.whatsapp.com/send/?phone=${phone}&text=Hi!%20I'm%20interested%20in%20your%20event%20services.&type=phone_number&app_absent=0`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 bg-gray hover:bg-green-600 p-2 rounded-full shadow-lg transition-all duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <img src={assets.whatsappicon} alt="" width={36} height={36} />
    </a>
  );
};

export default WhatsAppButton;