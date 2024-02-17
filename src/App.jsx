import { useEffect, useState } from 'react'
import { translatedLanguages } from './data'

import './App.css'
import { Navbar } from './components/Navbar'
import { Landing } from './components/Landing'
import { About } from './components/About'
import { Resume } from './components/resume/Resume'
import { Educations } from './components/Educations'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contacts } from './components/Contacts'

function App() {
  let languageIndex = (() => {
    let index = sessionStorage.getItem("languageIndex")
    return index ? index : 0
  })()
  const [displayLanguage, setDisplayLanguage] = useState(translatedLanguages[languageIndex])

  function switchLanguageBtnEvent() {
    // cycle through translated languages
    languageIndex = (languageIndex+1) % translatedLanguages.length

    // store languageIndex in session storage
    sessionStorage.setItem("languageIndex", languageIndex)

    // setDisplayLanguage which triggers a rerender of 
    // all components using the state variable
    setDisplayLanguage(translatedLanguages[languageIndex])
  }

  // https://stackoverflow.com/questions/61779236/how-to-navigate-to-another-page-with-a-smooth-scroll-on-a-specific-id-with-react
  const location = useLocation()
  useEffect(()=> {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
          elem.scrollIntoView({behavior: "smooth"})
      }
    } else {
      window.scrollTo({top:0,left:0, behavior: "smooth"})
      }
  }, [location,])

  return (
    <>
      <Navbar displayLanguage={displayLanguage} switchLanguageBtnEvent={switchLanguageBtnEvent} />

      <Routes>
        <Route path="/" element={<Home displayLanguage={displayLanguage} />} />
        <Route path="resume" element={<Resume displayLanguage={displayLanguage} />} />
        <Route path="educations" element={<Educations displayLanguage={displayLanguage} />} />
      </Routes>
      
      <Footer displayLanguage={displayLanguage} />
    </>
  )
}

const Home = ({displayLanguage}) => {
  return (<>
    <Landing displayLanguage={displayLanguage} />
    <About displayLanguage={displayLanguage} />
    <Skills displayLanguage={displayLanguage} />
    <Projects displayLanguage={displayLanguage} />
    <Contacts displayLanguage={displayLanguage} />
  </>)
}

export default App
