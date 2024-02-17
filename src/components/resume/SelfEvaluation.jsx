import { styles } from "../../styles"
import { IoPerson } from "react-icons/io5"
import { selfEvaluations } from "../../data"

export function SelfEvaluation({displayLanguage}) {
  const pageText = {
    title: {"en": "Self Evaluation", "cn": "自我评价"}
  }

  return (
    <section>
      <h2 className="resume-section-title">
        <IoPerson className={`${styles.resumeTitleIcon}`} />
        <span className={styles.sectionTitleDivider}>{pageText.title[displayLanguage]}</span>
      </h2>

      <ul className="list-disc ml-4">
        {
          selfEvaluations.map((evaluation, index) => (
            <li key={index}>{evaluation[displayLanguage]}</li>
          ))
        }
      </ul>
    </section>
  )
  }