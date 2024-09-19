import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const navigation = [
    { name: 'Inicio', href: '/inicio', current: false },
    { name: 'Cadastrar rota', href: '/form', current: false},
    { name: 'Gerenciar rotas', href: '/RoutesListScreen', current: false },
    { name: 'Usuários', href: '/users', current: false },
  ]

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
    <div className="flex flex-row justify-between bg bg-[#3657fd38] py-4 px-8">
      <div>
        <div className="text-xl font-bold ">Guilherme Agusto B.H.</div>
      </div>
      <div className="flex flex-row space-x-7 mr-2">
        <button className="text text-sm font-mono hover:text-[#3656fd]" onClick={gtInicio}>Inicio</button>
        <button className="text text-sm font-mono hover:text-[#3656fd]" onClick={gtProjetos}>Projetos</button>
        <button className="text  text-sm font-mono hover:text-[#3656fd]" onClick={gtSobre}>Sobre</button>
        <button className="text  text-sm font-mono hover:text-[#3656fd]" onClick={gtContato}>Contato</button>
      </div>
    </div>
  );
};

export default Navbar;
