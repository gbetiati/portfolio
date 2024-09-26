import Stack from "./Stack";

const About = () => {
  return (

    <div className="h-full pb-16  items-center bg-[#0e0e0e]">
      <div className="pt-20 mx-14">
        <div className="text text-white">
          <div className="animate__animated animate__lightSpeedInRight custom-lightSpeedInLeft">
            <div className="text-4xl mb-8 text-[#3656fd] font-bold">Sobre</div>
          </div>
          <br />
          <div className="animate__animated animate__fadeInUp customB-fadeInUp">
            <div className="text font-mono text-zinc-200">
              Olá, meu nome é Guilherme Augusto Betiat Heusser. Eu sou um desenvolvedor full-stack. Estou atualmente trabalhando com suporte técnico de informática na cidade de Balneário Camboriú/SC.
            </div>
          </div>
          <br />
          <div className="animate__animated animate__fadeInUp customC-fadeInUp">
            <div className="text font-mono text-zinc-200">
              Gosto de trabalhar com tecnologias de diversos tipos tanto para desenvolvimento como para outras atividades, no desenvolvimento busco explorar vertentes que se complementam como front-end e back-end, e além do desenvolvimento porém em conjunto, busco aprimorar o conhecimento em experiencia do usuário e interface atrativas (UX e UI).
            </div>
          </div>
          <br />
          <div className="animate__animated animate__fadeInUp customD-fadeInUp">
            <div className="text font-mono text-zinc-200">
            Meu atual projeto em desenvolvimento é um aplicativo que será utilizado na organização da prestação de serviços para empresas da família, no ramo de prestação de serviços.
            </div>
          </div>
        </div>
        <div>
          <div className="animate__animated animate__lightSpeedInLeft custom-lightSpeedInRight">
            <div className="text-4xl mt-20 mb-8 text-[#3656fd] font-bold"> Minha Stack</div>
          </div>
          <br />
          <Stack />
        </div>
      </div>
    </div>
  );
};

export default About;
