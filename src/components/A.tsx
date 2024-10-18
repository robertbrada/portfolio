import { Project } from "../types";

const colorClasses: Record<Project, string> = {
  [Project.Trezor]: "text-[#03854D]",
  [Project.CrocoFinance]: "text-croco",
  [Project.DuoCards]: "text-duo",
  [Project.Eigen]: "text-[#4a63e8]",
  [Project.Observatory]: "text-observatory",
  [Project.SDP]: "text-sdp",
  [Project.StakeBar]: "text-stakebar",
  [Project.RobertBrada]: "text-[#255ed9]",
};
interface LinkProps {
  project: Project;
  href: string;
  children: React.ReactNode;
}

export const A = ({ project, href, children }: LinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`${colorClasses[project]} font-bold hover:underline `}
    >
      {children}
    </a>
  );
};
