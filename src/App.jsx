import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import Chapters from './component/Chapters/Chapters';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import Modules from './component/Modules/Modules';
import Selection from './component/Selection/Selection';
import Videos from './component/Videos/Videos.jsx';
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing : "ease-in",
      delay : 100,
  });
  })
  return (
    <div className='overflow-x-hidden' >

      
      {/* <div className='flex justify-center h-screen w-full items-center bg-gradient-to-br from-secondary to-primary/90'> <Login /></div> */}
     
      {/* <Modules /> */}

      <Selection />

      {/* <div className="min-h-screen bg-gradient-to-l from-primary to-secondary  bg-opacity-20 flex items-center justify-center p-4">
       <Videos />     
      </div> */}

      {/* <Navbar />
      <Home />
      <Services />
      <Chapters />
      <Footer /> */}
    </div>
  )
}

export default App
