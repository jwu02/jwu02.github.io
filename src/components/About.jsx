import { IoRibbon, IoSchool } from "react-icons/io5"
import { Link } from "react-router-dom"
import { aboutPfp, newspaper } from "../assets"
import { educations } from "../data"
import { Button, Modal } from "antd"
import { useState } from "react"

const pageText = {
  title: {"en": "About Me", "cn": "个人情况"},
  picAlt: {
    "en": "Picture of me at Huangguoshu waterfall",
    "cn": "我在黄果树瀑布的照片"
  },
  background: {
    p1: {
      "en": "Originally came from Guangdong China, I migrated over to the UK when I was in grade 2, where I grew up and received my education. Having graduated from university recently, I decided to come back to China for a few years, in hopes of getting a taste of the culture and lifestyle over here. In the mean time, I hope to work in the tech industry, where I can continue to hone my skills and apply my knowledge.",
      "cn": "原本来自中国广东，我小学二年级时移民到英国，在那里长大并接受教育。最近大学毕业后，我决定回中国工作几年，希望能体验一下这里的文化和生活。与此同时，我希望能在科技行业工作，继续磨练自己的技能和运用自己的知识。"
    }
  },
  subcontainers: {
    achievement: {
      title: {"en": "Peakest Moment", "cn": "人生巅峰"},
      period: "2013 - 2017",
      details: {
        "en": "Awarded for being chronically online and made it to the local newspaper.", 
        "cn": "因成为一个网瘾少年而获奖，并上了当地报纸。"
      }
    },
    education: {
      title: {"en": "Education", "cn": "教育背景"},
      period: "2020.09 - 2023.07",
      details: {
        "en": "BSc Computer Science @ University of Sheffield", 
        "cn": "计算机科学（本科） @ 谢菲尔德大学"
      }
    }
  },
  viewDetailsBtn: {"en": "View Details", "cn": "详细信息"}
}

export function About({ displayLanguage }) {
  const [openModal, setOpenModal] = useState(false)
  const commonIconStyles = "w-6 h-6"

  return (
    <section id="about" 
        className="bp-responsive-container flex flex-col gap-3 lg:h-[90vh]">
      <h1>{pageText.title[displayLanguage]}</h1>
      
      <div className="flex-center flex-col lg:flex-row flex-grow gap-5 lg:gap-10">
        <div className="max-w-56 sm:max-w-80">
          <img className="rounded-4xl" src={aboutPfp} alt={pageText.picAlt[displayLanguage]} />
        </div>
        
        <div className="flex flex-col gap-4">
          {/* personal background */}
          <div className="flex flex-col gap-2 text-justify sm:text-start">
            <p>{pageText.background.p1[displayLanguage]}</p>
          </div>

          {/* subcontainers */}
          <div className="flex-center flex-col gap-5 sm:flex-row">
            {/* brief achievement details container */}
            <AboutSubContainer 
              displayLanguage={displayLanguage} 
              containerText={pageText.subcontainers.achievement} 
              icon={<IoRibbon className={commonIconStyles} />} 
              footerControls={
                <>
                  <Button onClick={() => setOpenModal(true)}>
                    {pageText.viewDetailsBtn[displayLanguage]}
                  </Button>

                  <NewspaperModal 
                    openModal={openModal} 
                    setOpenModal={setOpenModal} 
                    displayLanguage={displayLanguage} />
                </>
              }
            />
            
            {/* brief education details container */}
            <AboutSubContainer 
              displayLanguage={displayLanguage} 
              containerText={pageText.subcontainers.education} 
              icon={<IoSchool className={commonIconStyles} />}
              footerControls={
                <Button>
                  <Link to="/educations">
                    {pageText.viewDetailsBtn[displayLanguage]}
                  </Link>
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const AboutSubContainer = ({ displayLanguage, containerText, icon, footerControls }) => {
  return (
    <div className="w-full h-full border-2 rounded-4xl p-5 flex flex-col gap-2">
      {/* card header */}
      <div className="flex-center flex-col">
        {icon}
        <h1 className="text-xl font-semibold">{containerText.title[displayLanguage]}</h1>
      </div>

      {/* card body */}
      <div className="flex-grow">
        <div>{containerText.period}</div>
        <div>{containerText.details[displayLanguage]}</div>
      </div>

      {/* card footer */}
      <div className="flex justify-end">
        {footerControls}
      </div>
    </div>
  )
}

const NewspaperModal = ({openModal, setOpenModal, displayLanguage}) => {
  return (
    <Modal
      title={`${pageText.subcontainers.achievement.title[displayLanguage]}`}
      centered
      open={openModal}
      onOk={() => {setOpenModal(false)}}
      okButtonProps={{style: {background: "#1677ff"}}}
      onCancel={() => setOpenModal(false)}
      okText="Open in New Window"
      cancelText="Close"
      width={1000}
      footer={null}
    >
      <div>
        <img src={newspaper} alt="Said moment" />
      </div>
    </Modal>
  )
}