import { IoRibbon, IoSchool } from "react-icons/io5";
import { Link } from "react-router-dom";
import { aboutPfp, newspaper } from "../assets";
import { Button, Modal } from "antd";
import { useState } from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'about' });

  const [openModal, setOpenModal] = useState(false);

  return (
    <section id="about" 
        className="bp-responsive-container flex flex-col gap-3 lg:h-[90vh]">
      <h1>{t("title")}</h1>
      
      <div className="flex-center flex-col lg:flex-row flex-grow gap-5 lg:gap-10">
        <div className="max-w-56 sm:max-w-80">
          <img className="rounded-4xl" src={aboutPfp} alt={t("picAlt")} />
        </div>
        
        <div className="flex flex-col gap-4">
          {/* personal background */}
          <div className="flex flex-col gap-2 text-justify sm:text-start">
            <p>{i18n.t("header.selfEvaluation", {ns: "resume"})}</p>
          </div>

          {/* subcontainers */}
          <div className="flex-center flex-col gap-5 sm:flex-row">
            {/* brief achievement details container */}
            <AboutSubContainer 
              icon={IoRibbon} 
              title={t("achievement.title")}
              cardBody={
                <>
                  <div>{t("achievement.period")}</div>
                  <div>{t("achievement.details")}</div>
                </>
              } 
              cardFooter={
                <>
                  <Button onClick={() => setOpenModal(true)}>
                    {t("viewDetailsBtn")}
                  </Button>

                  <NewspaperModal 
                    title={t("achievement.title")}
                    openModal={openModal} 
                    setOpenModal={setOpenModal} 
                  />
                </>
              }
            />
            
            {/* brief education details container */}
            <AboutSubContainer 
              icon={IoSchool}
              title={i18n.t("title", { ns: "education" })}
              cardBody={
                <>
                  {
                    i18n.t("data", { ns: "education", returnObjects: true })
                      .filter(education => education.id !== 'tsla' && education.id !== 'jlc')
                      .map((education, i) => (
                        <div key={i}>
                          <div>{education.startDate} - {education.endDate}</div>
                          <div>{education.degreeTitle} @ {education.institution}</div>
                        </div>
                      ))
                  }
                </>
              } 
              cardFooter={
                <Button>
                  <Link to="/educations">{t("viewDetailsBtn")}</Link>
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

const AboutSubContainer = ({ icon: Icon, title, cardBody, cardFooter }) => {
  return (
    <div className="w-full h-full border-2 rounded-4xl p-5 flex flex-col gap-2">
      {/* card header */}
      <div className="flex-center flex-col">
        <Icon className="w-6 h-6" />
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>

      {/* card body */}
      <div className="flex-grow">
        {cardBody}
      </div>

      {/* card footer */}
      <div className="flex justify-end">
        {cardFooter}
      </div>
    </div>
  )
}

const NewspaperModal = ({ title, openModal, setOpenModal }) => {
  return (
    <Modal
      title={title}
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