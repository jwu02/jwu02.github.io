import { IoPerson } from "react-icons/io5"
import { useTranslation } from "react-i18next";
import SubSectionTitle from "./SubSectionTitle";

const SelfEvaluation = () => {
  const { t } = useTranslation('resume', { keyPrefix: 'selfEvaluations' });

  return (
    <section>
      <SubSectionTitle 
        title={t("title")} 
        icon={IoPerson} 
      />

      <ul className="list-disc ml-4">
        {
          t("data", {returnObjects: true})
            .map((evaluation, i) => (
              <li key={i}>{evaluation}</li>
            ))
        }
      </ul>
    </section>
  )
}

export default SelfEvaluation