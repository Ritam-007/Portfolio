import React from 'react'
import pic from '../../src/assets/my Pic.jpg'; 
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoTelegram } from "react-icons/bi";

import { FaReact } from "react-icons/fa";
import { LiaNodeJs } from "react-icons/lia";
import { SiExpress } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4  md:px-20 my-20 '>
        <div className='flex  flex-col md:flex-row'>
          <div className='text-white w-full md:w-2/3 mt-8 md:mt-24 space-y-4 order-2 md:order-1'>
            <span className='text-xl'>Welcome Aboard My Feed</span>
            <div className='flex space-x-5 text-2xl md:text-4xl'>
              <h1 className='w-fit'>Hello Folks, I'm</h1>
              {/* <span className='text-blue-500 font-bold'> Developer</span> */}
              <ReactTyped className='text-blue-500 font-bold'
                strings={["Ritam", "Ui/Ux Designer", "Frontend Developer", "Backend Developer", "Coder", "Competetive Programmer"]}
                typeSpeed={50}
                backSpeed={50}
                loop={true}
              />
            </div>
              <p className='text-sm md:text-base text-justify'>Hi, I’m Ritam — a B.Tech CSE student passionate about web development and design.
                I specialize in UI/UX and MERN stack, building responsive and user-friendly websites.
                With C++ as my core language, I have intermediate skills in Data Structures and Algorithms.
                I love exploring new tech and improving my skills every day.
                Learning and growth drive everything I do.
              </p>
              <br />

              {/*Social Media Icons*/}

              <div className='flex flex-col space-y-10 items-center md:flex-row md:justify-between md:space-y-0'>
                <div className='space-y-3 font-bold'>
                  <h1 className='text-center md:text-left'>Accessible via</h1>                
                  <div className='flex space-y-1 space-x-6'>
                    <FaXTwitter className='text-2xl cursor-pointer hover:scale-110 hover:border-b-2 border-blue-500'/>
                    <FaLinkedinIn className='text-2xl cursor-pointer hover:scale-110 hover:border-b-2 border-blue-500'/>
                    <IoLogoInstagram className='text-2xl cursor-pointer hover:scale-110 hover:border-b-2 border-blue-500'/>
                    <BiLogoTelegram className='text-2xl cursor-pointer hover:scale-110 hover:border-b-2 border-blue-500'/>
                  </div>
                </div>

                <div className='space-y-3 font-bold'>
                  <h1 className='text-center md:text-left'>Technologies I’m currently working with</h1>                
                  <div className='flex space-x-6'>
                    <TbBrandMongodb className='text-xl cursor-pointer md:text-3xl hover:scale-110 hover:border-b-2 rounded-full border-blue-500'/>
                    <SiExpress className='text-xl cursor-pointer md:text-3xl hover:scale-110 hover:border-b-2 rounded-full border-blue-500'/>
                    <FaReact className='text-2xl cursor-pointer md:text-3xl hover:scale-110 hover:border-b-2 rounded-full border-blue-500'/>
                    <LiaNodeJs className='text-xl cursor-pointer md:text-3xl hover:scale-110 hover:border-b-2 rounded-full border-blue-500'/>
                    <RiTailwindCssFill className='text-xl cursor-pointer md:text-3xl hover:scale-110 hover:border-b-2 rounded-full border-blue-500'/>
                    <SiMysql className='text-xl cursor-pointer md:text-3xl hover:scale-110 hover:border-b-2 rounded-full border-blue-500'/>
                  </div>
                </div>
              </div>
            </div>


          <div className='text-white w-full md:w-1/3 flex items-center justify-center md:ml-40 md:mt-4 order-1'>
            <img className='border-4 border-purple-500 rounded-full md:h-[450px] md:w-auto' src={pic} alt="" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <hr className='opacity-25 fill-purple-500'/>
      </div>

      
    </>
  );
}

export default Home
