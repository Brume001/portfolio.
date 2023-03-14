import React from 'react';
import "./App.css";
import Header from './component/header/Header';
import Home from './component/home/Home';
import About from './component/about/About';
import Skills from './component/skills/Skills';
import Services from './component/services/Services';
import Qualification from './component/qualification/Qualification'; 
import Work from './component/work/Work'
import Testimonials from './component/testimonials/Testimonials' 
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import ScrollUp from './component/scrollup/ScrollUp'


const App = () => {
  return(
    <>
    <Header/>

    <main className='main'>
      <Home/>  
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Work/>
      <Testimonials/>
      <Contact/>
    </main>
    <Footer/>
    <ScrollUp/>
    </>
  )
}

export default App