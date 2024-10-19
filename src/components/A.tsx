import { Project } from "../types";

const colorClasses: Record<Project, string> = {
  [Project.Trezor]: "text-[#03854D]",
  [Project.CrocoFinance]: "text-[#8fbe20]",
  [Project.DuoCards]: "text-[#63b53d]",
  [Project.Eigen]: "text-[#4a63e8]",
  [Project.Observatory]: "text-[#2290ff]",
  [Project.SDP]: "text-[#3aa3f9]",
  [Project.StakeBar]: "text-[#ce5fff]",
  [Project.RobertBrada]: "text-[#4479ec]",
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
