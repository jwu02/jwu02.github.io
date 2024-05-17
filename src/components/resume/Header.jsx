import { IoLogoGithub, IoLogoLinkedin, IoLogoWechat, IoMail } from "react-icons/io5";
import { Tooltip } from "antd";
import { useEffect, useState } from "react";
import TextTransition from 'react-text-transition'
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { FaMobileScreen } from "react-icons/fa6";

const Header = () => {
  const { t } = useTranslation('resume', { keyPrefix: 'header' });
  const INTERESTS = t("interests", {returnObjects: true});
  // https://www.npmjs.com/package/react-text-transition?activeTab=readme
  const [interestIndex, setInterestIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setInterestIndex((interestIndex) => interestIndex + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="flex flex-col gap-1 py-3 px-6 bg-slate-300 text-center">
      <Contacts />

      <div className="text-4xl font-semibold">{i18n.t("fullname", {ns:"common"})}</div>
      {/* <div className="text-base font-semibold">
        {t("interestLabel")} 
        <TextTransition inline={true} translateValue="50%">
          {INTERESTS[interestIndex % INTERESTS.length]}
        </TextTransition>
      </div> */}

      <div className="text-justify">
        {t("selfEvaluation")}
      </div>
    </div>
  )
}

export default Header

const Contacts = () => {
  const { t } = useTranslation("common", {keyPrefix: "contacts"});

  const resumeHeaderIcon = "icon w-5 h-5 group-hover:text-[var(--link-hover-color)]";

  return (
    <div className="flex justify-around">
      <ContactMethod
        method={t("email")}
        details={<a>jiacongwu31@gmail.com</a>}
        icon={<IoMail className={resumeHeaderIcon} />}
      />

      {/* <ContactMethod
        method={t("wechat")}
        details={<a>tonywu02</a>}
        icon={<IoLogoWechat className={`${resumeHeaderIcon} group-hover:text-[var(--wechat-green)]`} />}
      /> */}

      {/* <ContactMethod
        method={t("linkedin")}
        details={<a href="https://www.linkedin.com/in/jwu31" target="_blank" rel="noreferrer">jwu31</a>}
        icon={<IoLogoLinkedin className={`${resumeHeaderIcon} group-hover:text-[var(--linkedin-blue)]`} />}
      /> */}

      <ContactMethod
        method={t("mobile")}
        details={<a>075 3342 2220</a>}
        icon={<FaMobileScreen className={`${resumeHeaderIcon}`} />}
      />

      <ContactMethod
        method={t("github")}
        details={(
          <a href="https://github.com/jwu02" target="_blank" rel="noreferrer">
            jwu02.github.io
          </a>
        )}
        icon={<IoLogoGithub className={resumeHeaderIcon} />}
      />
    </div>
  )
}

const ContactMethod = ({ method, details, icon }) => {
  const resumeHeaderContact = "flex flex-nowrap gap-1 items-center group";

  return (
    <Tooltip placement="bottom" title={method}>
      <div className={resumeHeaderContact}>
        {icon}
        {details}
      </div>
    </Tooltip>
  )
}