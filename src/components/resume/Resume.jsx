import { styles } from "../../styles";
import { Portrait } from "./Portrait";
import { Languages } from "./Languages";
import { Skills } from "./Skills";
import { Achievements } from "./Achievements";
import { Header } from "./Header";
import { Education } from "./Education";
import { Projects } from  "./Projects";
import { SelfEvaluation } from "./SelfEvaluation";
import { Hobbies } from "./Hobbies";

export function Resume({displayLanguage}) {
  const pageText = {
    downloadResumeBtn: {"en": "Download CV", "cn": "下载简历"},
  }
  const leftBottomContainer = "flex flex-col gap-2 px-4 py-3"

  return (
    <div className="
        bp-responsive-container flex flex-col gap-6 
        lg:justify-center lg:align-middle">
      {/* controls container */}
      <div className="flex-center mt-28 text-sm print:hidden">
        <button className={`btn btn-filled ${styles.adjustBtnWidth(displayLanguage)}`}
          onClick={() => {window.print()}}>
          {pageText.downloadResumeBtn[displayLanguage]}
        </button>
      </div>

      {/* resume container */}
      <div className={`flex w-a4 h-a4 shadow-2xl ${displayLanguage === "cn" ? "text-[.77rem]" : "text-2xs"} md:self-center`}>
        {/* left container */}
        <div className={`${leftBottomContainer} w-1/3 bg-[var(--theme-color-1)] text-white`}>
          <Portrait displayLanguage={displayLanguage} />
          <Languages displayLanguage={displayLanguage} />
          <Skills displayLanguage={displayLanguage} />
          <Achievements displayLanguage={displayLanguage} />
        </div>

        {/* right container */}
        <div className="flex flex-col w-2/3 bg-white">
          {/* top container */}
          <Header displayLanguage={displayLanguage} />

          {/* bottom container */}
          <div className={leftBottomContainer}>
            <Education displayLanguage={displayLanguage} />
            <Projects displayLanguage={displayLanguage} />
            <SelfEvaluation displayLanguage={displayLanguage} />
            <Hobbies displayLanguage={displayLanguage} />
          </div>
        </div>
      </div>
    </div>
  )
}