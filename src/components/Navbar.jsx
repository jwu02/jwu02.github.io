import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLinks } from './NavLinks'
import { BiMenuAltRight } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import Typewriter from 'typewriter-effect'

export function Navbar({ displayLanguage, switchLanguageBtnEvent }) {
  const [navMenuOpened, setNavMenuOpened] = useState(false)

  function toggleNavMenu() {
    // reverse boolean value every click
    setNavMenuOpened(!navMenuOpened)
    let hamburgerMenu = document.querySelector("#hamburger-nav ul");
    hamburgerMenu.classList.toggle("hidden")
  }

  let navMenuBtnStyles = "icon-btn relative z-50"
  let xCenterFixedElem = "fixed inset-x-0 mx-auto"

  return (
    <div className={`
      ${xCenterFixedElem} z-50 print:hidden 
      bg-gradient-to-b from-white to-[200%] 
    `}>
      <header className="
          bp-responsive-container 
          flex place-content-between items-center 
          pt-10 pb-3 text-2xl">
        <div>
          <Link to="/" className="font-light z-50">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Tony Wu.')
                  .start()
              }}
            />
          </Link>
        </div>

        <nav id="desktop-nav" className="hidden md:block">
          <ul className="flex flex-nowrap items-center gap-8">
            <NavLinks
              displayLanguage={displayLanguage}
              switchLanguageBtnEvent={switchLanguageBtnEvent} 
            />
          </ul>
        </nav>

        <nav id="hamburger-nav" className="flex-center flex-col md:hidden">
          {
            navMenuOpened ? 
              <IoClose className={navMenuBtnStyles} onClick={toggleNavMenu} /> : 
              <BiMenuAltRight className={navMenuBtnStyles} onClick={toggleNavMenu} />
          }

          <ul className="
            flex flex-col flex-nowrap justify-center gap-7 text-end 
            fixed top-0 right-0 h-full w-full p-10 backdrop-blur-2xl z-40 hidden
          ">
            <NavLinks
              displayLanguage={displayLanguage}
              switchLanguageBtnEvent={switchLanguageBtnEvent}
              toggleNavMenu={toggleNavMenu}
            />
          </ul>
        </nav>
      </header>
    </div>
  )
}