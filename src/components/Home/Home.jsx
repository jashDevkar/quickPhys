import React from 'react';
import HeroImg from "../../assets/website/atom.png"
import Services from '../Services/Services';
import Chapters from '../Chapters/Chapters';


const Home = () => {
  return (
    <>
      <div className='min-h-[550px] sm:min-h-[600px] flex justify-center items-center text-brandDark py-10' >
        <div className="container pb-8 sm:pb-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 ">
            {/* text content section */}
            <div className='order-2 sm:order-1 flex flex-col justify-center gap-6'>
              <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold '>
                Discover the elegance of {" "}
                <span className='text-primary font-cursive '> Physics </span>
                with our rich and expertly tailored notes.
              </h1>
              <div>
                {/* <button className='bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white top-14'>Syllabus</button> */}
              </div>
            </div>
            {/* Image content section */}
            <div className='min-h-[300px] flex justify-center items-center order-1 sm:order-2 relative'>

              <img src={HeroImg} alt="" className='w-[250px] sm:w-[350px]  sm:scale-100 mx-auto spin' />
              {/* <div className='bg-gradient-to-r from-brandDark to-secondary absolute top-10 left-10 p-3 rounded-xl text-white float'><h1>Easy Notes</h1></div>
               <div className='bg-gradient-to-l from-brandDark to-secondary absolute bottom-10 right-10 p-3 rounded-xl text-white float'><h1>Fast Learning</h1></div> */}

            </div>
          </div>
        </div>
      </div>
      
      <Services />
      <Chapters />
    </>

  )
}

export default Home
