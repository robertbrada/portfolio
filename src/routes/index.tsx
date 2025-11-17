import { createFileRoute } from '@tanstack/react-router';
import App from '../App';
import { Project } from '../types';

export const Route = createFileRoute('/')({
  component: () => <App selectedProject={Project.RobertBrada} />,
});
