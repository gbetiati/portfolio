import "animate.css";

const Contact = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0e0e0e]">
      <div className="px-10 mb-72">
        <div className="animate__animated animate__jackInTheBox">
          <div className="bg bg-[#3657fd0c] border-[0.1em] border-zinc-700 px-16 py-12 space-y-16">
            <div className="flex text-[#3656fd] mb-20 text-start text-4xl font-bold">
              Contate-me!
            </div>
            <div className="flex flex-row space-x-10">
              <a
                className="bg bg-transparent border-[0.1px] border-zinc-500 text-center text-md w-32 px-7 py-2 font-mono text-zinc-200  rounded-sm hover:bg-zinc-300 hover:text-black"
                href="https://www.linkedin.com/in/guilherme-betiati-904107246/"
              >
                Linkedin
              </a>
              <a
                className="bg bg-transparent border-[0.1px] border-zinc-500 text-center text-md w-32 px-7 py-2 font-mono text-zinc-200  rounded-sm hover:bg-zinc-300 hover:text-black"
                href="https://wa.me/5547991331190?text=Ol%C3%A1!%20Recebemos%20seu%20portf%C3%B3lio%0A"
              >
                Whatsapp
              </a>
              <a
                className="bg bg-transparent border-[0.1px] border-zinc-500 text-center text-md w-32 px-7 py-2 font-mono text-zinc-200  rounded-sm hover:bg-zinc-300 hover:text-black"
                href="mailto:guilherme_betiati@hotmail.com"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
