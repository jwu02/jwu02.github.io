import { useTranslation } from 'react-i18next';
import { resumePfp } from '../../assets'

const Portrait = () => {
  const { t } = useTranslation('common');

  return (
    <section className="px-6 py-2">
      <img className="clip-path-circle" src={resumePfp} alt={t("portraitAlt")} />
    </section>
  )
}

export default Portrait