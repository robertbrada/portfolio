import './App.css';
import { Content } from './components/Content';
import { SideBar, MobileMenu } from './components/Navigation';
import { Project } from './types';

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
