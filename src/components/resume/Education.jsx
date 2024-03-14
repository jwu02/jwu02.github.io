import { IoSchool } from "react-icons/io5"
import { useTranslation } from "react-i18next";
import SubSectionTitle from "./SubSectionTitle";
import i18n from "../../i18n";

const Education = () => {
  const { t } = useTranslation('resume', { keyPrefix: 'education' });

  return (
    <section>
      <SubSectionTitle 
        title={t("title")}
        icon={IoSchool}
      />

      <div className="flex flex-col gap-1 ml-9">
        {
          i18n.t("data", {ns: "education", returnObjects: true})
            .map((education, i) => (
              <div key={i} className="flex gap-5">
                {/* education period */}
                <div>{education.startDate} - {education.endDate}</div>
                
                {/* education details */}
                <div className="flex-grow">
                  <div className="flex gap-5">
                    <div className="font-semibold">{education.institution}</div>
                    <div className="italic">{education.degreeTitle}</div>
                  </div>

                  <div>{education.degreeClassification}</div>
                </div>
              </div>
            ))
        }
      </div>
    </section>
  )
}

export default Education