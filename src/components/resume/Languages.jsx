import { IoLanguage } from 'react-icons/io5';
import SubSectionTitle from './SubSectionTitle';
import { useTranslation } from 'react-i18next';
import { languages } from '../../data';

const Languages = () => {
  const { t } = useTranslation('resume', { keyPrefix: 'languages' });

  return (
    <section>
      <SubSectionTitle title={t("title")} icon={IoLanguage} />

      {/* languages proficiency container */}
      <div className="flex flex-col gap-2">
        {
          languages.map((language, i) => (
            <SkillProgressBar key={i} language={language} />
          ))
        }
      </div>
    </section>
  )
}

export default Languages

function SkillProgressBar({ language }) {
  const { t } = useTranslation('resume', { keyPrefix: 'languages' });
  
  return (
    <div className="flex flex-col gap-[0.2rem]">
      {/* language label */}
      <div className="flex gap-2 items-center">
        <span className="font-semibold">{t(`data.${language.name}`)}</span>
        <span className="text-[.90em] text-[var(--theme-color-1)] rounded-full px-[.5em] bg-[#8ecae6]">
          {t(`levels.${language.proficiency.text}`)}
        </span>
      </div>

      {/* progress bar */}
      <div className="h-[.45rem] w-full rounded-md bg-white/25">
        <div className="h-full rounded-md animate-skillProgressBar bg-[#8ecae6]"
          style={{width: `${language.proficiency.quantification}%`}}
        ></div>
      </div>
    </div>
  )
}