import { styles } from '../../styles'
import { achievements } from '../../data'
import { IoRibbon } from 'react-icons/io5'

export function Achievements({displayLanguage}) {
  const pageText = {
    title: {"en": "Achievements", "cn": "校外荣誉"}
  }

  return (
    <section>
      <h2 className="resume-section-title justify-end">
        <span>{pageText.title[displayLanguage]}</span>
        <IoRibbon className={`${styles.resumeTitleIcon}`} />
      </h2>

      <div className="flex flex-col gap-1">
        {
          achievements.map((achievement, index) => (
            <div key={index}>{achievement.year} - {achievement[displayLanguage]}</div>
          ))
        }
      </div>
    </section>
  )
}