import './App.css';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { Project } from './types';
import { MobileMenu } from './components/MobileMenu';

interface AppProps {
  selectedProject: Project;
}

function App({ selectedProject }: AppProps) {
  return (
    <div className="flex text-text-primary flex-col lg:flex-row">
      <MobileMenu selected={selectedProject} />
      <SideBar selected={selectedProject} />
      <Content selectedProject={selectedProject} />
    </div>
  );
}

export default App;
