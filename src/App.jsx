import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/about';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Navbar />             {/*Importing Navbar from  "Navbar.jsx"*/}
      <Home />              {/*Importing Home from  "Home.jsx"*/}
      <About />
      <Projects />
      <Experience />
    </>
  )
}

export default App
