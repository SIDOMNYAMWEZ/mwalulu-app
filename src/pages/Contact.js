import React from 'react';
import emailjs from 'emailjs-com';
import { FaFacebookF,FaTwitter,FaInstagramSquare,FaInfoCircle } from "react-icons/fa";

function Contact () {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pjfs178', 'template_619khii', e.target, '_FZYrzvvgemsw5NU4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='flex flex-col w-full min-h-screen'>

<div className="contact-card shadow-xl md:w-[650px] w-[280px]  mx-auto md:grid md:grid-cols-3 mt-10 mb-10">

<div className="h-full col-span-2 p-6 border card-white-area border-gray-50">
  <h1 className="text-2xl font-bold text-blue-400 ">GET IN TOUCH</h1>
  <p className="pt-2 ">I am always happy to make new valuable contacts</p>

  <form onSubmit={sendEmail}>
     <div className="gap-6 pt-2 md:grid md:grid-cols-2">
       <div>
         <div><label className="text-blue-600 ">Name</label></div> 
      <div><input type="text" name="name" className="w-full border-b focus:outline-none focus:border-b-2 focus:border-blue-500" /></div>
       </div>
       
    <div>
         <div><label className="text-blue-600 ">E-mail</label></div>
      <div><input type="text" name="user_email" className="w-full border-b focus:outline-none focus:border-b-2 focus:border-blue-500" /></div>
       </div>
    
      
     </div>
    
      
        <div className="pt-3 "><label className="text-blue-600 ">Message</label></div>
      <div><input type="text" name="message" className="w-full border-b focus:outline-none focus:border-b-2 focus:border-blue-500" /></div>

      <button type="submit" className="px-4 mt-6 border rounded-2xl">send</button>

      </form>
      
    
       
</div>

<div className="p-6 bg-blue-400 border card-info">
  <h1 className="text-xl text-center text-white ">CONTACT INFORMATION</h1>
    <div className="flex justify-center my-4 text-5xl text-white"><FaInfoCircle/></div>
    <div className="flex w-20 mx-auto "><span className="text-xl text-center text-white ">Click to view</span></div>
    <div className="flex justify-center mt-2 space-x-2 text-2xl text-white">
      
      <a href='https://www.facebook.com/profile.php?id=100009827769587'><FaFacebookF className='hover:cursor-pointer '/></a>
      <a href='https://twitter.com/sidohams1'><FaTwitter className='hover:cursor-pointer '/></a>
      <a href='https://www.instagram.com/reincahams/'><FaInstagramSquare className='hover:cursor-pointer '/></a>
    </div>
</div>

</div>
      
     
      
      
    </div>
  )
}

export default Contact