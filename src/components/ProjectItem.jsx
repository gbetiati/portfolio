import desktopSS from "../assets/desktopSS.png"
import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";


const ProjectItem = ({ projectImg, projectTitle, projectDsc, projectLinks, projectStack }) => {
    return (
        <div className="flex md:flex-row-reverse justify-between pb-4 px-2 pr-8 bg-[#0a284642] sm:flex flex-col-reverse items-center hover:bg-[#19294d56]">
            <div className="">
                <img src={projectImg} className="max-w-[24em] pt-5" />
                <div className="flex justify-end pt-5">
                    <a href={projectLinks}>
                        <div className="flex flex-row logo  transform-gpu transition-all duration-700 hover:-translate-y-1">
                            <FaGithub
                                size={26}
                            />
                            <HiArrowUpRight
                                size={26}
                            />
                        </div>
                    </a>
                </div>
            </div>
            <div className="px-3 pr-10 space-y-10 text-xl">
                <div className="text text-2xl font-mono pb-4 text-zinc-50">
                    {projectTitle}
                </div>

                <div className="text text-sm font-mono text-zinc-400">
                    {projectDsc}
                </div>
                <>
                    <div className="text text-sm font-mono pt-16">
                        <div className="text text-[#3656fd]"> Tecnologias utilizadas: {projectStack} </div>
                    </div>
                </>

            </div>
        </div>

    )
};

export default ProjectItem;
