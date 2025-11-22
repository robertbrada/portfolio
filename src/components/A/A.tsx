import { Project } from '../../types';

const colorClasses: Record<Project, string> = {
  [Project.Trezor]: 'text-trezor-2',
  [Project.CrocoFinance]: 'text-croco-2',
  [Project.DuoCards]: 'text-duo-2',
  [Project.Eigen]: 'text-eigen-2',
  [Project.Observatory]: 'text-observatory-2',
  [Project.SDP]: 'text-sdp-2',
  [Project.StakeBar]: 'text-stakebar-2',
  [Project.RobertBrada]: 'text-about-2',
  [Project.Wormhole]: 'text-wormhole-1',
  [Project.Mayan]: 'text-mayan-2',
};
interface AProps {
  project: Project;
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const A = ({ project, href, children, className }: AProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`${colorClasses[project]} font-bold hover:underline inline-block transition-transform duration-200 hover:-translate-y-px ${className || ''}`}
    >
      {children}
    </a>
  );
};
