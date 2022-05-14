import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { IoReorderThree,IoClose } from "react-icons/io5";

function Header(){
    const [show, setShow] = useState(false)

  const toggle =() => {
    setShow(!show);
  }
  return (
    
        <header className='sticky top-0 z-10 w-full'>
          <nav className="flex h-[70px] w-full m-auto items-center justify-between bg-blue-500 text-white shadow-2xl">
        
              <div className="logo ml-9">
                <img src='images/logo.png' alt='Logo' width={'50px'}/>
              </div>

              <div className="flex items-center links mr-9 space-x-7">
                <Link to="/" className="hidden sm:py-5 sm: hover:border-b-4 sm:flex">Home</Link>
                <Link to="/about" className="hidden py-5 hover:border-b-4 sm:flex">About</Link>
                <Link to="/contact" className="hidden py-5 hover:border-b-4 sm:flex">Contact</Link>
                {show ? <IoClose onClick={toggle} className="text-2xl sm:hidden hover:cursor-pointer"/> : 
                <IoReorderThree onClick={toggle} className="text-3xl sm:hidden hover:cursor-pointer"/>}
              </div>
          </nav>

          {show ? <nav className="absolute w-full h-screen bg-blue-400 sm:hidden">
              <Link to={'/'} onClick={toggle}><div className="py-2 text-white border-b border-gray-300 px-9 hover:bg-slate-300 hover:text-blue-600">Home</div></Link>
              <Link to={'/about'} onClick={toggle}><div className="py-2 text-white border-b border-gray-300 px-9 hover:bg-slate-300 hover:text-blue-600">About</div></Link>
              <Link to={'/contact'} onClick={toggle}><div className="py-2 text-white border-b border-gray-300 px-9 hover:bg-slate-300 hover:text-blue-600">Contact</div></Link>
          </nav> : ''}
          
        </header>
    
  )
}

export default Header