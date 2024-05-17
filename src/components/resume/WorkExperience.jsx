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
    </section>
  )
}

export default WorkExperience