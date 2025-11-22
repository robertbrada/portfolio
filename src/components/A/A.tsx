import { Project } from '../../types';

const colorClasses: Record<Project, string> = {
  [Project.Satoshilabs]: 'text-[#03854D]',
  [Project.CrocoFinance]: 'text-[#8fbe20]',
  [Project.DuoCards]: 'text-[#4ebbf2]',
  [Project.Eigen]: 'text-[#4a63e8]',
  [Project.Observatory]: 'text-[#5bc0b4]',
  [Project.SDP]: 'text-[#3aa3f9]',
  [Project.StakeBar]: 'text-[#ce5fff]',
  [Project.RobertBrada]: 'text-[#4479ec]',
  [Project.Wormhole]: 'text-[#000000]',
  [Project.Mayan]: 'text-[#3885FF]',
};
interface AProps {
  project: Project;
  href: string;
  children: React.ReactNode;
}

export const A = ({ project, href, children }: AProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`${colorClasses[project]} font-bold hover:underline inline-block transition-transform duration-200 hover:-translate-y-px`}
    >
      {children}
    </a>
  );
};
