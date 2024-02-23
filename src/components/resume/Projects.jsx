import { styles } from "../../styles"
import { projects } from "../../data"
import { IoLayers } from "react-icons/io5"

export function Projects({displayLanguage}) {
  const pageText = {
    title: {"en": "Projects", "cn": "项目经验"},
    note: {
      "en": "Work is public on my GitHub profile if interested. You can also find more academic and personal projects there.",
      "cn": "如果感兴趣，作品已在我的 GitHub 个人主页上公开。您还可以在那里找到更多校内和个人项目。"
    },
    inProgressTag: {"en": "In Progress", "cn": "进行中"}
  }

  // displayed if project has links to work
  const asterisk = (<span className="text-red-500">*</span>)
  // displayed if project is in progress
  const inProgressTag = (
    <span className="rounded-full text-[.85em] bg-[var(--theme-color-1)] text-white px-[0.2rem]">
      {pageText.inProgressTag[displayLanguage]}
    </span>
  )

  return (
    <section>
      <h2 className="resume-section-title">
        <IoLayers className={styles.resumeTitleIcon} />
        <span className={styles.sectionTitleDivider}>{pageText.title[displayLanguage]}</span>
      </h2>

      <div className="flex flex-col gap-1">
        <p>{asterisk} {pageText.note[displayLanguage]}</p>
        {
          projects.map((project, index) => (
            <div key={index}>
              <span className="font-semibold">{project.name[displayLanguage]}</span>
              {project.links.length != 0 ? <>{asterisk}&nbsp;</> : <></>}
              {project.inProgress ? <>{inProgressTag}&nbsp;</> : <></>}
              - {project.description[displayLanguage]}
            </div>
          ))
        }
      </div>
    </section>
  )
}