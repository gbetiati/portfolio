import Stack from "./Stack";

const About = () => {
  return (

    <div className="h-full pb-16  items-center bg-[#030f15]">
      <div className="pt-20 mx-14">
        <div className="text text-white">
          <div className="animate__animated animate__lightSpeedInRight custom-lightSpeedInLeft">
            <div className="text-3xl mb-8 first-line:bg-black text-green-400 font-mono">Sobre</div>
          </div>
          <br />
          <div className="animate__animated animate__fadeInUp customB-fadeInUp">
            <div className="text font-mono text-zinc-100">
              Hello, My name is Aayush Kurup. I am a Software Engineer from Bhopal, Madhya Pradesh, India. Currently, I am employed by Orah as Software Engineer.
            </div>
          </div>
          <br />
          <div className="animate__animated animate__fadeInUp customC-fadeInUp">
            <div className="text font-mono text-zinc-200">
              I love working on a variety of technologies including Web Development, Mobile App Development and Deep Learning. My goal is to build highly performant applications that solve real-world problems and provide users with an awesome experience.
            </div>
          </div>
        </div>
        <div>
          <div className="animate__animated animate__lightSpeedInLeft custom-lightSpeedInRight">
            <div className="text-3xl mt-14 mb-8 first-line:bg-black text-green-400 font-mono"> Minha Stack</div>
          </div>
          <br />
          <Stack />
        </div>
      </div>
    </div>
  );
};

export default About;
