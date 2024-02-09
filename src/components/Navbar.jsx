import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLinks } from './NavLinks'
import { BiMenuAltRight } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import { styles } from "../styles"
import Typewriter from 'typewriter-effect'

export function Navbar({ displayLanguage, switchLanguageBtnEvent }) {
  const [navMenuOpened, setNavMenuOpened] = useState(false)

  function toggleNavMenu() {
    // reverse boolean value every click
    setNavMenuOpened(!navMenuOpened)
    let hamburgerMenu = document.querySelector("#hamburger-nav ul");
    hamburgerMenu.classList.toggle("hidden")
  }

  let navMenuBtnStyles = `${styles.link} relative z-50 ${styles.iconBtn}`
  let xCenterFixedElem = "fixed inset-x-0 mx-auto"

  return (
    <header className={`
      ${styles.fixedResponsiveContainerWidths} 
      ${xCenterFixedElem} 
      flex place-content-between items-center py-10 text-2xl z-50
    `}>
      <div className={`${styles.link} z-50`}>
        <Link to="./index.html#" className="text-nowrap font-light">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Tony Wu.')
                .start()
            }}
          />
        </Link>
      </div>

      <nav id="desktop-nav" className={`hidden md:block`}>
        <ul className="flex flex-nowrap items-center gap-8">
          <NavLinks
            displayLanguage={displayLanguage}
            switchLanguageBtnEvent={switchLanguageBtnEvent} 
          />
        </ul>
      </nav>

      <nav id="hamburger-nav" className={`${styles.flexCentering} flex-col md:hidden`}>
        {
          navMenuOpened ? 
            <IoClose className={navMenuBtnStyles} onClick={toggleNavMenu} /> : 
            <BiMenuAltRight className={navMenuBtnStyles} onClick={toggleNavMenu} />
        }

        <ul className="
          flex flex-col flex-nowrap justify-center gap-7 text-end 
          fixed top-0 right-0 h-full w-full p-10 bg-white z-40 hidden
        ">
          <NavLinks
            displayLanguage={displayLanguage}
            switchLanguageBtnEvent={switchLanguageBtnEvent}
            toggleNavMenu={toggleNavMenu}
          />
        </ul>
      </nav>
    </header>
  )
}