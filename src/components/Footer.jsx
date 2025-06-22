import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoTelegram } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
        <div className='px-4 md:px-20'>
            <hr className='opacity-25 fill-purple-500' />
            <footer className='py-6'>
                <div className='max-w-screen-2xl container mx-auto my-20 '>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex space-x-4 justify-center'>
                            < FaXTwitter size={18} />
                            < FaLinkedinIn size={18} />
                            < IoLogoInstagram size={18} />
                            < BiLogoTelegram size={18} />
                            < FaFacebook size={18} />
                        </div>
                        <div className='mt-8 border-t border-purple-200 pt-8 flex flex-col items-center'>
                            <p className='text-sm'>&copy; All rights reserved - Ritam Pal</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </>
  )
}

export default Footer


//https://www.facebook.com/mita.rit.14
