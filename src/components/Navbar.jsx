import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  function gtInicio() {
    navigate("/Inicio")
  }
  function gtProjetos() {
    navigate("/Projetos")
  }
  function gtSobre() {
    navigate("/Sobre")
  }
  function gtContato() {
    navigate("/Contato")
  }
  
  return (
    <div className="flex flex-row justify-between py-2 px-8 mynavbar">
      <div>
        <div className="text-2xl font-mono text-[#c2d3ee]"> GB </div>
      </div>
      <div className="flex flex-row space-x-5 mr-2">
        <button className="text text-zinc-300 text-md font-bold font-mono hover:text-[#3656fd]" onClick={gtInicio}>Inicio</button>
        <button className="text text-zinc-300 text-md font-bold font-mono hover:text-[#3656fd]" onClick={gtProjetos}>Projetos</button>
        <button className="text text-zinc-300 text-md font-bold font-mono hover:text-[#3656fd]" onClick={gtSobre}>Sobre</button>
        <button className="text text-zinc-300 text-md font-bold font-mono hover:text-[#3656fd]" onClick={gtContato}>Contato</button>
      </div>
    </div>
  );
};

export default Navbar;
