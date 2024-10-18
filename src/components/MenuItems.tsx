import { Project } from "../types";

interface ItemProps {
  color: string;
  selected: boolean;
  name: Project;
  onClick: (name: Project) => void;
}

const dateClasses = "font-bold text-xs px-2 mt-8 mb-2 text-[#151515]";

const sharedClasses =
  "my-1 py-0.5 px-2 w-fit rounded-md text-left text-sm hover:scale-[1.08] transition-all hover:font-medium duration-100 hover:translate-y-[-1px]";
const sharedDefault = "text-text-secondary font-normal";
const sharedSelectedClasses = "scale-[1.08] font-medium text-white";

const classesByProject: Record<Project, { default: string; selected: string }> =
  {
    [Project.StakeBar]: {
      default: `${sharedDefault} ${sharedClasses} hover:text-stakebar hover:bg-stakebar/10`,
      selected: ` ${sharedClasses} ${sharedSelectedClasses} bg-stakebar `,
    },
    [Project.Observatory]: {
      default: `${sharedDefault} ${sharedClasses} hover:text-observatory hover:bg-observatory/10`,
      selected: ` ${sharedClasses} ${sharedSelectedClasses} bg-observatory `,
    },
    [Project.SDP]: {
      default: `${sharedDefault} ${sharedClasses} hover:text-sdp hover:bg-sdp/10`,
      selected: ` ${sharedClasses} ${sharedSelectedClasses} bg-sdp `,
    },
    [Project.CrocoFinance]: {
      default: `${sharedDefault} ${sharedClasses} hover:text-croco hover:bg-croco/10`,
      selected: ` ${sharedClasses} ${sharedSelectedClasses} bg-croco`,
    },
    [Project.Trezor]: {
      default: `${sharedDefault} ${sharedClasses} hover:text-trezor hover:bg-trezor/10`,
      selected: ` ${sharedClasses} ${sharedSelectedClasses} bg-trezor`,
    },
    [Project.DuoCards]: {
      default: `${sharedDefault} ${sharedClasses} hover:text-duo hover:bg-duo/10`,
      selected: ` ${sharedClasses} ${sharedSelectedClasses} bg-duo`,
    },
    [Project.Eigen]: {
      default: `${sharedDefault} ${sharedClasses} hover:text-eigen hover:bg-eigen/10`,
      selected: ` ${sharedClasses} ${sharedSelectedClasses} bg-eigen `,
    },
    [Project.RobertBrada]: {
      default: `${sharedDefault} ${sharedClasses} hover:text-robert hover:bg-robert/10`,
      selected: ` ${sharedClasses} ${sharedSelectedClasses} bg-robert `,
    },
  };

function getActiveClassName(selected: boolean, project: Project) {
  return selected
    ? classesByProject[project].selected
    : classesByProject[project].default;
}

function ProjectItem({ selected, name, onClick }: ItemProps) {
  return (
    <li className="">
      <button
        onClick={() => onClick(name)}
        className={getActiveClassName(selected, name)}
      >
        {name}
      </button>
    </li>
  );
}

interface MenuItemsProps {
  selected: Project;
  onSelected: (name: Project) => void;
}

export const MenuItems = ({ selected, onSelected }: MenuItemsProps) => {
  return (
    <section className="pt-2">
      <div className="ml-2 lg:hidden">My projects</div>
      <div className={dateClasses}>2024</div>
      <ul className="">
        <ProjectItem
          color="#2FB3A3"
          name={Project.Eigen}
          onClick={onSelected}
          selected={selected === Project.Eigen}
        />
        <ProjectItem
          color="#6B43EE"
          name={Project.DuoCards}
          onClick={onSelected}
          selected={selected === Project.DuoCards}
        />
      </ul>
      <div className={dateClasses}>2023</div>
      <ul className="">
        <ProjectItem
          color="#6B43EE"
          name={Project.StakeBar}
          onClick={onSelected}
          selected={selected === Project.StakeBar}
        />
      </ul>
      <div className={dateClasses}>2022</div>
      <ul className="">
        <ProjectItem
          color="#3FA22F"
          name={Project.SDP}
          onClick={onSelected}
          selected={selected === Project.SDP}
        />
        <ProjectItem
          color="#2FB3A3"
          name={Project.Observatory}
          onClick={onSelected}
          selected={selected === Project.Observatory}
        />
      </ul>
      <div className={dateClasses}>2021</div>
      <ul className="">
        <ProjectItem
          color="#6B43EE"
          name={Project.CrocoFinance}
          onClick={onSelected}
          selected={selected === Project.CrocoFinance}
        />
      </ul>
      <div className={dateClasses}>2020</div>
      <ul className="">
        <ProjectItem
          color="#6B43EE"
          name={Project.Trezor}
          onClick={onSelected}
          selected={selected === Project.Trezor}
        />
      </ul>
    </section>
  );
};
