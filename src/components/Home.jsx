import my from "../assets/myimg.jpg"
import 'animate.css';

const Navbar = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#030f15]">
      <div className="flex flex-row justify-between space-x-72">
        <div className="">
          <div className="animate__animated animate__fadeInUp customA-fadeInUp">
            <div className="text text-white text-xl mb-2"> Olá mundo, </div>
          </div>
          <div className="animate__animated animate__fadeInUp customB-fadeInUp">
            <div className="text text-white text-5xl mb-1"> Meu nome é </div>
          </div>
          <div className="animate__animated animate__fadeInUp customC-fadeInUp">
            <div className="text text-green-400 text-6xl font-bold mb-8"> Guilherme Betiati </div>
          </div>
          <div className="animate__animated animate__fadeInUp customD-fadeInUp">
            <div className="text text-gray-400 text-2xl mb-8"> Eu sou um desenvolver <br /> Full-Stack </div>
          </div>
          <div className="animate__animated animate__fadeInBottomLeft custom-fadeInBottomLeft">
            <div className="flex flex-row space-x-8">
              <button className="bg bg-green-400 text-md text-black font-mono px-7 py-2 rounded-md fi hover:opacity-75">Entre em contato</button>
              <button className="bg bg-transparent border-[0.4px] border-white text-md px-7 py-2 font-mono text-white  rounded-md hover:bg-zinc-300 hover:text-black"> Curriculo </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <img src={my} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
