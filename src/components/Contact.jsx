import "animate.css";


function gtLinkedin() {
  navigate("/")
}
function gtWhatsapp() {
  navigate("/")
}
function gtEmail() {
  navigate("/e")
}

const Contact = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0e0e0e]">
      <div className="px-10 mb-72">
        <div className="bg bg-[#3657fd0c] border-[0.1em] border-zinc-700 px-16 py-12 space-y-16">
          <div className="flex text-[#3656fd] mb-20 text-start text-4xl font-bold">
            Contate-me!
          </div>

          <div className="flex flex-row space-x-10">
            <button onClick={gtLinkedin} className="bg bg-transparent border-[0.1px] border-zinc-500 text-md w-32 px-7 py-2 font-mono text-zinc-200  rounded-sm hover:bg-zinc-300 hover:text-black">
              {" "}
              Linkedin{" "}
            </button>

            <button onClick={gtWhatsapp} className="bg bg-transparent border-[0.1px] border-zinc-500 text-md w-32 px-7 py-2 font-mono text-zinc-200  rounded-sm hover:bg-zinc-300 hover:text-black">
              {" "}
              Whatsapp{" "}
            </button>
            <button onClick={gtEmail} className="bg bg-transparent border-[0.1px] border-zinc-500 text-md w-32 px-7 py-2 font-mono text-zinc-200  rounded-sm hover:bg-zinc-300 hover:text-black">
              {" "}
              Email{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
