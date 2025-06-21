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
        text : "MERN Stack : To-Do App"
      },

      {
        id : 2,
        logo : proj2,
        name : "SkyCast.com",
        text : "Ui-Ux : Weather forcasting design"
      },

      {
        id : 3,
        logo : proj3,
        name : "foodHub",
        text : "Ui-Ux : Online food App design"
      },

      {
        id : 4,
        logo : proj1,
        name : "cartbills.com",
        text : "Ui-Ux : Online Mobile Shop design"
      }
    ]
  return (
    <div className='max-w-screen-2xl container mx-auto px-4  md:px-20 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        <span className='underline font-semibold'>My Projects</span>
        <div className='h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-8'>
          {
            card.map(({id, logo, name, text}) => (
              <div className='md:w-[300px] md:h-[306x] border-[2px] border-purple-600 rounded-lg shadow-inner shadow-purple-600 p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                <img className='h-[200px] w-full' src={logo} alt="" />
                <div>
                  <div className='px-2 font-bold text-xl mb-2 text-blue-500'>{name}</div>
                  <p className='px-2 pb-3 text-gray-200'>{text}</p>
                </div>
                <div>
                  <button className='bg-blue-500 w-full text-center hover:bg-blue-700 hover:cursor-pointer font-bold rounded-md'>Check it out</button>
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
