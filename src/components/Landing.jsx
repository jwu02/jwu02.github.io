import { resumePfp } from "../assets"
import { styles } from "../styles"
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5"
import { Link } from "react-router-dom"
import { Tooltip } from "antd"

export function Landing({ displayLanguage }) {
  const siteText = {
    greeting: {"en": "Hello, I am", "cn": "你好，我是"},
    fullName: {"en": "Tony Wu", "cn": "吴家聪"},
    occupation: {"en": "Computer Science Graduate", "cn": "计算机科学应届生"},
    btn1: {"en": "View Resume", "cn": "查看简历"},
    btn2: {"en": "Contact Me", "cn": "联系我吧"},
  }

  return (
    // section container
    <section className="bp-responsive-container flex-center h-screen">
      {/* details container */}
      <div className="flex-center flex-col text-center gap-8 sm:flex-row md:gap-20">
        {/* profile image */}
        <div className="max-w-56 md:max-w-80">
          <img className="clip-path-circle" src={resumePfp} alt="Picture of me" />
        </div>

        {/* about me details */}
        <div className="flex-center flex-col gap-5 font-semibold">
          <div>
            <div className="text-md mb-1">{siteText.greeting[displayLanguage]}</div>
            <div className="text-4xl mb-2 sm:text-5xl">{siteText.fullName[displayLanguage]}</div>
          </div>
          <div className="text-xl text-gray-700 sm:text-3xl">
            {siteText.occupation[displayLanguage]}
          </div>

          {/* button group */}
          <div className="flex-center gap-5">
            <Link to="/resume">
              <button className={`btn btn-outlined ${styles.adjustBtnWidth(displayLanguage)}`}>
                {siteText.btn1[displayLanguage]}
              </button>
            </Link>
            
            <button 
              className={`btn btn-filled ${styles.adjustBtnWidth(displayLanguage)}`} 
              onClick={(e)=>{
                e.preventDefault()
                window.location.href='./#contacts'
              }}>{siteText.btn2[displayLanguage]}</button>
          </div>

          {/* socials */}
          <div className="flex-center gap-3">
            {/* <IoLogoLinkedin className="icon-btn" href="https://linkedin.com/" target="_blank" /> */}
            
            <Tooltip title="GitHub" placement="bottom">
              <a href="https://github.com/jwu02" target="_blank" rel="noreferrer">
                <IoLogoGithub className="icon-btn" />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  )
}