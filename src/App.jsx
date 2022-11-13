import { delay } from "framer-motion";
import Card from "./components/Card";
import { projects } from "./constants";

function App() {
  return (
    <div className="relative w-screen min-h-screen flex items-center gap-16 flex-col ">
      <h1 className="realtive translate-y-6 text-3xl font-pacifico text-white">
        My Projects - @brusooo
      </h1>
      <div className="relative w-full h-full gap-12 overflow-x-hidden overflow-y-scroll p-8 flex justify-center flex-wrap">
        {Object.keys(projects).map((project) => (
          <Card source={projects[project]} key={projects[project]['key']}/>
        ))}
      </div>
    </div>
  );
}

export default App;
