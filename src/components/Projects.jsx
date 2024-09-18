import ProjectItem from "./ProjectItem";
import desktopSS from "../assets/desktopSS.png"
import mobilejpg from "../assets/mobile.jpg"
import ecommprint from "../assets/ecommprint.png"


import 'animate.css';

const Projects = () => {

  const ProjectsObj = [
    {
      name: "Ecommerce",
      description: "A CLI for running firebase database and firestore queries on the shell. Just install the package globally using npm or yarn, select the service (Realtime Database or Cloud Firestore), enter the path to config file and run your queries.",
      stack: "Typescript, ReactJS, NextJS, MongoDB, Tailwind",
      image: ecommprint,
      link: "https://www.google.com"
    },
    {
      name: "Lista de repositórios API",
      description: "A CLI for running firebase database and firestore queries on the shell. Just install the package globally using npm or yarn, select the service (Realtime Database or Cloud Firestore), enter the path to config file and run your queries.",
      stack: "ReactJS, NodeJS, MongoDB, Express",
      image: desktopSS,
      link: "https://www.google.com"
    },
    {
      name: "Mobile app | Offline-First",
      description: "A CLI for running firebase database and firestore queries on the shell. Just install the package globally using npm or yarn, select the service (Realtime Database or Cloud Firestore), enter the path to config file and run your queries.",
      stack: "Typescript, React Native, Realm, Nativewind",
      image: mobilejpg,
      link: "https://www.google.com"
    },
    {
      name: "Catálago",
      description: "A CLI for running firebase database and firestore queries on the shell. Just install the package globally using npm or yarn, select the service (Realtime Database or Cloud Firestore), enter the path to config file and run your queries.",
      stack: "ReactJS, Tailwind",
      image: desktopSS,
      link: "https://www.google.com"
    },
  ]

  let nextId = 0;

  return (
    <div className="h-full pb-16 items-center bg-[#030f15]">
      <div className="pt-20 mx-14">
        <div className="text text-white">

          <div className="animate__animated animate__rotateInDownLeft custom-rotateInDownLeft">
          <div className="text-3xl mb-9 first-line:bg-black text-green-500 font-mono">Projetos</div>
          </div>
          <br />

          <div className="animate__animated animate__slideInLeft custom-slideInLeft">
            <div className="animate__animated animate__pulse custom-pulse">
              <div className="flex flex-col space-y-7 ">
                {ProjectsObj.map(item =>
                  <ProjectItem
                    key={nextId++}
                    projectImg={item.image}
                    projectTitle={item.name}
                    projectDsc={item.description}
                    projectStack={item.stack}
                    projectLinks={item.link}
                  />
                )}
              </div>
            </div>


          </div>

        </div>

      </div>
    </div>
  );
};

export default Projects;