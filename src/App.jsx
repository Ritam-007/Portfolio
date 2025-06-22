import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div>
        <Navbar />             {/*Importing Navbar from  "Navbar.jsx"*/}
        <Home />               {/*Importing Home from  "Home.jsx"*/}
        <About />              {/*Importing About from  "About.jsx"*/}
        <Projects />           {/*Importing Projects from  "Projects.jsx"*/}
        <Experience />         {/*Importing Experience from  "Experience.jsx"*/}
        <Contact />            {/*Importing Contact from  "Contact.jsx"*/}
        <Footer />             {/*Importing Footer from  "Footer.jsx"*/}
      </div>
      <Toaster />
    </>
  )
}

export default App
