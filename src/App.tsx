import { useState } from "react";
import "./App.css";
import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import { Project } from "./types";

function App() {
  const [selectedProject, setSelectedProject] = useState<Project>(
    Project.RobertBrada
  );

  return (
    <div className="flex text-text-primary">
      <SideBar
        selected={selectedProject}
        onSelected={(name) => {
          setSelectedProject(name);
        }}
      />
      <Content selectedProject={selectedProject} />
    </div>
  );
}

export default App;
