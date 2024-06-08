import React from 'react'
import Img from "../../assets/website/dispersion.png"
import Img2 from "../../assets/website/electricity.png"
import Img3 from "../../assets/website/brain.png"

const ServicesData = [
    {
      id:1,
      img:Img,
      name: "Semester 1",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      aosDelay : "100",
    },
    {
        id:2,
        img:Img2,
        name: "Semester 2",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        aosDelay : "300",
    },
    {
        id:3,
        img:Img3,
        name: "Quiz",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        aosDelay : "500",
    }
];
const Services = () => {
  return (
    <div className='py-0'>
      <div className="container">
        {/* heder title */}
        <div className='text-center mb-20'>
            <h1 className='text-4xl font-bold font-cursive text-primary'>Get Notes Here</h1>
        </div>
        {/* Services Card Seclection */}
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-14 md:gap-5 place-items-center '>
            {
               ServicesData.map((data,index) => {
                return (
                    <div  key={index} className=' rounded-2xl bg-white   shadow-xl duration-200 max-w-[300px] group relative py-10'>
                        <div className='h-[122px]' >
                            <img src= {data.img} alt="" className='max-w-[180px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-0 duration-300' />
                        </div>
                        {/* Text Content */}
                        <div className='p-4 text-center'>
                          <h1 className='text-xl font-bold '>{data.name}</h1>
                          <p className='text-gray-500 group-hover:text-black duration-300 text-sm line-clamp-2 '>{data.description}</p>  
                        </div>
                    </div>
                );
               }) 
            }
           <div>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Services



// data-aos="fade-up" data-aos-delay={data.aosDelay}