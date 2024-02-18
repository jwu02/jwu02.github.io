import { useEffect, useState } from "react"
import { Checkbox, Card, Tabs } from "antd"
import { educations } from "../data"
import { IoStar, IoLogoGithub } from "react-icons/io5"

const pageText = {
  showAllModulesCb: {"en": "Show All Modules", "cn": "显示所有课程"},
  years: {
    1: {"en": "1st Year", "cn": "第一年"},
    2: {"en": "2nd Year", "cn": "第二年"},
    3: {"en": "3rd Year", "cn": "第三年"},
    4: {"en": "4th Year", "cn": "第四年"},
    5: {"en": "5th Year", "cn": "第五年"},
  }
}

export function Educations({displayLanguage}) {
  const [tabPosition, setTabPosition] = useState("left")
  const [showAllModules, setShowAllModules] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)")
    // Set the initial value of the `tabPosition` state variable
    setTabPosition(mediaQuery.matches ? "top" : "left")
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      // if width < 500 display tab on top
      setTabPosition(event.matches ? "top" : "left")
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange)
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])
  
  return (
    <section className="bp-responsive-container">
      {/* controls container */}
      <div className="flex justify-center pt-28 mb-3">
        <Checkbox className="text-base"
            onChange={(e)=>{setShowAllModules(e.target.checked)}} 
            checked={showAllModules}>
          {pageText.showAllModulesCb[displayLanguage]}
        </Checkbox>
      </div>

      {/* all educations container */}
      <div className="flex flex-col gap-5">
        {
          educations.map((education, index) => (
            <EducationItemDetails key={index} 
              displayLanguage={displayLanguage} 
              tabPosition={tabPosition} 
              showAllModules={showAllModules} 
              education={education} />
          ))
        }
      </div>
    </section>
  )
}

function EducationItemDetails({displayLanguage, tabPosition, showAllModules, education}) {
  return (
    <div className="flex flex-col gap-5">
      {/* education details - institution, period */}
      <div className="flex gap-5 items-center">
        <div className="max-w-20"><img src={education.logo} alt="" /></div>
        <div className="flex flex-col gap-1">
          <div>{education.startDate} - {education.endDate}</div>
          <div className="text-3xl font-bold">{education.degreeTitle[displayLanguage]}</div>
          <div className="text-lg font-semibold">{education.institution[displayLanguage]}</div>
        </div>
      </div>
      
      <AllYearModulesTab 
        displayLanguage={displayLanguage} 
        tabPosition={tabPosition} 
        showAllModules={showAllModules} 
        education={education} />
    </div>
  )
}

function AllYearModulesTab({displayLanguage, tabPosition, showAllModules, education}) {
  return (
    // container for all modules studied at a institution for each year
    <Tabs
      tabPosition={tabPosition}
      items={education.modulesStudied.map((yearModules, i) => {
        const id = i + 1;
        const yearModulesComponent = (
          <YearModulesGrid 
            displayLanguage={displayLanguage} 
            showAllModules={showAllModules} 
            yearModules={yearModules}/>
        )

        return {
          label: `${pageText.years[id][displayLanguage]}`,
          key: id,
          children: yearModulesComponent,
        };
      })}
    />
  )
}

function YearModulesGrid({displayLanguage, showAllModules, yearModules}) {
  return (
    // all modules studied for an academic year at an institution
    <div className="grid grid-cols-modulesAutoGrid gap-6">
      {
        yearModules.map((module, index) => (
          <ModuleCard 
            key={index} 
            displayLanguage={displayLanguage} 
            showAllModules={showAllModules}
            module={module} />
        ))
      }
    </div>
  )
}

function ModuleCard({displayLanguage, showAllModules, module}) {
  let starIcon = (<div><IoStar className="text-yellow-400 w-5 h-5" /></div>)

  let cardTitle = (
    <div 
      className="flex-center justify-between gap-3"
      style={{whiteSpace: "normal"}}>
      <div>
        <div className="text-xs font-semibold">{module.code.toUpperCase()}</div>
        <div className="font-semibold">{module.name[displayLanguage]}</div>
      </div>
      {module.starred ? starIcon : <></>}
    </div>
  )

  let cardBody = (
    <div className="flex flex-col gap-1 justify-between h-full">
      <div>{module.description[displayLanguage]}</div>

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
