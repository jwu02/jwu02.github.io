import { IoLogoWechat, IoMail } from "react-icons/io5"
import { Tooltip } from "antd"

const pageText = {
  title: {"en": "Contacts", "cn": "联系方式"},
  iconTooltip: {
    email: {"en": "Email", "cn": "电子邮件"},
    wechat: {"en": "WeChat", "cn": "微信"},
  },
}

export function Contacts({displayLanguage}) {
  const infoCommon = "flex-center flex-nowrap gap-2 group"
  return (
    <section id="contacts" className="bp-responsive-container h-screen flex-center flex-col gap-12">
      <h1>{pageText.title[displayLanguage]}</h1>
      
      <div className="flex-center flex-col md:flex-row gap-5 border-2 rounded-4xl p-8 text-lg">
        <Tooltip title={pageText.iconTooltip.email[displayLanguage]} placement="bottom">
          <div className={infoCommon}>
            <IoMail className="icon-btn group-hover:text-[var(--link-hover-color)]" />
            <a>jiacongwu31@gmail.com</a>
          </div>
        </Tooltip>
        
        <Tooltip title={pageText.iconTooltip.wechat[displayLanguage]} placement="bottom">
          <div className={infoCommon}>
            <IoLogoWechat className="icon-btn group-hover:text-[var(--wechat-green)]" />
            <a>tonywu02</a>
          </div>
        </Tooltip>
      </div>
    </section>
  )
}
  