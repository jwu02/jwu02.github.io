import { useState } from 'react'
import { translatedLanguages } from './data'

import './App.css'
import { Navbar } from './components/Navbar'
import { Landing } from './components/Landing'
import { About } from './components/About'

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

  return (
    <>
      <Navbar displayLanguage={displayLanguage} switchLanguageBtnEvent={switchLanguageBtnEvent} />
      <Landing displayLanguage={displayLanguage} />
      <About displayLanguage={displayLanguage} />
    </>
  )
}

export default App
