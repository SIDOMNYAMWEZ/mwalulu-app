import React from 'react';
import { FaFacebookF,FaWhatsapp,FaTwitter,FaLinkedin,FaInstagramSquare } from "react-icons/fa";

function Footer  () {
  return (
    <footer className="static w-full mt-auto bg-slate-900">
    <div><h1 className="pt-2 pb-6 text-2xl font-bold text-center text-white">Website Developer</h1></div>  
    <div className=''>
        <p className="pl-4 pr-4 font-serif font-thin text-center text-white">I enjoy developing websites. 
        Once i start my project i will make sure it is accomplished according to a specified time. I am a 
        hardworking person, so when it comes to building a website i put all focus to my task.</p>
        <div className='flex justify-center px-5 py-5 text-2xl text-white sm:space-x-14'>
            <FaFacebookF className='hover:cursor-pointer '/><FaWhatsapp className='hover:cursor-pointer '/>
            <FaTwitter className='hover:cursor-pointer '/><FaLinkedin className='hover:cursor-pointer '/>
            <FaInstagramSquare className='hover:cursor-pointer '/>
        </div>
        <p className="pb-2 font-sans text-sm text-center text-white">Developed by Mwalulu &copy;2022</p>
    </div>
    
</footer>
  )
}

export default Footer