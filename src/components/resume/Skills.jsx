import { IoConstruct } from 'react-icons/io5'
import SubSectionTitle from './SubSectionTitle'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation('resume', { keyPrefix: 'skills' });

  return (
    <section>
      <SubSectionTitle
        title={t("title")}
        icon={IoConstruct}
      />

      <ul className="list-disc ml-4">
        {
          t("data", {returnObjects: true}).map((skill, i) => (
            <li key={i}>{skill}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default Skills