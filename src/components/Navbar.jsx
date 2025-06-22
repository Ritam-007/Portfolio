import React, { useState } from 'react';
import pic from '../../src/assets/my Pic.jpg';                        //"pic" is the variavle name of the image located at "../../src/assets/my Pic.jpg"... this "pic" is used in  line no. 11, in img src
import { RiMenuLine } from "react-icons/ri";                        // importing for menu bar
import { RxCross1 } from "react-icons/rx";                          // importing for cross
import { Link } from 'react-scroll';                             

function Navbar() {

const [menu, setMenu] = useState(false);                                //"setMenu" is a function that calls "menu"...initially value is false...then go to line no 33 and 34 ...
const navItems = [                                                      // creating an array of nav items because, navitems will be using more than one time. The "Navbar" array will be mapped when it will be used
    {
        id: 1,
        text: "Home"
    },
    {
        id: 2,
        text: "About me"
    },
    {
        id: 3,
        text: "Portfolio"
    },
    {
        id: 4,
        text: "Techs"
    },
    {
        id: 5,
        text: "Contact me"
    }
]

  return (
    // "<>...</>"... This is called React Fregmentation, that is a feature in React that allows developers to group multiple JSX elements together without adding an extra DOM node
    <>               
        {/* Nav bar for desktop screen*/}                                        
        <div className='fixed top-0 max-w-screen-2xl container mx-auto px-4  md:px-20 shadow-purple-950 shadow-md text-white h-16 z-50 bg-black'>
            <div className='flex justify-between items-center h-16'>
                <div className='flex space-x-2'>
                    <img src={pic} className='h-10 w-10 rounded-full' alt="" />
                    <h1 className='font-semibold text-xl cursor-pointer'>
                        <span className='text-purple-600'>R</span>it<span className='text-purple-600'>'</span>z<span className='text-sm'>z</span>
                        <p className='text-sm'>Designer<span className='text-purple-600 text-sm'>&</span>Devleloper</p>
                    </h1>
                </div>
                <div>
                    <ul className='hidden md:flex space-x-10'>
                        {
                            navItems.map(({id, text}) => (
                                <li className='hover:scale-125 hover:text-purple-600 duration-200 hover:cursor-pointer' key={id}><Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link></li>
                            ))
                        }
                    </ul>


                    <div onClick={() => setMenu(!menu)} className='md:hidden cursor-pointer'>                {/*after clicking the "menu" button, the "setMenu" function will be called*/}
                        {menu ? <RxCross1 size={25}/> : <RiMenuLine size={25}/>}              {/*If the value of menu is true, then display "cross" else display "menu bar" */}
                    </div>


                </div>
            </div>

            
            {/*Nav bar for Mobile screen*/}

            {
                menu && (
                    <div className='bg-black'>
                        <ul className='md:hidden flex flex-col h-screen items-center justify-center fixed left-0 right-0 text-xl space-y-4'>
                            {
                                navItems.map(({id, text}) => (
                                    <li className='hover:scale-125 hover:text-purple-800 duration-200 hover:cursor-pointer' key={id}>{text}</li>
                                ))
                            }  
                        </ul>
                    </div>
                )}
           </div>
        </>
     )
}

export default Navbar
