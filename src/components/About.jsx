import React from 'react';

function About() {
  return (
    <div name="About me" className='max-w-screen-2xl container mx-auto px-4  md:px-20 my-16'>
      <h1 className='text-purple-600 text-3xl font-bold mb-5'>About me</h1>
      <p>Hi, I’m Ritam — a web developer with a passion for the MERN stack and an eye for UI/UX design. I enjoy turning ideas into interactive, user-friendly websites. Always curious and driven, I’m constantly exploring the tech world and learning something new every day.</p>
      <br />
      <h1 className='text-blue-500 font-semibold text-xl mb-3'>Education</h1>
      
            <ul className='list-disc space-y-2 ml-5'>
                <li>
                    Secondary Schooling (2008 – 2020) completed from Ariadaha Kalachand High School and Obtained percentage: 79%
                </li>
                <li>
                    Higher Secondary Examination (2020 – 2022) completed from Ariadaha Kalachand High School (AKHS) and Obtained percentage: 70%
                </li>
                <li>
                    B.Tech in Computer Science and Engineering (2022 – 2026) purchasing from Academy of Technology. Currently in 4th year | CGPA: 7.5
                </li>
            </ul>

        <br />
        <h1 className='text-blue-500 font-semibold text-xl mb-3'>Skills</h1>
      
            <ul className='list-disc space-y-2 ml-5'>
                <li>
                    UI/UX Design: Proficient in crafting user-friendly interfaces using Figma and Chakra UI.
                </li>
                <li>
                    Frontend Development: HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS.
                </li>
                <li>
                    Backend Development: Node.js, Express.js, MongoDB, Postman.
                </li>
                <li>
                    Programming Languages: C++ (OOP - core language). Also Python, Java (basic level).
                </li>
                <li>
                    Version Control & Tools: Git and GitHub, Postman(API testing).
                </li>
            </ul>

            <br />
            <h1 className='text-blue-500 font-semibold text-xl mb-3'>Languages</h1>
      
            <ul className='list-disc space-y-2 ml-5'>
                <li>
                   English – Professional proficiency
                </li>
                <li>
                    Hindi – Professional proficiency
                </li>
                <li>
                    Bengali – Professional proficiency
                </li>
                <li>
                    French – Intermediate proficiency
                </li>
            </ul>

            <br />
            <h1 className='text-blue-500 font-semibold text-xl mb-3'>Working Experiences</h1>
      
            <ul className='list-disc space-y-2 ml-5'>
                <li>
                   Vaani – College Event Website.
                   Designed, developed, and deployed the official website for “Vaani”. Handled both UI/UX design and full-stack development.
                </li>
                <li>
                    IEEE Student Chapter CSE Website.
                    Created and maintained the official website for the IEEE Student Chapter (CSE). Focused on clean design, responsive layout, and dynamic content integration.
                </li>
                <li>
                    Smart India Hackathon (SIH) Participant.
                    Participated in the national-level Smart India Hackathon (SIH), collaborating with a team to solve real-world problems using innovative tech solutions.
                </li>
            </ul>
    </div>
  )
}

export default About
