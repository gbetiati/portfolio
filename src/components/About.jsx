import Stack from "./Stack";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (

    <div className="h-full pb-16  items-center bg-[#0e0e0e]">
      <div className="pt-20 mx-14">
        <div className="text text-white">
          <div className="animate__animated animate__lightSpeedInRight custom-lightSpeedInLeft">
            <div className="text-4xl mb-8 text-[#3656fd] font-bold">{t("about.title")}</div>
          </div>
          <br />
          <div className="animate__animated animate__fadeInUp customB-fadeInUp">
            <div className="text font-mono text-zinc-200">
              {t("about.paragraph1")}
            </div>
          </div>
          <br />
          <div className="animate__animated animate__fadeInUp customC-fadeInUp">
            <div className="text font-mono text-zinc-200">
              {t("about.paragraph2")}
            </div>
          </div>
          <br />
          <div className="animate__animated animate__fadeInUp customD-fadeInUp">
            <div className="text font-mono text-zinc-200">
            {t("about.paragraph3")}
            </div>
          </div>
        </div>
        <div>
          <div className="animate__animated animate__lightSpeedInLeft custom-lightSpeedInRight">
            <div className="text-4xl mt-20 mb-8 text-[#3656fd] font-bold"> {t("about.myStack")}</div>
          </div>
          <br />
          <Stack />
        </div>
      </div>
    </div>
  );
};

export default About;
