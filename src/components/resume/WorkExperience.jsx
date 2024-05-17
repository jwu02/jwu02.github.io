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
                <div>
                  <div className="font-semibold text-sm">
                    {workExp.role}
                  </div>
                  <div>
                    <span className="font-semibold">{workExp.company}</span>, {workExp.location}
                  </div>
                  <div>{workExp.startDate} - {workExp.endDate}</div>
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