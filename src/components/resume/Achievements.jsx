import { IoRibbon } from 'react-icons/io5';
import SubSectionTitle from './SubSectionTitle';
import { useTranslation } from 'react-i18next';

const Achievements = () => {
  const { t } = useTranslation('resume', { keyPrefix: 'achievements' });

  return (
    <section>
      <SubSectionTitle
        title={t("title")}
        icon={IoRibbon}
      />

      {/* <div className="flex flex-col gap-1"> */}
      <ul className="list-disc ml-3">
        {
          t("data", {returnObjects: true}).map((achievement, i) => (
            <li key={i}>{achievement.details}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default Achievements