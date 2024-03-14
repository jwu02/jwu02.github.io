import { IoLogoWechat, IoMail } from "react-icons/io5"
import { Tooltip } from "antd"
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Contacts = () => {
  const { t } = useTranslation("translation", {keyPrefix: "contacts"});
  const infoCommon = "flex-center flex-nowrap gap-2 group";
  
  return (
    <section id="contacts" className="bp-responsive-container h-screen flex-center flex-col gap-12">
      <h1>{t("title")}</h1>
      
      <div className="flex-center flex-col md:flex-row gap-5 border-2 rounded-4xl p-8 text-lg">
        <Tooltip title={i18n.t("contacts.email", {ns: "common"})} placement="bottom">
          <div className={infoCommon}>
            <IoMail className="icon-btn group-hover:opacity-75" />
            <a>jiacongwu31@gmail.com</a>
          </div>
        </Tooltip>
        
        <Tooltip title={i18n.t("contacts.wechat", {ns: "common"})} placement="bottom">
          <div className={infoCommon}>
            <IoLogoWechat className="icon-btn group-hover:text-[var(--wechat-green)]" />
            <a>tonywu02</a>
          </div>
        </Tooltip>
      </div>
    </section>
  )
}

export default Contacts