import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { motion } from 'framer-motion';  // Import motion from framer-motion
import Form from "./Form";

import CountriesData from "./CountriesData";

// Define the animation variants
const containerVariants = (delay) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay, duration: 1 }
  }
});

const desVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 0.5, duration: 1 } }
};

const HeroSection = () => {
  return (
    <>
      <header className="relative w-full bg-gradient-to-b from-orange-500 to-white h-[550px]">
        {/* Logo */}
        <div className="flex items-center ml-4 sm:ml-10 lg:ml-14 mt-1 pb-1">
          <img
            src="/Final Logo.png"
            alt="Logo"
            className="h-16 w-12 md:h-12 md:w-14 lg:h-16 lg:w-20"
          />
        </div>

        {/* Contact Info */}
        {/* <div className="absolute top-4 right-4 text-white flex flex-col text-sm sm:text-base">
          <a href="tel:+919160449000" className="flex items-center space-x-2">
            <FaPhoneVolume className="text-blue-600 animate-ring mr-1" />
            <span>: +91 9160449000</span>
          </a>
          <a href="mailto:info@vjcoverseas.com" className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-600 animate-pulse mr-1" />
            <span>info@vjcoverseas.com</span>
          </a>
        </div> */}

<div className="absolute top-4 right-4 text-white flex flex-col md:flex-row items-center gap-0 text-xs sm:text-sm md:text-base font-semibold italic pt-1">
  {/* Locations (Hidden on smaller screens) */}
  <div className="hidden lg:flex items-center space-x-2 text-black uppercase">
    <div className="flex items-center animate-pulse text-custom-blue">
      <img src="/loc.png" alt="Bangalore" className="mr-1 w-5 h-5" />
      <p>Bangalore</p>
    </div>
    <div className="flex items-center animate-pulse text-custom-blue">
      <img src="/loc.png" alt="Hyderabad" className="mr-1 w-5 h-5" />
      <p>Hyderabad</p>
    </div>
    <div className="flex items-center animate-pulse text-custom-blue">
      <img src="/loc.png" alt="USA" className="mr-1 w-5 h-5" />
      <p>USA</p>
    </div>
  </div>

  {/* Email (Visible on all screens) */}
  <div className="flex items-center text-black uppercase ml-4">
  <a href="mailto:info@vjcoverseas.com" className="flex items-center text-custom-blue">
    <FaEnvelope className="mr-1 w-5 h-5 text-black" />
    <p>info@vjcoverseas.com</p>
  </a>

  {/* Phone */}
 
  </div>

  {/* Phone */}
  <a href="tel:+919160449000" className="flex items-center text-white font-bold uppercase bg-transparent">
    <img src="/phone.gif" alt="Phone" className="h-6 w-6 ml-2" />
    <span className="text-black">+91 9160449000</span>
  </a>
</div>
<hr className="border-black w-[51%] ml-auto border-spacing-1 hidden md:block -mt-2" />





          
       
        {/* Motion Div */}
        <div className="mt-6">
        <motion.div
          variants={containerVariants(0.4)}  // Applying the variants
          initial="hidden"
          animate="show"
          className="flex flex-col space-y-8 lg:space-y-6 items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto relative z-10 mb-0 lg:mb-14"
        >
          <img
            src="/1.gif"
            alt="Work in Germany"
            className="w-[24rem] lg:w-[70rem] h-auto mt-0 items-center"
          />
          <img
            src="/award.png"
            alt="Work in Germany"
            className="w-[23rem] lg:w-[27rem] h-[7rem] items-center"
          />
          
        </motion.div>
        </div>

        {/* Form Container */}
        <div className="absolute top-[80%] sm:top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-white border border-orange-500 w-full max-w-[900px] h-[400px] flex justify-center items-center shadow-lg rounded-lg p-4">
  <div className="w-full flex justify-center pb-28">
    <Form />
  </div>
</div>

      </header>

      {/* Why Choose Us Section */}
      <div className="mt-72">
        <CountriesData />
      </div>
      
    </>
  );
};

export default HeroSection;
