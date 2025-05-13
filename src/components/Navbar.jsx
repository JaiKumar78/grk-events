import React, { useState, useContext } from 'react'

import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { EventContext } from '../context/EventContext';
import assets from '../assets/assets';

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

const Navbar = () => {
    const { activePage, setActivePage, isVisible, setIsVisible } = useContext(EventContext)
    // const location = useLocation();
    // const [activeLink, setActiveLink] = useState(location.pathname);
    // const [isVisible, setIsVisible] = useState(false);
    
    const desktopNavLinks = navLinks.filter(link => link.name !== "Contact"); 
  return (
    <>
    <div className='flex justify-between items-center px-4 md:px-12 lg:px-20 py-4 border-b-mustard border-b-4 bg-main'>
        <div>
            <Link to='/'>
                <img src={assets.logo} className='w-24 h-24'alt="logo" onClick={() => setActivePage('/')} />
            </Link>
        </div>
        <div className='items-center gap-6 text-white font-nunito text-[18px] hidden md:flex'>
            {desktopNavLinks.map((item) => (
                <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setActivePage(item.path)} // Set active link on click
                className={`group flex flex-col items-center gap-1 transition-all duration-300 ${activePage === item.path ? 'text-mustard' : ''} hover:text-mustard`}
              >
                <p>{item.name}</p>
              </NavLink>
            ))}
        </div>
        <div>
            <Link to='/contact' onClick={() => setActivePage(item.path)} className='hidden md:block border-mustard border-2 text-mustard font-semibold text-sm p-2.5 hover:bg-mustard hover:text-white transition rounded-md'>
                CONTACT US
            </Link>
            <Menu onClick={() => setIsVisible(true)} width={27} height={27} className='md:hidden cursor-pointer' />
        </div>
    </div>

    {/* Mobile slider nav */}
    <div onClick={() => setIsVisible(false)} className={`fixed top-0 right-0 bottom-0 w-full z-100 max-w-[300px] bg-main transition-transform duration-300 
        ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                    
            <div className='flex flex-col'>
                {/* Close Button */}
                <div onClick={() => setIsVisible(false)} className='flex items-center justify-end gap-4 p-4 cursor-pointer'>
                    {/* <img src={assets.cross_icon} className='h-4' alt="" /> */}
                    <X  width={27} height={27} className='cursor-pointer'/>
                </div>

                {/* Menu Links */}
                {navLinks.map((item) => (
                  <NavLink 
                    key={item.path} 
                    to={item.path} 
                    onClick={() => {
                      setIsVisible(false); 
                      setActivePage(item.path); // Update active link state
                    }} 
                    className={`py-2 text-center ${activePage === item.path ? 'text-white bg-mustard' : 'text-black hover:text-mustard'}`}
                  >
                    {item.name.toUpperCase()}
                  </NavLink>
                ))}
            </div>
        </div>
    </>

  )
}

export default Navbar