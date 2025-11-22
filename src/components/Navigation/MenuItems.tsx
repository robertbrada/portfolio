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
  'my-1 py-0.5 px-2 w-fit rounded-sm text-left text-sm transition-all hover:font-medium duration-200 text-text-secondary font-normal';
const sharedSelectedClasses = `${sharedClasses} scale-[1.08] font-medium text-white`;

const classesByProject: Record<Project, { default: string; selected: string }> =
  {
    [Project.StakeBar]: {
      default: `${styles.menuItem} ${styles['menuItem--stakebar']} ${sharedClasses} hover:text-stakebar`,
      selected: `${styles.menuItem} ${sharedSelectedClasses} bg-stakebar`,
    },
    [Project.Observatory]: {
      default: `${styles.menuItem} ${styles['menuItem--observatory']} ${sharedClasses} hover:text-observatory`,
      selected: `${styles.menuItem} ${sharedSelectedClasses} bg-observatory`,
    },
    [Project.SDP]: {
      default: `${styles.menuItem} ${styles['menuItem--sdp']} ${sharedClasses} hover:text-sdp`,
      selected: `${styles.menuItem} ${sharedSelectedClasses} bg-sdp`,
    },
    [Project.CrocoFinance]: {
      default: `${styles.menuItem} ${styles['menuItem--croco']} ${sharedClasses} hover:text-croco`,
      selected: `${styles.menuItem} ${sharedSelectedClasses} bg-croco`,
    },
    [Project.Satoshilabs]: {
      default: `${styles.menuItem} ${styles['menuItem--trezor']} ${sharedClasses} hover:text-trezor`,
      selected: `${styles.menuItem} ${sharedSelectedClasses} bg-trezor`,
    },
    [Project.DuoCards]: {
      default: `${styles.menuItem} ${styles['menuItem--duo']} ${sharedClasses} hover:text-duo`,
      selected: `${styles.menuItem} ${sharedSelectedClasses} bg-duo`,
    },
    [Project.Eigen]: {
      default: `${styles.menuItem} ${styles['menuItem--eigen']} ${sharedClasses} hover:text-eigen`,
      selected: `${styles.menuItem} ${sharedSelectedClasses} bg-eigen`,
    },
    [Project.RobertBrada]: {
      default: `${styles.menuItem} ${styles['menuItem--robert']} ${sharedClasses} hover:text-robert`,
      selected: `${styles.menuItem} ${sharedSelectedClasses} bg-robert`,
    },
    [Project.Wormhole]: {
      default: `${styles.menuItem} ${styles['menuItem--wormhole']} ${sharedClasses} hover:text-wormhole`,
      selected: `${styles.menuItem} ${sharedSelectedClasses} bg-wormhole`,
    },
    [Project.Mayan]: {
      default: `${styles.menuItem} ${styles['menuItem--mayan']} ${sharedClasses} hover:text-mayan`,
      selected: `${styles.menuItem} ${sharedSelectedClasses} bg-mayan`,
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

  const contentClassName = selected
    ? `${styles.menuItemContent} ${styles['menuItemContent--selected']}`
    : styles.menuItemContent;

  return (
    <li>
      <Link to={to} className={getActiveClassName(selected, name)}>
        <span className={contentClassName}>{name}</span>
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
          name={Project.Satoshilabs}
          selected={selected === Project.Satoshilabs}
        />
      </ul>
    </section>
  );
};
