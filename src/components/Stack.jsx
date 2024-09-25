import reactfig from "../assets/react.svg"
import jsfig from "../assets/jssvg.svg"
import StackItem from "./StackItem"
import mongofig from "../assets/mongodb.svg"
import tsfig from "../assets/tssvg.svg"
import nextfig from "../assets/nextjssvg.svg"
import tailwindfig from "../assets/tailwindsvg.svg"
import rdb from "../assets/realmdb.png"

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
    name: 'Typescript',
    fig: tsfig 
  },
  {
    name: 'Realm',
    fig: rdb
  },
  {
    name: 'Tailwind',
    fig: tailwindfig
  },
  {
    name: 'NextJs',
    fig: nextfig
  },
  {
    name: 'React Native',
    fig: reactfig 
  },
 
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
