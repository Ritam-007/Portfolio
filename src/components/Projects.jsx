import React from 'react';
import proj1 from '../../src/assets/image1.jpeg';
import proj2 from '../../src/assets/image2.jpeg';
import proj3 from '../../src/assets/image3.png';
import proj4 from '../../src/assets/image4.png';

function Projects() {
    const card = [
      {
        id : 1,
        logo : proj4,
        name : "My To-Do",
        text : "MERN Stack : To-Do App",
        url: "https://www.linkedin.com/posts/ritam-pal-b38664253_connections-mernstack-fullstackdevelopment-activity-7341668021205118976-Dvcg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6RP1wBUa5pPt59bSKzOf1Z88cGjxVFDWw"
      },

      {
        id : 2,
        logo : proj2,
        name : "SkyCast.com",
        text : "Ui-Ux : Weather forcasting design",
        url: "https://www.linkedin.com/posts/ritam-pal-b38664253_uiuxdesign-weatherapp-figmadesign-activity-7104405801485660160-o6y3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6RP1wBUa5pPt59bSKzOf1Z88cGjxVFDWw"
      },

      {
        id : 3,
        logo : proj3,
        name : "foodHub",
        text : "Ui-Ux : Online food App design",
        url: "https://www.linkedin.com/posts/ritam-pal-b38664253_connections-uidesign-uxdesign-activity-7237138419380805633-DC8G?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6RP1wBUa5pPt59bSKzOf1Z88cGjxVFDWw"
      },

      {
        id : 4,
        logo : proj1,
        name : "cartbills.com",
        text : "Ui-Ux : Online Mobile Shop design",
        url: "https://www.linkedin.com/posts/ritam-pal-b38664253_ui-uxdesign-figma-activity-7105417463562928128-BSR5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6RP1wBUa5pPt59bSKzOf1Z88cGjxVFDWw"
      }
    ]
  return (
    <div NAME="Portfolio" className='max-w-screen-2xl container mx-auto px-4  md:px-20 mt-10'>
      <div>
        <h1 className='text-purple-600 text-3xl font-bold mb-5'>Portfolio</h1>
        <span className='underline font-semibold'>My Projects</span>
        <div className='h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-8'>
          {
            card.map(({id, logo, name, text, url}) => (
              <div className='md:w-[300px] md:h-[331px] border-[2px] border-purple-600 rounded-lg shadow-inner shadow-purple-600 p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                <img className='h-[200px] w-full' src={logo} alt="" />
                <div>
                  <div className='px-2 font-bold text-xl mb-2 text-blue-500'>{name}</div>
                  <p className='px-2 pb-3 text-gray-200'>{text}</p>
                </div>
                <div>
                  <a href={url} target="_blank" rel="noopener noreferrer" className='bg-orange-500 w-full max-w-full overflow-hidden text-center hover:bg-orange-700 hover:cursor-pointer font-bold rounded-md py-2 mt-2 block truncate'>
                  Check it out
                  </a>
                 </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects










