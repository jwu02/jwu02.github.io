import { styles } from '../../styles'
import { skills } from '../../data'
import { IoConstruct } from 'react-icons/io5'

export function Skills({displayLanguage}) {
  const pageText = {
    title: {"en": "Technical Skills", "cn": "技能专长"}
  }

  return (
    <section>
      <h2 className="resume-section-title justify-end">
        <span>{pageText.title[displayLanguage]}</span>
        <IoConstruct className={`${styles.resumeTitleIcon}`} />
      </h2>

      <ul className="list-disc ml-4">
        {
          skills.map((skill, index) => (
            <li key={index}>{skill[displayLanguage]}</li>
          ))
        }
      </ul>
    </section>
  )
}