import reactfig from "../assets/react.svg"
import jsfig from "../assets/jssvg.svg"
import StackItem from "./StackItem"
import mongofig from "../assets/mongodb.svg"

const Skills = [
  {
    name: 'Javascript',
    fig: jsfig 
  },
  {
    name: 'React',
    fig: reactfig
  },
  {
    name: 'Mongodb',
    fig: mongofig
  },
  {
    name: 'Javascript',
    fig: jsfig 
  },
  {
    name: 'React',
    fig: reactfig
  },
  {
    name: 'Mongodb',
    fig: mongofig
  },
  {
    name: 'Javascript',
    fig: jsfig 
  },
  {
    name: 'React',
    fig: reactfig
  },
  {
    name: 'Mongodb',
    fig: mongofig
  }
]

let nextId = 0

const Stack = () => {
  return (
    <div className="">
      <div className="grid grid-cols-5 gap-5">
        <div className="animate__animated animate__bounceInDown custom-bounceInDown">
        {Skills.map(item => <StackItem
          key={item.nextId++}
          techName={item.name}
          techFig={item.fig}
        />)}
        </div>
      </div>
    </div>
  );
};

export default Stack;
