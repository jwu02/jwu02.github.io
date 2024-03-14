import { useTranslation } from "react-i18next";
import { programmingLanguages, technologies } from "../data";
import { Tooltip } from "antd";

const Skills = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'skills' });

  return (
    <section id="skills" className="bg-[#13222C] text-white my-16 p-10">
      <div className="bp-responsive-container px-0 lg:px-12 flex flex-col gap-3 lg:h-[90vh]">
        <h1 className="text-end">{t("title")}</h1>

        <div className="flex flex-col lg:flex-row gap-5 justify-center">
          {/* programming languages container */}
          <div className="flex flex-col w-full lg:w-1/2 lg:p-10 items-center">
            {
              programmingLanguages.map((pLanguage, index) => (
                <SkillProgressBar key={index} pLanguage={pLanguage} />
              ))
            }
          </div>

          {/* technologies / frameworks */}
          <div className="lg:p-16 flex-center flex-col">
            {/* <div className="text-2xl font-semibold text-center mb-3">
              Tools
            </div> */}

            <div className="grid grid-cols-3 gap-2 w-max">
              {
                technologies.map((technology, index) => (
                  <TechnologyInventoryIcon key={index} technology={technology} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

const SkillProgressBar = ({ pLanguage }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'skills' });

  return (
    <div className="
        flex-center gap-3 w-full max-w-md p-3 border-2 
        border-transparent hover:border-white hover:cursor-pointer 
        group hover:text-glow hover:border-glow">
      <div>
        {<pLanguage.icon className="w-8 h-8 group-hover:text-glow" />}
      </div>

      <div className="flex flex-col gap-1 flex-grow">
        {/* language label */}
        <div className="flex gap-2 items-center">
          <span className="text-lg font-semibold">{pLanguage.name}</span>
          <span className="text-xs rounded-full px-[.3rem] py-[.1rem] bg-white text-[#13222C]">
            {t(`levels.${pLanguage.proficiency.text}`)}
          </span>
        </div>

        {/* progress bar */}
        <div className="h-4 w-full flex items-center px-1 
            rounded-full border-2 border-white group-hover:border-glow">
          <div className="h-[.18rem] rounded-full bg-white group-hover:border-glow-outside 
              animate-skillProgressBar"
            style={{width: `${pLanguage.proficiency.quantification}%`}}>
          </div>
        </div>
      </div>
    </div>
  )
}

const TechnologyInventoryIcon = ({technology}) => {
  return (
    <Tooltip placement="bottom" title={technology.name}>
      <div className="flex-center border-2 border-white p-3 rounded-br-4xl hover:cursor-pointer">
        <technology.icon className="w-12 h-12 hover:text-glow" />
      </div>
    </Tooltip>
  )
}
