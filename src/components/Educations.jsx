import { useEffect, useState } from "react";
import { Checkbox, Card, Tabs } from "antd";
import { IoStar, IoLogoGithub } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { educationLogos } from "../data";

const Educations = () => {
  const { t } = useTranslation('education');

  const [tabPosition, setTabPosition] = useState("left");
  const [showAllModules, setShowAllModules] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // Set the initial value of the `tabPosition` state variable
    setTabPosition(mediaQuery.matches ? "top" : "left");
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      // if width < 500 display tab on top
      setTabPosition(event.matches ? "top" : "left");
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
  }, []);
  
  return (
    <section className="bp-responsive-container">
      {/* controls container */}
      <div className="flex justify-center pt-28 mb-3">
        <Checkbox className="text-base"
            onChange={(e) => {setShowAllModules(e.target.checked)}} 
            checked={showAllModules}>
          {t("controls.showAllModulesCb")}
        </Checkbox>
      </div>

      {/* all educations container */}
      <div className="flex flex-col gap-5">
        {
          t("data", {returnObjects: true}).map((education, i) => (
            <EducationItemDetails key={i} 
              tabPosition={tabPosition} 
              showAllModules={showAllModules} 
              education={education} />
          ))
        }
      </div>
    </section>
  )
}

export default Educations

const EducationItemDetails = ({ tabPosition, showAllModules, education }) => {
  return (
    <div className="flex flex-col gap-5">
      {/* education details - institution, period */}
      <div className="flex gap-5 items-center">
        <div className="max-w-20">
          <img src={educationLogos[education.id]} alt={`${education.institution} Logo`} />
        </div>
        <div className="flex flex-col gap-1">
          <div>{education.startDate} - {education.endDate}</div>
          <div className="text-3xl font-bold">{education.degreeTitle}</div>
          <div className="text-lg font-semibold">{education.institution}</div>
        </div>
      </div>
      
      <AllYearModulesTab 
        tabPosition={tabPosition} 
        showAllModules={showAllModules} 
        education={education} />
    </div>
  )
}

const AllYearModulesTab = ({ tabPosition, showAllModules, education}) => {
  const { t } = useTranslation('education');
  
  return (
    // container for all modules studied at a institution for each year
    <Tabs
      tabPosition={tabPosition}
      items={education.modulesStudied.map((yearModules, i) => {
        const id = i + 1;
        const yearModulesComponent = (
          <YearModulesGrid 
            showAllModules={showAllModules} 
            yearModules={yearModules}/>
        )

        return {
          label: t("tabTitle", {year: id}),
          key: id,
          children: yearModulesComponent,
        };
      })}
    />
  )
}

const YearModulesGrid = ({ showAllModules, yearModules }) => {
  return (
    // all modules studied for an academic year at an institution
    <div className="grid grid-cols-modulesAutoGrid gap-6">
      {
        yearModules.map((module, i) => (
          <ModuleCard 
            key={i} 
            showAllModules={showAllModules}
            module={module} />
        ))
      }
    </div>
  )
}

const ModuleCard = ({ showAllModules, module }) => {
  let starIcon = (<div><IoStar className="text-yellow-400 w-5 h-5" /></div>)

  let cardTitle = (
    <div 
      className="flex-center justify-between gap-3"
      style={{whiteSpace: "normal"}}>
      <div>
        <div className="text-xs font-semibold">{module.code.toUpperCase()}</div>
        <div className="font-semibold">{module.name}</div>
      </div>
      {/* display star icon if module starred */}
      {module.starred && starIcon}
    </div>
  )

  let cardBody = (
    <div className="flex flex-col gap-1 justify-between h-full">
      <div>{module.description}</div>

      {/* publicised work links */}
      <div className="flex-center gap-1">
        {
          module.links.map((link, i) => (
            <a key={i} href={link} target="_blank" rel="noreferrer">
              <IoLogoGithub className="icon-btn" />
            </a>
          ))
        }
      </div>
    </div>
  )

  return (
    <Card
      className={`${!module.starred && !showAllModules ? "hidden" : ""}`}
      title={cardTitle}
      bordered={false}>
      {cardBody}
    </Card>
  )
}
