import React from 'react'
import './Home.css'

function Home (){
  return (
    <div className='w-full min-h-screen'>
      
        <h1 className='head text-[30px] font-bold pl-9 pt-3'>Hi, I'm</h1>
        <h1 className='head text-[45px] font-bold text-blue-500 pl-9'>Said Mwalulu</h1>
        <p className='head text-[18px] pl-9'>A Web developer with a passion for solving problems and learning new things for 
        a better software</p>
      
        <div className='flex flex-col items-center lg:flex-row '>
            <div className=" bg-white w-[250px] sm:w-[550px] sm:mx-9 border p-6 mt-12 border-blue-500 shadow-xl">
                <p>I am a Computer Science graduate having the fundamentals of programming language. I create
                  beautiful websites with intuitive user interfaces for small businesses.
                  and, tight web apps for amazing software companies that want to deliver the best product to their customers and improve retention.
                 
                </p>
            </div>
            <div>
              <img src='images/iconhome.jpg' alt='' width={'300px'} className="md:ml-[130px] shadow-2xl rounded-2xl my-9" />
            </div>
        </div>

    </div> 
  )
}

export default Home