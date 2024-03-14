import { useTranslation } from "react-i18next";

const Hobbies = () => {
  const { t, i18n: {language} } = useTranslation('resume', { keyPrefix: 'hobbies' });

  return (
    <section className="my-auto p-2">
      <div className="font-medium">
        {t("title")}{language==="en" ? ": " : "："}
        {t("data", {returnObjects: true}).join(language==="en" ? ", " : "，")}
      </div>
    </section>
  )
}

export default Hobbies