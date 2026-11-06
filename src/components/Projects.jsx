import ProjectItem from "./ProjectItem";
import desktopSS from "../assets/desktopSS.png";
import mobilejpg from "../assets/mob.jpg";
import ecommprint from "../assets/ecommpc.jpg";
import velasprint from "../assets/sitevelas.jpg"

import "animate.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [mobileProjects, setMobileProjects] = useState(false);
  const { t } = useTranslation();

  const jsstyle = {
    color:"#FFD600" 
  };
  const tsstyle = {
    color:"#1976D2" 
  };
  const mongostyle = {
    color:"#4CAF50" 
  };
  const tailwindstyle = {
    color:"#00ACC1" 
  };
  const nextstyle = {
    color:"#E8E8E8" 
  };
  const reactstyle = {
    color:"#00D8FF" 
  };
  const realmstyle = {
    color:"#E65094" 
  };

  const jsskill = <span style={jsstyle}> Javascript </span>
  const tsskill = <span style={tsstyle}> Typescript </span>
  const mongoskill = <span style={mongostyle}> MongoDB </span>
  const tailwindskill = <span style={tailwindstyle}> Tailwind </span>
  const nextskill = <span style={nextstyle}> NextJS </span>
  const reactskill = <span style={reactstyle}> ReactJS </span>
  const realmskill = <span style={realmstyle}> Realm </span>
  const rnskill = <span style={reactstyle}> React Native </span>

  const ProjectsObj = [
    { 
      name: t("projects.items.management.name"),
      description:
        t("projects.items.management.description"),
      stack: [tsskill, reactskill, mongoskill, tailwindskill],
      image: desktopSS,
      link: "https://github.com/gbetiati/DesktopToMobileRegister",
    },
    {
      name: t("projects.items.ecommerce.name"),
      description:
        t("projects.items.ecommerce.description"),
      stack: [tsskill, reactskill, nextskill, mongoskill, tailwindskill],
      image: ecommprint,
      link: "https://github.com/gbetiati/next-comm",
    },
    {
      name: t("projects.items.catalog.name"),
      description:
        t("projects.items.catalog.description"),
      stack: [jsskill, reactskill, tailwindskill],
      image: velasprint,
      link: "https://github.com/gbetiati/LP-React-Tawildind",
    },
  ];

  const ProjectsMobileObj = [
    {
      name: t("projects.items.todo.name"),
      description:
        t("projects.items.todo.description"),
      stack: [tsskill, realmskill, mongoskill, rnskill],
      image: mobilejpg,
      link: "https://github.com/gbetiati/ReactNative-OfflineFirst",
    },
  ];
  let nextId = 0;

  const handleMobile = () => {
    setMobileProjects(true);
  };

  const handleWeb = () => {
    setMobileProjects(false);
  };

  const styleweb = {
    color: !mobileProjects ? "#3656fd" : "#dedede",
    fontWeight: !mobileProjects ? "bold" : "normal",
  };

  const stylemobile = {
    color: mobileProjects ? "#3656fd" : "#dedede",
    fontWeight: mobileProjects ? "bold" : "normal",
  };

 
  return (
    <div className="h-full pb-16 items-center bg-[#0e0e0e]">
      <div className="pt-20 mx-14">
        <div className="text text-white">
          <div className="animate__animated animate__rotateInDownLeft custom-rotateInDownLeft">
            <div className="text-4xl mb-12 text-[#3656fd] font-bold">
              {t("projects.title")}
            </div>
          </div>
          <br /> 
          <div className="animate__animated animate__zoomInDown custom-zoomInDown">
          <div className="border-zinc-600 border-[0.2px] w-56 py-1.5 px-9 mb-14">
            <div className="flex flex-row justify-between">
              <div>
                <button onClick={handleWeb}>
                  <div style={styleweb} className="font-mono logo">
                    {t("projects.web")}
                  </div>
                </button>
              </div>
              <div className="h-auto w-[0.1rem] bg-zinc-600"></div>
              <button onClick={handleMobile}>
                  <div style={stylemobile} className="font-mono logo">
                    {t("projects.mobile")}
                  </div>
                </button>
            </div>
          </div>
          </div>

          {mobileProjects ? (
            <div className="animate__animated animate__slideInLeft custom-slideInLeft">
              <div className="animate__animated animate__pulse custom-pulse">
                <div className="flex flex-col space-y-7">
                  {ProjectsMobileObj.map((item) => (
                    <ProjectItem
                      key={nextId++}
                      projectImg={item.image}
                      projectTitle={item.name}
                      projectDsc={item.description}
                      projectStack={item.stack}
                      projectLinks={item.link}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="animate__animated animate__slideInLeft custom-slideInLeft">
              <div className="animate__animated animate__pulse custom-pulse">
                <div className="flex flex-col space-y-7 ">
                  {ProjectsObj.map((item) => (
                    <ProjectItem
                      key={nextId++}
                      projectImg={item.image}
                      projectTitle={item.name}
                      projectDsc={item.description}
                      projectStack={item.stack}
                      projectLinks={item.link}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
