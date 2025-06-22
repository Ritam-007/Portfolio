import React from 'react';
import pic1 from '../assets/html.png';
import pic2 from '../assets/css.png';
import pic3 from '../assets/javascript.png';
import pic4 from '../assets/mongodb.png';
import pic5 from '../assets/express.png';
import pic6 from '../assets/react.svg';
import pic7 from '../assets/node.png';
import pic8 from '../assets/java.png';
import pic9 from '../assets/python.webp';
import pic10 from '../assets/oracle.png';

function Experience() {
    const card = [
      {
        id : 1,
        logo : pic1,
        name: "HTML"  
      },

      {
        id : 2,
        logo : pic2,
        name: "CSS"  
      },

      {
        id : 3,
        logo : pic3,
        name: "javascript"  
      },

      {
        id : 4,
        logo : pic4,
        name: "MongoDB"  
      },
      {
        id : 5,
        logo : pic5,
        name: "Express JS"  
      },

      {
        id : 6,
        logo : pic6,
        name: "React Js"  
      },

      {
        id : 7,
        logo : pic7,
        name: "Node Js"  
      },

      {
        id : 8,
        logo : pic8,
        name: "Java"  
      },
      {
        id : 9,
        logo : pic9,
        name: "Python"  
      },

      {
        id : 10,
        logo : pic10,
        name: "Oracle"  
      }
    ]
  return (
    <div name="Techs" className='max-w-screen-2xl container mx-auto px-4  md:px-20 my-16'>
      <div>
        <h1 className='text-purple-600 text-3xl font-bold mb-5'>Experiences and My Techs</h1>
        <p>I am a fresher and Actively looking for internship. My skills are mentioned bellow.</p>
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-7 my-10'>
              {
                card.map(({id, logo, name, text}) => (
                  <div className='flex flex-col items-center justify-center md:w-[200px] md:h-[200px] border-[2px] border-purple-600 rounded-full p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                    <img className='w-[150px] rounded-full' src={logo} alt="" />
                    <div>
                      <div>{name}</div>
                    </div>
                  </div>
                ))
              }
        </div>
      </div>
    </div>
  )
}

export default Experience

