import ProjectItem from "./ProjectItem";
import desktopSS from "../assets/desktopSS.png";
import mobilejpg from "../assets/mob.jpg";
import ecommprint from "../assets/ecommpc.jpg";
import velasprint from "../assets/sitevelas.jpg"

import "animate.css";
import { useState } from "react";

const Projects = () => {
  const [mobileProjects, setMobileProjects] = useState(false);

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
      name: "Sistema de gerenciamento",
      description:
        "Esse sistema foi desenvolvido para trabalhar em conjunto com um app mobile, (o qual explico na seção Mobile desta página), no sistema é possível gerenciar rotas e outros dados, os quais são enviados para a API e posteriormentes consultados pelos usuários através do celular. Um ponto central do sistema é a área de verificação de serviços onde é possível verificar quais serviços foram assinados e enviados para o servidor através do aplicativo mobile.",
      stack: [tsskill, reactskill, mongoskill, tailwindskill],
      image: desktopSS,
      link: "https://github.com/gbetiati/DesktopToMobileRegister",
    },
    {
      name: "Ecommerce",
      description:
        "Um site no modelo de Ecommerce, onde o usuário pode cadastrar produtos e gerenciá-los. O projeto utiliza NextJS e Prisma ORM, conta com carrinho de compras e listagem de itens. Projeto realizado com fim de aprendizado.",
      stack: [tsskill, reactskill, nextskill, mongoskill, tailwindskill],
      image: ecommprint,
      link: "https://github.com/gbetiati/next-comm",
    },
    {
      name: "Catálago",
      description:
        "Uma Single Page Application desenvolvida para colega que trabalha com venda de velas aromáticas. A ideia do projeto era expor modelos de velas em, formato de catálago, bem como benefícios e características do produto.",
      stack: [jsskill, reactskill, tailwindskill],
      image: velasprint,
      link: "https://github.com/gbetiati/LP-React-Tawildind",
    },
  ];

  const ProjectsMobileObj = [
    {
      name: "Todo application | Offline-First",
      description:
        "Aplicativo mobile desenvolvido com React Native e Expo, o app tras uma abordagem offline-first, o que torna possível utilizar grande parte dos recursos sem ter conexão com a internet através do banco dedados Realm. Conta com diversas telas e com uma secção de assinatura, onde o usuário coleta assinatura do cliente com uma rúbrica na tela.",
      stack: [tsskill, realmskill, mongoskill, rnskill],
      image: mobilejpg,
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
              Projetos
            </div>
          </div>
          <br /> 
          <div className="animate__animated animate__zoomInDown custom-zoomInDown">
          <div className="border-zinc-600 border-[0.2px] w-56 py-1.5 px-9 mb-14">
            <div className="flex flex-row justify-between">
              <div>
                <button onClick={handleWeb}>
                  <div style={styleweb} className="font-mono logo">
                    Web
                  </div>
                </button>
              </div>
              <div className="h-auto w-[0.1rem] bg-zinc-600"></div>
              <button onClick={handleMobile}>
                  <div style={stylemobile} className="font-mono logo">
                    Mobile
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
