import { Link } from '@tanstack/react-router';
import { Project } from '../../types';
import { getProjectSlug } from '../../routeMapping';
import styles from './MenuItems.module.css';

interface ProjectItemProps {
  selected: boolean;
  name: Project;
}

const dateClasses = 'font-bold text-xs px-2 mt-8 mb-2 text-[#151515]';

const sharedClasses =
  'my-1 py-0.5 pl-2 pr-2 w-fit rounded-xs text-left text-sm transition-all hover:font-medium duration-200 font-normal';
const sharedSelectedClasses = `${sharedClasses} font-medium text-white`;

const classesByProject: Record<Project, { default: string; selected: string }> =
  {
    [Project.StakeBar]: {
      default: `${styles.menuItem} ${styles['menuItem--stakebar']} ${sharedClasses} text-[#606d81] hover:text-stakebar-1`,
      selected: `${styles.menuItem} ${styles['menuItem--selected']} ${sharedSelectedClasses} bg-stakebar-1`,
    },
    [Project.Observatory]: {
      default: `${styles.menuItem} ${styles['menuItem--observatory']} ${sharedClasses} text-[#606d81] hover:text-observatory-1`,
      selected: `${styles.menuItem} ${styles['menuItem--selected']} ${sharedSelectedClasses} bg-observatory-1`,
    },
    [Project.SDP]: {
      default: `${styles.menuItem} ${styles['menuItem--sdp']} ${sharedClasses} text-[#606d81] hover:text-sdp-1`,
      selected: `${styles.menuItem} ${styles['menuItem--selected']} ${sharedSelectedClasses} bg-sdp-1`,
    },
    [Project.CrocoFinance]: {
      default: `${styles.menuItem} ${styles['menuItem--croco']} ${sharedClasses} text-[#606d81] hover:text-croco-1`,
      selected: `${styles.menuItem} ${styles['menuItem--selected']} ${sharedSelectedClasses} bg-croco-1`,
    },
    [Project.Trezor]: {
      default: `${styles.menuItem} ${styles['menuItem--trezor']} ${sharedClasses} text-[#606d81] hover:text-trezor-1`,
      selected: `${styles.menuItem} ${styles['menuItem--selected']} ${sharedSelectedClasses} bg-trezor-1`,
    },
    [Project.DuoCards]: {
      default: `${styles.menuItem} ${styles['menuItem--duo']} ${sharedClasses} text-[#606d81] hover:text-duo-1`,
      selected: `${styles.menuItem} ${styles['menuItem--selected']} ${sharedSelectedClasses} bg-duo-1`,
    },
    [Project.Eigen]: {
      default: `${styles.menuItem} ${styles['menuItem--eigen']} ${sharedClasses} text-[#606d81] hover:text-eigen-1`,
      selected: `${styles.menuItem} ${styles['menuItem--selected']} ${sharedSelectedClasses} bg-eigen-1`,
    },
    [Project.RobertBrada]: {
      default: `${styles.menuItem} ${styles['menuItem--robert']} ${sharedClasses} text-[#606d81] hover:text-about-1`,
      selected: `${styles.menuItem} ${styles['menuItem--selected']} ${sharedSelectedClasses} bg-about-1`,
    },
    [Project.Wormhole]: {
      default: `${styles.menuItem} ${styles['menuItem--wormhole']} ${sharedClasses} text-[#606d81] hover:text-wormhole-1`,
      selected: `${styles.menuItem} ${styles['menuItem--selected']} ${sharedSelectedClasses} bg-wormhole-1`,
    },
    [Project.Mayan]: {
      default: `${styles.menuItem} ${styles['menuItem--mayan']} ${sharedClasses} text-[#606d81] hover:text-mayan-1`,
      selected: `${styles.menuItem} ${styles['menuItem--selected']} ${sharedSelectedClasses} bg-mayan-1`,
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
      <Link to={to} className={getActiveClassName(selected, name)}>
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
        <ProjectItem name={Project.SDP} selected={selected === Project.SDP} />
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
          name={Project.Trezor}
          selected={selected === Project.Trezor}
        />
      </ul>
    </section>
  );
};
