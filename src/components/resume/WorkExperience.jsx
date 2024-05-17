import { useTranslation } from "react-i18next";
import SubSectionTitle from "./SubSectionTitle"
import { MdWork } from "react-icons/md";

const WorkExperience = () => {
  const { t } = useTranslation('resume', { keyPrefix: 'workExperience' });

  return (
    <section>
      <SubSectionTitle 
        title={t("title")} 
        icon={MdWork} 
      />
      
      <div className="flex gap-1 justify-around">
        {
          t("data", {returnObjects: true})
            .map((workExp, i) => (
              <div key={i}>
                <div className="flex ml-9 gap-5 items-center">
                  <div>{workExp.startDate} - {workExp.endDate}</div>
                  <div>
                    <div className="font-semibold">{workExp.role}</div>
                    <div>
                      {workExp.company},&nbsp;
                      <span className="italic">{workExp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="list-disc ml-3">
                  {
                    workExp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
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

export default WorkExperience