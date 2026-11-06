import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import flagUs from "../assets/flag-us.svg";
import flagBr from "../assets/flag-br.svg";

const languages = [
  { code: "en", label: "English", flag: flagUs },
  { code: "pt", label: "Português", flag: flagBr },
];

const Navbar = () => {

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  function gtHome() {
    navigate("/home")
  }
  function gtProjects() {
    navigate("/projects")
  }
  function gtAbout() {
    navigate("/about")
  }
  function gtContact() {
    navigate("/contact")
  }
  
  return (
    <div className="flex flex-row justify-between py-2 px-8 mynavbar">
      <div>
        <div className="text-2xl font-mono text-[#c2d3ee]"> GB </div>
      </div>
      <div className="flex flex-row space-x-5 mr-2">
        <button className="text text-zinc-300 text-md font-bold font-mono hover:text-[#3656fd]" onClick={gtHome}>{t("navbar.home")}</button>
        <button className="text text-zinc-300 text-md font-bold font-mono hover:text-[#3656fd]" onClick={gtProjects}>{t("navbar.projects")}</button>
        <button className="text text-zinc-300 text-md font-bold font-mono hover:text-[#3656fd]" onClick={gtAbout}>{t("navbar.about")}</button>
        <button className="text text-zinc-300 text-md font-bold font-mono hover:text-[#3656fd]" onClick={gtContact}>{t("navbar.contact")}</button>
        <div className="flex flex-row items-center space-x-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => i18n.changeLanguage(language.code)}
              aria-label={language.label}
              aria-pressed={i18n.resolvedLanguage === language.code}
              className={`transition-opacity hover:opacity-100 ${i18n.resolvedLanguage === language.code ? "opacity-100" : "opacity-40"}`}
            >
              <img src={language.flag} alt={language.label} className="h-4 w-6 rounded-sm" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
