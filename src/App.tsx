import { useState } from 'react';
import './App.css';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { Project } from './types';
import { MobileMenu } from './components/MobileMenu';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project>(
    Project.RobertBrada
  );

  return (
    <div className="flex text-text-primary flex-col lg:flex-row">
      <MobileMenu
        selected={selectedProject}
        onSelected={(name) => {
          setSelectedProject(name);
        }}
      />
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
