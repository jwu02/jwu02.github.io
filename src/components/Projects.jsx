import { Timeline, Tooltip } from "antd";
import { AiFillCheckCircle, AiFillClockCircle } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Projects = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'projects' });

  const iconCommonStyles = "cursor-pointer w-5 h-5";

  const inProgressDot = (
    <Tooltip placement="top" title={i18n.t("inProgress", {ns: "common"})}>
      <AiFillClockCircle className={iconCommonStyles} />
    </Tooltip>
  );

  const completedDot = (
    <Tooltip placement="top" title={i18n.t("completed", {ns: "common"})}>
      <AiFillCheckCircle className={iconCommonStyles} />
    </Tooltip>
  );

  const projectItems = i18n.t("projects.data", {ns: "resume", returnObjects: true})
    .map((project) => {
      return {
        color: "black",
        children: <ProjectItem project={project} />
      }
    });

  return (
    <section id="projects" className="bp-responsive-container">
      <h1>{t("title")}</h1>

      <Timeline
        // reverse={true}
        items={projectItems}
        className="sm:max-w-lg mx-auto my-8"
      />
    </section>
  )
}

export default Projects

const ProjectItem = ({ project }) => {
  return (
    <div>
      <div className="text-base font-semibold flex items-center gap-2 flex-nowrap">
        <span>{project.name}</span>
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

      <div>
        {project.description.join(" ")}
      </div>
    </div>
  )
}