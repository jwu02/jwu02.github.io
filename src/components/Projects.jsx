import { Timeline, Tooltip } from "antd"
import { projects } from "../data"
import { AiFillCheckCircle, AiFillClockCircle } from "react-icons/ai"
import { FaLink } from "react-icons/fa"

const pageText = {
  title: {"en": "Projects", "cn": "项目经验"}
}

export function Projects({displayLanguage}) {
  const iconCommonStyles = "cursor-pointer w-5 h-5"

  const inProgressDot = (
    <Tooltip placement="top" title="In Progress">
      <AiFillClockCircle className={iconCommonStyles} />
    </Tooltip>
  )

  const completedDot = (
    <Tooltip placement="top" title="Completed">
      <AiFillCheckCircle className={iconCommonStyles} />
    </Tooltip>
  )

  const projectItems = projects.map((project) => {
    return {
      color: project.inProgress ? "gold" : "green",
      dot: project.inProgress ? inProgressDot : completedDot,
      children: <ProjectItemChild 
        displayLanguage={displayLanguage} 
        project={project} />
    }
  })

  return (
    <section id="projects" className="bp-responsive-container">
      <h1>{pageText.title[displayLanguage]}</h1>

      <Timeline
        reverse={true}
        items={projectItems}
        className="sm:max-w-lg mx-auto my-8"
      />
    </section>
  )
}

const ProjectItemChild = ({displayLanguage, project}) => {
  return (
    <div>
      <div className="text-base font-semibold flex items-center gap-2 flex-nowrap">
        <span>{project.name[displayLanguage]}</span>
        <span className="flex gap-2">
          {
            project.links.map((link, i) => (
              <a key={i} href={link} target="_blank" rel="noreferrer">
                <FaLink className="icon" />
              </a>
            ))
          }
        </span>
      </div>
      <div>{project.description[displayLanguage]}</div>
    </div>
  )
}