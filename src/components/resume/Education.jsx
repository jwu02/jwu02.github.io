import { styles } from "../../styles"
import { educations } from "../../data"
import { IoSchool } from "react-icons/io5"

export function Education({displayLanguage}) {
  const pageText = {
    title: {"en": "Education", "cn": "教育背景"}
  }

  return (
    <section>
      <h2 className="resume-section-title">
        <IoSchool className={styles.resumeTitleIcon} />
        <span className={styles.sectionTitleDivider}>{pageText.title[displayLanguage]}</span>
      </h2>

      <div className="flex flex-col gap-1">
        {
          educations.map((education, index) => (
            <div key={index} className="flex gap-5 ml-9 text-xs">
              {/* education period */}
              <div>{education.startDate} - {education.endDate}</div>
              {/* education details */}
              <div className="flex-grow">
                <div className="flex gap-5">
                  <div className="font-semibold">{education.institution[displayLanguage]}</div>
                  <div className="italic">{education.degreeTitle[displayLanguage]}</div>
                </div>
                <div>{education.degreeClassification[displayLanguage]}</div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}