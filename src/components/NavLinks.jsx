import { Link } from "react-router-dom"
import { IoLanguage } from "react-icons/io5"
import { Tooltip } from "antd"

import { useTranslation } from "react-i18next";

const navLinkRoutes = [
  "about",
  "skills",
  "projects",
  "contacts"
]

const NavLinks = ({ toggleNavMenu, switchLanguageBtnEvent }) => {
  const { t } = useTranslation('common');

  return (
    <>
      {navLinkRoutes.map((link, i) => (
        <li key={i}>
          <Link to={`/#${link}`}
              className="md:hover:underline md:hover:underline-offset-lg"
              onClick={toggleNavMenu}>
            {t(`navlinks.${link}`)}
          </Link>
        </li>
      ))}

      <li className="flex-center ml-auto">
        <Tooltip placement="bottomRight" title={t("switchLanguageBtn")}>
          <IoLanguage className="icon-btn" onClick={switchLanguageBtnEvent}/>
        </Tooltip>
      </li>
    </>
  )
}

export default NavLinks