import { Link } from "react-router-dom"
import { IoLanguage } from "react-icons/io5"
import { navLinks } from "../data"
import { Tooltip } from "antd"

export function NavLinks({ displayLanguage, switchLanguageBtnEvent, toggleNavMenu }) {
  const pageText = {
    switchLanguageBtn: {"en": "切换语言", "cn": "Switch Language"}
  }

  return (
    <>
      {navLinks.map((nav) => (
        <li key={nav.id}>
          <Link to={`/#${nav.id}`}
              className="md:hover:underline md:hover:underline-offset-lg"
              onClick={toggleNavMenu}>
            {nav.title[displayLanguage]}
          </Link>
        </li>
      ))}
      <li className="flex-center ml-auto">
        <Tooltip placement="bottomRight" title={pageText.switchLanguageBtn[displayLanguage]}>
          <IoLanguage className="icon-btn" onClick={switchLanguageBtnEvent}/>
        </Tooltip>
      </li>
    </>
  )
}