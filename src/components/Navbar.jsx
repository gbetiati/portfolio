import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const navigation = [
    { name: 'Inicio', href: '/inicio', current: false },
    { name: 'Cadastrar rota', href: '/form', current: false},
    { name: 'Gerenciar rotas', href: '/RoutesListScreen', current: false },
    { name: 'Usuários', href: '/users', current: false },
  ]

  function gtSobre() {
    navigate("/Sobre")
  }
  function gtProjetos() {
    navigate("/Projetos")
  }
  function gtContato() {
    navigate("/Contato")
  }
  
  return (
    <div className="flex flex-row justify-between bg bg-[#05071a82] p-5">
      <div>
        <div className="text-xl font-bold ">Guilherme Agusto B.H.</div>
      </div>
      <div className="flex flex-row space-x-6 mr-3">
        <button className="text text-sm font-mono hover:text-green-400" onClick={gtSobre}>Sobre</button>
        <button className="text text-sm font-mono hover:text-green-400" onClick={gtProjetos}>Projetos</button>
        <button className="text  text-sm font-mono hover:text-green-400" onClick={gtContato}>Contato</button>
      </div>
    </div>
  );
};

export default Navbar;
