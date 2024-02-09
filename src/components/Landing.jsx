import { resumePfp } from "../assets"
import { styles } from "../styles"
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5"

export function Landing({ displayLanguage }) {
  const commonBtnStyles = `text-sm border-solid border-2 rounded-full border-gray-800 py-3 px-2 ${displayLanguage == "cn" ? "w-24" : "w-32" }`
  const siteText = {
    greeting: {"en": "Hello, I am", "cn": "你好，我是"},
    fullName: {"en": "Tony Wu", "cn": "吴家聪"},
    occupation: {"en": "Computer Science Graduate", "cn": "计算机科学应届生"},
    btn1: {"en": "View Resume", "cn": "查看简历"},
    btn2: {"en": "Contact Me", "cn": "联系我吧"},
  }

  return (
    // section container
    <div className={`
      ${styles.fixedResponsiveContainerWidths} 
      ${styles.flexCentering} 
      h-screen
    `}>
      {/* details container */}
      <div className={`${styles.flexCentering} flex-col text-center gap-8 sm:flex-row md:gap-20`}>
        <div className="max-w-56 sm:max-w-80">
          <img className="clip-path-circle" src={resumePfp} alt="Picture of me" />
        </div>

        <div className={`${styles.flexCentering} flex-col gap-5 font-semibold`}>
          <div>
            <div className="text-md mb-1">{siteText.greeting[displayLanguage]}</div>
            <div className="text-4xl mb-2 sm:text-5xl">{siteText.fullName[displayLanguage]}</div>
          </div>
          <div className="text-xl text-gray-700 sm:text-3xl">
            {siteText.occupation[displayLanguage]}
          </div>

          <div className={`${styles.flexCentering} gap-5`}>
            <button 
              className={`${commonBtnStyles}`} 
              onClick={(e)=>{
                e.preventDefault();
                window.location.href='resume.html';
              }}>{siteText.btn1[displayLanguage]}</button>
            <button 
              className={`${commonBtnStyles} bg-gray-800 text-white`} 
              onClick={(e)=>{
                e.preventDefault();
                window.location.href='./#contacts';
              }}>{siteText.btn2[displayLanguage]}</button>
          </div>

          <div className={`${styles.flexCentering} gap-3`}>
            {/* <IoLogoLinkedin className={`${styles.iconBtn} ${styles.link}`} href="https://linkedin.com/" target="_blank" /> */}
            <IoLogoGithub className={`${styles.iconBtn} ${styles.link}`} href="https://github.com/jwu02" target="_blank" />
          </div>
        </div>
      </div>
    </div>
  )
}