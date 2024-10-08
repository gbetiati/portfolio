import my from "../assets/fthome.jpeg";
import "animate.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const gtContact = () => {
    navigate("/Sobre");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0e0e0e]">
      <div className="flex flex-col px-16 mb-20 sm:flex-row justify-between space-x-60">
        <div className="">
          <div className="animate__animated animate__fadeInUp customA-fadeInUp">
            <div className="text text-gray-200 text-xl mb-2"> Olá, </div>
          </div>
          <div className="animate__animated animate__fadeInUp customB-fadeInUp">
            <div className="text text-gray-200 text-5xl font-bold mb-1">
              {" "}
              Meu nome é{" "}
            </div>
          </div>
          <div className="animate__animated animate__fadeInUp customC-fadeInUp">
            <div className="text text-[#3656fd] text-6xl font-bold mb-8">
              {" "}
              Guilherme Betiati{" "}
            </div>
          </div>
          <div className="animate__animated animate__fadeInUp customE-fadeInUp">
            <div className="text text-gray-400 text-2xl mb-8">
              {" "}
              Eu sou um desenvolver <br /> Full-Stack{" "}
            </div>
          </div>
          <div className="animate__animated animate__fadeInBottomLeft custom-fadeInBottomLeft">
            <div className="flex flex-row space-x-8">
              <button
                onClick={gtContact}
                className="bg bg-[#3656fd] text-md text-black font-mono px-7 py-2 rounded-md fi hover:opacity-75"
              >
                Entre em contato
              </button>
              <a
                href="https://docs.google.com/document/d/1Dv1UNtQ0EFFALo7pdXA2dPBooCp6bwsK/edit?usp=sharing&ouid=117987645055076769256&rtpof=true&sd=true"
                className="bg bg-transparent border-[0.1px] border-zinc-400 text-md px-7 py-2 font-mono text-zinc-100  rounded-md hover:bg-zinc-300 hover:text-black"
              >
                Curriculo
              </a>
            </div>
          </div>
        </div>
        <div className="object-contain space-x-2 opacity-95">
          <img src={my} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
