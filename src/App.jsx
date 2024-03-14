import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Resume from './components/resume/Resume';
import Educations from './components/Educations';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  // https://stackoverflow.com/questions/61779236/how-to-navigate-to-another-page-with-a-smooth-scroll-on-a-specific-id-with-react
  const location = useLocation();
  useEffect(()=> {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({behavior: "smooth"})
      }
    } else {
      window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
  }, [location]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="educations" element={<Educations />} />
      </Routes>
      
      <Footer />
    </>
  )
}

const Home = () => {
  return (
    <>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  )
}

export default App
