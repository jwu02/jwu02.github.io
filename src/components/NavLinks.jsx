import { Link } from "react-router-dom"
import { IoLanguage } from "react-icons/io5"
import { navLinks } from "../data"
import { styles } from "../styles"

export function NavLinks({ displayLanguage, switchLanguageBtnEvent, toggleNavMenu }) {
  return (
    <>
      {navLinks.map((nav) => (
        <li key={nav.id}>
          <Link
            to={`./index.html#${nav.id}`}
            className={`${styles.link} ${styles.rowNavUnderline}`}
            onClick={toggleNavMenu}
          >
            {nav.title[displayLanguage]}
          </Link>
        </li>
      ))}
      <li className={`${styles.flexCentering} ml-auto`}>
        <IoLanguage
          className={`${styles.link} ${styles.iconBtn}`}
          onClick={switchLanguageBtnEvent}
        />
      </li>
    </>
  )
}