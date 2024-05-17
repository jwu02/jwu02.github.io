import Portrait from "./Portrait";
import Languages from "./Languages";
import Skills from "./Skills";
import Achievements from "./Achievements";

import Header from "./Header";
import Education from "./Education";
import Projects from  "./Projects";
import SelfEvaluation from "./SelfEvaluation";
import Hobbies from "./Hobbies";

import { useTranslation } from "react-i18next";
import WorkExperience from "./WorkExperience";

const Resume = () => {
  const { t, i18n: {language} } = useTranslation('resume');

  const adjustBtnWidth = (language) => language == "cn" ? "w-24" : "";
  const leftBottomContainer = "flex flex-col gap-2 px-4 py-3";

  return (
    <div className="
        bp-responsive-container flex flex-col gap-6 
        lg:justify-center lg:align-middle">
      {/* controls container */}
      <div className="flex-center mt-28 text-sm print:hidden">
        <button className={`btn btn-filled ${adjustBtnWidth(language)}`}
          onClick={() => {window.print()}}>
          {t("controls.downloadResumeBtn")}
        </button>
      </div>

      {/* resume container */}
      <div className={`
          flex w-a4 h-a4 shadow-2xl print:shadow-none text-xxs 
          md:self-center`}>
        {/* left container */}
        <div 
          id="left-container" 
          className={`${leftBottomContainer} w-1/3 bg-[var(--theme-color-1)] text-white`}
        >
          <Portrait />
          <Languages />
          <Skills />
          <Achievements />
          <Hobbies />
        </div>

        {/* right container */}
        <div className="flex flex-col w-2/3 bg-white">
          {/* top container */}
          <Header />

          {/* bottom container */}
          <div id="right-bottom-container" className={leftBottomContainer}>
            <Education />
            <WorkExperience />
            <Projects />
            {/* <SelfEvaluation /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume