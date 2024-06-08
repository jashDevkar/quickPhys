import React from 'react';

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "SEM 1",
        link: "/#sem1",
    },
    {
        title: "SEM 2",
        link: "/#sem2",
    },
    {
        title: "QUIZ",
        link: "/#quiz",
    },
]
const Footer = () => {
  return (
    <div className='text-white bg-gradient-to-r from-secondary to-primary/90'>
      <div className="min-h-[100px]">
      <div className="container grid md:grid-cols-3 pb-20 pt-5">
    {/* details */}
    <div className='py-8 px-4'>
        <a href="#" className='font-semibold tracking-widest text-2xl sm:text-3xl font-cursive'>QuickPhys</a>
        <p className='pt-4'> {" "} Explore the elegance of physics with meticulously curated notes for the discerning scholar.</p>
    </div>
           {/* LINkS */}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
              
              <div className='py-8 px-4'>
                <h1 className='text-xl font-semibold sm:text-left mb-3'>Important links</h1>
                <ul className='space-y-3'>
                    {
                        FooterLinks.map((data,index) =>(
                            <li key={index}>
                                <a href={data.link} className='inline-block hover:scale-105 duration-200'>
                                {data.title}                
                                </a>
                            </li>
                        ))
                    }
                </ul>
                </div>  

                <div className='py-8 px-4'>
                <h1 className='text-xl font-semibold sm:text-left mb-3'>More links</h1>
                <ul className='space-y-3'>
                    {
                        FooterLinks.map((data,index) =>(
                            <li key={index}>
                                <a href={data.link} className='inline-block hover:scale-105 duration-200'>
                                {data.title}                
                                </a>
                            </li>
                        ))
                    }
                </ul>
                </div>
                {/* <div><h1>SoMETHING MORE EXCITEING</h1></div>  */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
