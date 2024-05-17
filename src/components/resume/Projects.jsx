import { IoLayers } from "react-icons/io5";
import SubSectionTitle from "./SubSectionTitle";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Projects = () => {
  const { t } = useTranslation('resume', { keyPrefix: 'projects' });

  // displayed if project has links to work
  const asterisk = (<span className="text-red-500">*</span>);
  // displayed if project is in progress
  const inProgressTag = (
    <span className="rounded-full text-[.85em] bg-[var(--theme-color-1)] text-white px-[0.3rem] py-[0.1rem]">
      {i18n.t("inProgress", {ns: "common"})}
    </span>
  );

  return (
    <section>
      <SubSectionTitle 
        title={t("title")} 
        icon={IoLayers} 
      />

      <div className="flex flex-col gap-1">
        <p>{asterisk} {t("note")}</p>
        {
          t("data", {returnObjects: true})
            .map((project, i) => (
              <div key={i}>
                <div>
                  <span className="font-semibold">{project.name}</span>
                  {project.links.length != 0 && <>{asterisk}</>}
                </div>
                <ul className="list-disc ml-3">
                  {
                    project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))
                  }
                </ul>
              </div>
            ))
        }
      </div>
    </section>
  )
}

export default Projects