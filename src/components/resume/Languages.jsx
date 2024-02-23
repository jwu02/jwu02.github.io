import { IoLanguage } from 'react-icons/io5'
import { styles } from '../../styles'
import { languages } from '../../data'

export function Languages({displayLanguage}) {
  const pageText = {
    title: {"en": "Languages", "cn": "语言能力"}
  }

  return (
    <section>
      <h2 className="resume-section-title justify-end">
        <span>{pageText.title[displayLanguage]}</span>
        <IoLanguage className={`${styles.resumeTitleIcon}`} />
      </h2>

      {/* languages proficiency container */}
      <div className="flex flex-col gap-2">
        {
          languages.map((language, index) => (
            <SkillProgressBar displayLanguage={displayLanguage} language={language} key={index} />
          ))
        }
      </div>
    </section>
  )
}

function SkillProgressBar({ displayLanguage, language }) {
  return (
    <div className="flex flex-col gap-[0.1rem]">
      {/* language label */}
      <div className="flex gap-2 items-center">
        <span className="text-[1.1em] font-semibold">{language.name[displayLanguage]}</span>
        <span className="text-[.95em] text-[var(--theme-color-1)] rounded-full px-[.5em] bg-[#8ecae6]">{language.proficiency[displayLanguage]}</span>
      </div>

      {/* progress bar */}
      <div className="h-[.45rem] w-full rounded-md bg-white/25">
        <div className="h-full rounded-md animate-skillProgressBar bg-[#8ecae6]"
          style={{width: `${language.proficiency.quantification}%`}}
        ></div>
      </div>
    </div>
  )
}