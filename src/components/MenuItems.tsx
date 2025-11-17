import { Link } from '@tanstack/react-router';
import { Project } from '../types';
import { getProjectSlug } from '../routeMapping';

interface ProjectItemProps {
  selected: boolean;
  name: Project;
}

const dateClasses = 'font-bold text-xs px-2 mt-8 mb-2 text-[#151515]';

const sharedClasses =
  'my-0.5 py-0.5 px-2 w-fit rounded-sm text-left text-sm hover:scale-[1.08] transition-all hover:font-medium duration-100 hover:translate-y-[-1px] text-text-secondary font-normal';
const sharedSelectedClasses = `${sharedClasses} scale-[1.08] font-medium text-white`;

const classesByProject: Record<Project, { default: string; selected: string }> =
  {
    [Project.StakeBar]: {
      default: `${sharedClasses} hover:text-stakebar hover:bg-stakebar/10`,
      selected: `${sharedSelectedClasses} bg-stakebar`,
    },
    [Project.Observatory]: {
      default: `${sharedClasses} hover:text-observatory hover:bg-observatory/10`,
      selected: `${sharedSelectedClasses} bg-observatory`,
    },
    [Project.SDP]: {
      default: `${sharedClasses} hover:text-sdp hover:bg-sdp/10`,
      selected: `${sharedSelectedClasses} bg-sdp`,
    },
    [Project.CrocoFinance]: {
      default: `${sharedClasses} hover:text-croco hover:bg-croco/10`,
      selected: `${sharedSelectedClasses} bg-croco`,
    },
    [Project.Satoshilabs]: {
      default: `${sharedClasses} hover:text-trezor hover:bg-trezor/10`,
      selected: `${sharedSelectedClasses} bg-trezor`,
    },
    [Project.DuoCards]: {
      default: `${sharedClasses} hover:text-duo hover:bg-duo/10`,
      selected: `${sharedSelectedClasses} bg-duo`,
    },
    [Project.Eigen]: {
      default: `${sharedClasses} hover:text-eigen hover:bg-eigen/10`,
      selected: `${sharedSelectedClasses} bg-eigen`,
    },
    [Project.RobertBrada]: {
      default: `${sharedClasses} hover:text-robert hover:bg-robert/10`,
      selected: `${sharedSelectedClasses} bg-robert`,
    },
    [Project.Wormhole]: {
      default: `${sharedClasses} hover:text-wormhole hover:bg-wormhole/10`,
      selected: `${sharedSelectedClasses} bg-wormhole`,
    },
    [Project.Mayan]: {
      default: `${sharedClasses} hover:text-mayan hover:bg-mayan/10`,
      selected: `${sharedSelectedClasses} bg-mayan`,
    },
  };

function getActiveClassName(selected: boolean, project: Project) {
  return selected
    ? classesByProject[project].selected
    : classesByProject[project].default;
}

function ProjectItem({ selected, name }: ProjectItemProps) {
  const slug = getProjectSlug(name);
  const to = name === Project.RobertBrada ? '/' : `/projects/${slug}`;

  return (
    <li>
      <Link
        to={to}
        className={getActiveClassName(selected, name)}
      >
        {name}
      </Link>
    </li>
  );
}

interface MenuItemsProps {
  selected: Project;
}

export const MenuItems = ({ selected }: MenuItemsProps) => {
  return (
    <section className="pt-2">
      <div className={dateClasses}>2025</div>
      <ul>
        <ProjectItem
          name={Project.Mayan}
          selected={selected === Project.Mayan}
        />
        <ProjectItem
          name={Project.Wormhole}
          selected={selected === Project.Wormhole}
        />
      </ul>
      <div className={dateClasses}>2024</div>
      <ul>
        <ProjectItem
          name={Project.Eigen}
          selected={selected === Project.Eigen}
        />
        <ProjectItem
          name={Project.DuoCards}
          selected={selected === Project.DuoCards}
        />
      </ul>
      <div className={dateClasses}>2023</div>
      <ul>
        <ProjectItem
          name={Project.StakeBar}
          selected={selected === Project.StakeBar}
        />
      </ul>
      <div className={dateClasses}>2022</div>
      <ul>
        <ProjectItem
          name={Project.SDP}
          selected={selected === Project.SDP}
        />
        <ProjectItem
          name={Project.Observatory}
          selected={selected === Project.Observatory}
        />
      </ul>
      <div className={dateClasses}>2021</div>
      <ul>
        <ProjectItem
          name={Project.CrocoFinance}
          selected={selected === Project.CrocoFinance}
        />
      </ul>
      <div className={dateClasses}>2020</div>
      <ul>
        <ProjectItem
          name={Project.Satoshilabs}
          selected={selected === Project.Satoshilabs}
        />
      </ul>
    </section>
  );
};
