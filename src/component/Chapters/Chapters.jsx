import React from 'react';
import Slider from 'react-slick';
import Img from "../../assets/website/atom.png";
import Img2 from "../../assets/website/transverse-wave.png";
import Img3 from "../../assets/website/electrical-circuit.png";
import Img4 from "../../assets/website/prism.png";
import Img5 from "../../assets/website/electricity.png";
import Img6 from "../../assets/website/magnetic-field.png";

const ChaptersData = [
    {
        id:1,
        name:"QUANTUM PHYSICS",
        text: "De Broglie hypothesis of matter waves; properties of matter waves; wave packet,phase velocity and group velocity; Wave function; Physical interpretation of wave function; Heisenberg uncertainty principle; non existence of electron in nucleus; Schrodinger‘s time dependent wave equation; time independent wave equation; Particle trapped in one dimensional infinite potential well, Quantum Computing ",
        img: Img,
    },
    {
        id:2,
        name:"CRYSTALLOGRAPHY",
        text: "Miller indices; interplanar spacing; X-ray diffraction and Bragg‘s law; Determination of Crystal structure using Bragg‘s diffractometer;Miller indices; interplanar spacing; X-ray diffraction and Bragg‘s law; Determination of Crystal structure using Bragg‘s diffractometer;   ",
        img: Img2,
    },
    {
        id:3,
        name:"SEMICONDUCTOR PHYSICS",
        text: "Direct & indirect band gap semiconductor; Fermi level; Fermi dirac distribution; Fermi energy level in intrinsic & extrinsic semiconductors; effect of impurity concentration and temperature on fermi level; mobility, current density; Hall Effect; Fermi Level diagram for p-n junction (unbiased, forward bias, reverse bias); Applications of semiconductors: LED, Zener diode, Photovoltaic cell. ",
        img: Img3,
    },
    {
        id:4,
        name:"INTERFERENCE IN THIN FILM",
        text: " Interference by division of amplitude, Interference in thin film of constant thickness due to reflected and transmitted light; origin of colours in thin film; Wedge shaped film; Newton‘s rings Applications of interference - Determination of thickness of very thin wire or foil; determination ofrefractive index of liquid; wavelength of incident light;radius of curvature of lens; testing of surfaceflatness; Anti-reflecting films and Highly reflecting film",
        img: Img4,
    },
    {
        id:5,
        name:"SUPERCONDUCTORS AND SUPERCAPACITORS",
        text: " Superconductors: Critical temperature, critical magnetic field, Meissner‘s effect, Type I and Type II and high Tc superconductors;  Supercapacitors: Principle, construction, materials and applications, comparison with capacitor and batteries : Energy density, Power density,",
        img: Img5,
    },
    {
        id:6,
        name:"ENGINEERING MATERIALS AND APPLICATIONS",
        text: "Liquid crystals: Nematic, Smectic and cholesteric phases, Liquid crystal display.Multiferroics : Type I & Type II multiferroics and applications,Magnetoresistive Oxides: Magnetoresistance, GMR and CMR materials, introduction to spintronics ",
        img:Img6,
    }
]

const Chapters = () => {
    const settings ={
        dots:true,
        arrows:false,
        infinite : true,
        speed:1000,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed : 2000,
        cssEase:"linear",
        pauseOnHover : true,
        pauseOnFocus: true,
        responsive:[
            {
                breakpoint:20000,
                settings:{
                    sildesToShow:2,
                    slidesToScroll : 1,
                    infinite : true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    sildesToShow:2,
                    slidesToScroll : 1,
                    initialSlide:2,
                },
            },
            {
                breakpoint:640,
                settings:{
                    sildesToShow:1,
                    slidesToScroll : 1,
                },
            },
        ]
    };
  return (
    <div className='py-10 mb-10'>
      <div className="container">
        {/* Header Section */}
        <div className='text-center mb-10'>
            <h1 className='text-4xl font-bold font-cursive text-primary'>Modules</h1>
        </div>
        {/* Module Card Selection */}
        <div>
            <Slider {...settings}>
                {
                    ChaptersData.map((data,index)=>{
                        return(
                            <div className='my-6' key={data.id} >
                                <div className='flex flex-col gap-4 shadow-lg py-10 px-6 mx-4 gap-4 rounded-xl bg-primary/10 relative'>

                                    <div className='mb-4'>
                                        <img src={data.img} alt="" className=' w-20 h-20 ' />
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className=' text-gray-500 line-clamp-2 '>{data.text}</p>
                                            <h1 className='text-xl font-bold font-cursive text-black/80'>{data.name}</h1>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Chapters
