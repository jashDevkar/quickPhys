import React from 'react';
import Logo from "../../assets/website/oglogo.png";
import Acc from "../../assets/website/id.png";
import { Link } from 'react-router-dom';
const Menus = [
    {
        id:1,
        name : "Home",
        link : ""
    },
    {
        id:2,
        name : "Menu",
        link : "/#menu"
    },
    {
        id:1,
        name : "About",
        link : "/#about"
    },
]

const Navbar = () => {
  return (
    <div className= "bg-gradient-to-r from-secondary to-primary/90 text-white" >
      <div className="container py-3">
        <div className="flex justify-between items-center gap-4">
            {/* Logo section */}
            <div>
                <a href="#" className='font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive' >
                <img src={Logo} alt="Logo" className='w-14' />
                QuickPhys
                </a>
            </div>
            {/* Link section */}
            <div className='flex justify-between items-cente gap-4'>
                <ul className='hidden sm:flex items-center gap-4 '>
                    {
                        Menus.map((data,index) => (
                            <li key={index}>
                                <Link href={data.link} className='hover:text-yellow hover:underline inline-block text-xl  px-1 text-white/70  dureation-200'> 
                                {data.name}
                                </Link>   
                            </li>
                        ))
                    }
                </ul>
                <button className='bg-secondary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-1.5'> 
               <img src={Acc} alt="Logo" className='w-7 text-xl cursor-pointer' />
               Account 
                </button>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Navbar
