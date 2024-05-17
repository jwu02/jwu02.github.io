import { resumePfp } from "../assets"
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5"
import { Link } from "react-router-dom"
import { Tooltip } from "antd"
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Landing = () => {
  const { t, i18n: {language}} = useTranslation('translation', { keyPrefix: 'landing' });

  const adjustedBtnWidth = language == "cn" ? "w-24" : "";

  return (
    // section container
    <section className="bp-responsive-container flex-center h-screen">
      {/* details container */}
      <div className="flex-center flex-col text-center gap-8 sm:flex-row md:gap-20">
        {/* profile image */}
        <div className="max-w-56 md:max-w-80">
          <img className="clip-path-circle" src={resumePfp} alt={i18n.t("portraitAlt", {ns: "common"})} />
        </div>

        {/* about me details */}
        <div className="flex-center flex-col gap-5 font-semibold">
          <div>
            <div className="text-md mb-1">
              {t("greeting")}
            </div>

            <div className="text-4xl mb-2 sm:text-5xl">
              {i18n.t("fullname", {ns: "common"})}
            </div>
          </div>

          <div className="text-xl text-gray-700 sm:text-3xl">
            {t("occupation")}
          </div>

          {/* button group */}
          <div className="flex-center gap-5">
            <Link to="/resume">
              <button className={`btn btn-outlined ${adjustedBtnWidth}`}>
                {t("btn1")}
              </button>
            </Link>
            
            <Link to="/#contacts">
              <button className={`btn btn-filled ${adjustedBtnWidth}`}>
                {t("btn2")}
              </button>
            </Link>
          </div>

          {/* socials */}
          <div className="flex-center gap-3">
            <Tooltip title={i18n.t("contacts.github", {ns: "common"})} placement="bottom">
              <a href="https://github.com/jwu02" target="_blank" rel="noreferrer">
                <IoLogoGithub className="icon-btn" />
              </a>
            </Tooltip>

            <Tooltip title={i18n.t("contacts.linkedin", {ns: "common"})} placement="bottom">
              <a href="https://www.linkedin.com/in/jwu31" target="_blank" rel="noreferrer">
                <IoLogoLinkedin className="icon-btn hover:text-[var(--linkedin-blue)] !hover:opacity-100" />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing