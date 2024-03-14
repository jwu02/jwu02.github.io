import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

import NavLinks from './NavLinks';

const Navbar = () => {
  const { t, i18n: {changeLanguage, language} } = useTranslation('common');
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "cn" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  }

  const xCenterFixedElem = "fixed inset-x-0 mx-auto";

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
        
        <DesktopNav handleChangeLanguage={handleChangeLanguage} />
        <HamburgerNav handleChangeLanguage={handleChangeLanguage} />
      </header>
    </div>
  )
}

export default Navbar

const DesktopNav = ({ handleChangeLanguage }) => {
  return (
    <nav id="desktop-nav" className="hidden md:block">
      <ul className="flex flex-nowrap items-center gap-8">
        <NavLinks
          switchLanguageBtnEvent={handleChangeLanguage} 
        />
      </ul>
    </nav>
  )
}

const HamburgerNav = ({ handleChangeLanguage }) => {
  const [navMenuOpened, setNavMenuOpened] = useState(false);
  
  function toggleNavMenu() {
    // reverse boolean value every click
    // not recommended to use setNavMenuOpened(!navMenuOpened)
    // as can lead to unexpected behaviour
    setNavMenuOpened((prev) => !prev);
    let hamburgerMenu = document.querySelector("#hamburger-nav ul");
    hamburgerMenu.classList.toggle("hidden");
  }

  const navMenuBtnStyles = "icon-btn relative z-50"

  return (
    <nav id="hamburger-nav" className="flex-center flex-col md:hidden">
      {// if nav menu opened display close btn, otherwise menu button
        navMenuOpened ? 
          <IoClose className={navMenuBtnStyles} onClick={toggleNavMenu} /> : 
          <BiMenuAltRight className={navMenuBtnStyles} onClick={toggleNavMenu} />
      }

      <ul className="
        flex flex-col flex-nowrap justify-center gap-7 text-end 
        fixed top-0 right-0 h-full w-full p-10 backdrop-blur-2xl z-40 hidden
      ">
        <NavLinks
          toggleNavMenu={toggleNavMenu}
          switchLanguageBtnEvent={handleChangeLanguage}
        />
      </ul>
    </nav>
  )
}