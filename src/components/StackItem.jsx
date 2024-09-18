import reactfig from "../assets/react.svg"

const StackItem = ({ techFig, techName }) => {
    return (
        <div className="flex flex-row bg-slate-900 my-1 p-4 pt-3 transform-gpu transition-all duration-300 hover:-translate-x-2 hover:bg-green-300 hover:text-black">
            <div className="mr-4">
                <img src={techFig} alt="React Native" />
            </div>
            <div className="self-center">
                {techName}
            </div>
            <div>
            </div>
        </div>
    );
};

export default StackItem;
