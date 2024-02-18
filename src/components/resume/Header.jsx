import { IoLogoGithub, IoLogoWechat, IoMail } from "react-icons/io5";
import { Tooltip } from "antd";
import { useEffect, useState } from "react";
import TextTransition from 'react-text-transition'

export function Header({displayLanguage}) {
  const pageText = {
    fullname: {"en": "Tony Wu", "cn": "吴家聪"},
    interest: {
      "en": "Interested In: ", 
      "cn": "求职意向："
    },
    iconTooltip: {
      email: {"en": "Email", "cn": "电子邮件"},
      wechat: {"en": "WeChat", "cn": "微信"},
      github: {"en": "Portfolio Website", "cn": "个人网站"},
    },
  }

  const INTERESTS = [
    {"en": "Software Engineering", "cn": "软件工程"},
    {"en": "Machine Learning", "cn": "机器学习"},
    {"en": "Robotics Engineering", "cn": "机器人工程"},
    {"en": "Embedded Systems", "cn": "嵌入式系统"},
    {"en": "Fullstack Development", "cn": "全栈开发"},
  ]

  // https://www.npmjs.com/package/react-text-transition?activeTab=readme
  const [interestIndex, setInterestIndex] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(
      () => setInterestIndex((interestIndex) => interestIndex + 1),
      3000, // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  const resumeHeaderContact = "flex flex-nowrap gap-1 items-center group"
  const resumeHeaderIcon = "icon w-5 h-5 group-hover:text-[var(--link-hover-color)]"

  return (
    <div className="flex flex-col gap-2 py-5 px-3 bg-slate-300 text-center">
      <div className="text-4xl font-semibold">{pageText.fullname[displayLanguage]}</div>
      <div className="text-base font-semibold">
        {pageText.interest[displayLanguage]} 
        <TextTransition inline={true} translateValue="50%">
          {INTERESTS[interestIndex % INTERESTS.length][displayLanguage]}
        </TextTransition>
      </div>
      
      <div className="text-xs flex justify-around">
        <Tooltip placement="bottom" title={pageText.iconTooltip.email[displayLanguage]}>
          <div className={resumeHeaderContact}>
            <IoMail className={resumeHeaderIcon} />
              <a>jiacongwu31@gmail.com</a>
          </div>
        </Tooltip>

        <Tooltip placement="bottom" title={pageText.iconTooltip.wechat[displayLanguage]}>
          <div className={resumeHeaderContact}>
            <IoLogoWechat className={`${resumeHeaderIcon} group-hover:text-[var(--wechat-green)]`} />
            <a>tonywu02</a>
          </div>
        </Tooltip>
        
        <Tooltip placement="bottom" title={pageText.iconTooltip.github[displayLanguage]}>
          <div className={resumeHeaderContact}>
            <IoLogoGithub className={resumeHeaderIcon} />
            <a href="https://github.com/jwu02" target="_blank" rel="noreferrer">
              jwu02.github.io
            </a>
          </div>
        </Tooltip>
      </div>
    </div>
  )
}