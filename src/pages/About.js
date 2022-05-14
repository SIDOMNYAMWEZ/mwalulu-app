import React from 'react'
import {Link} from 'react-router-dom';

function About () {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <h1 className="flex pt-5 pb-6 pl-[171px] text-2xl font-bold text-blue-500 underline">Skills</h1>

      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3">

        <div className="md:h-[200px] md:w-[200px] border shadow-md w-[200px] h-[200px] mx-auto text-center pt-3">
          <p>HTML5</p>
          <img src="images/html-5.png" alt="" width={'100px'} className="mx-auto mt-4"/>
        </div>

        <div className="md:h-[200px] md:w-[200px] border shadow-md w-[200px] h-[200px] mx-auto text-center pt-3">
          <p>Css</p>
          <img src="images/css-3.png" alt="" width={'100px'} className="mx-auto mt-4"/>
        </div>

        <div className="md:h-[200px] md:w-[200px] border shadow-md w-[200px] h-[200px] mx-auto text-center pt-3">
          <p>TailwindCss</p>
          <img src="images/tailwind.png" alt="" width={'135px'} className="mx-auto mt-4"/>
        </div>

        <div className="md:h-[200px] md:w-[200px] border shadow-md w-[200px] h-[200px] mx-auto text-center pt-3">
          <p>ReactJs</p>
          <img src="images/react.png" alt="" width={'100px'} className="mx-auto mt-4"/>
        </div>

        <div className="md:h-[200px] md:w-[200px] border shadow-md w-[200px] h-[200px] mx-auto text-center pt-3 text-bl">
          <p>Laravel Php framework</p>
          <img src="images/laravel.png" alt="" width={'100px'} className="mx-auto mt-4"/>
        </div>

      </div>
      <div className='mx-12 my-5'>
         <h1 className="py-6 pl-32 text-2xl font-bold text-blue-500 underline">About</h1>
           <p>I enjoy being challenged and engaging with projects that require me to work outside my comfort and 
             knowledge set, as continuing to learn new languages and development techniques are important to me 
             and the success of clients' requirements</p>
           <p className="pt-3">I spend most of the time designing and developing websites. I like learning new technology and
              i put much effort and hardwork acquiring new concepts.
            </p>
    </div>

    <div className='mb-6'>
        <h1 className="py-6 text-2xl font-bold text-blue-500 underline pl-[171px]">Project</h1>
        <Link to="/screenshot"><div className="sm:mx-24 h-[200px] w-[200px] border shadow-md mx-auto p-2 pt-4 hover:bg-blue-300 hover:cursor-pointer"><p>This is a project screenshot to
          showcase the project done with laravel API, it has four database operations for Create, Read, Update 
          and Delete functionalities</p></div></Link>
    </div>
    
    
    </div>
  )
}

export default About