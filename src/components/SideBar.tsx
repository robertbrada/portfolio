import { Project } from "../types";
// import me from "../assets/images/me-square.jpg";
import me from "../../public/favicon-punk.svg";
import { XLogo } from "./XLogo";
import { LinkedinLogo } from "./LinkedinLogo";
import { GithubLogo } from "./GithubLogo";

interface ItemProps {
  color: string;
  selected: boolean;
  name: Project;
  onClick: (name: Project) => void;
}

const colorsByProject: Record<Project, string> = {
  [Project.StakeBar]: "stakebar",
  [Project.Observatory]: "observatory",
  [Project.SDP]: "sdp",
  [Project.CrocoFinance]: "croco",
  [Project.Trezor]: "trezor",
  [Project.DuoCards]: "duo",
  [Project.Eigen]: "eigen",
  [Project.RobertBrada]: "robert",
};

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
  // return selected ? `text-[${color}]` : "text-black";
  // return selected ? `text-${colorsByProject[project]}` : "text-black";
  return selected
    ? classesByProject[project].selected
    : classesByProject[project].default;
  // return selected ? `text-stakebar` : "text-black";
}

const commonLabelClasses =
  "font-bold text-[0.8rem] pl-[0.04rem] mt-[-0.1rem] opacity-80";

const labelClasses: Record<Project, string> = {
  [Project.RobertBrada]: `${commonLabelClasses} text-${
    colorsByProject[Project.RobertBrada]
  }`,
  [Project.StakeBar]: `${commonLabelClasses} text-${
    colorsByProject[Project.StakeBar]
  }`,
  [Project.Observatory]: `${commonLabelClasses} text-${
    colorsByProject[Project.Observatory]
  }`,
  [Project.SDP]: `${commonLabelClasses} text-${colorsByProject[Project.SDP]}`,
  [Project.CrocoFinance]: `${commonLabelClasses} text-${
    colorsByProject[Project.CrocoFinance]
  }`,
  [Project.Eigen]: `${commonLabelClasses} text-${
    colorsByProject[Project.Eigen]
  }`,
  [Project.DuoCards]: `${commonLabelClasses} text-${
    colorsByProject[Project.DuoCards]
  }`,
  [Project.Trezor]: `${commonLabelClasses} text-${
    colorsByProject[Project.Trezor]
  }`,
};

const dateClasses = "font-bold text-xs px-2 mt-8 mb-2 text-[#151515]";

const aIconClass =
  "hover:bg-slate-100 rounded-full hover:scale-[1.2] duration-100 transition-transform";
const iconHoverClasses = "px-1 py-1 ";

function ProjectItem({ color, selected, name, onClick }: ItemProps) {
  return (
    <li className="my-1">
      <button
        onClick={() => onClick(name)}
        // className={getActiveClassName(selected, color)}
        className={getActiveClassName(selected, name)}
        // className={classesByProject[name].selected}

        // className={`text-[${selected ? color : "#000000"}] font-bold text-sm`}
        // className={`text-[${
        //   selected ? "red-400" : "#000000"
        // }] font-bold text-sm`}
        // className={`text-[${color}] font-bold text-sm`}
        // className={`text-red-400 font-bold text-sm`}
      >
        {name}
      </button>
    </li>
  );
}

interface SideBarProps {
  selected: Project;
  onSelected: (selected: Project) => void;
}

export function SideBar({ onSelected, selected }: SideBarProps) {
  return (
    <aside className="h-screen sticky top-0 w-64 text-left px-4 py-4 shrink-0 flex flex-col">
      <div className="border-r-[1px] py-2 h-full flex flex-col">
        <section
          className="pl-[0.5rem] pt-[1.5rem]"
          onClick={() => {
            onSelected(Project.RobertBrada);
          }}
        >
          {/* <span className="font-medium text-blue-700 text-xs"> */}
          <div className="flex space-x-2 items-center">
            <img className="w-6 h-6" alt="Robert Brada" src={me} />
            {/* <img className="w-6 h-6 rounded-full" alt="Robert Brada" src={"/favicon-punk.svg"} /> */}
            <h1 className="font-bold text-[1.2rem] mt-[-0.1rem] text-black">
              Robert Brada
            </h1>
          </div>
          {/* <div className={labelClasses[selected]}>Portfolio</div> */}
        </section>
        <section className="pt-2">
          <div className={dateClasses}>2024</div>
          <ul className="">
            <ProjectItem
              color="#6B43EE"
              name={Project.DuoCards}
              onClick={onSelected}
              selected={selected === Project.DuoCards}
            />
            <ProjectItem
              color="#2FB3A3"
              name={Project.Eigen}
              onClick={onSelected}
              selected={selected === Project.Eigen}
            />
          </ul>
          {/* <div className="font-bold text-sm px-3 my-3">2023</div> */}
          <div className={dateClasses}>2023</div>
          <ul className="">
            <ProjectItem
              color="#6B43EE"
              name={Project.StakeBar}
              onClick={onSelected}
              selected={selected === Project.StakeBar}
            />
            <ProjectItem
              color="#2FB3A3"
              name={Project.Observatory}
              onClick={onSelected}
              selected={selected === Project.Observatory}
            />
            <ProjectItem
              color="#3FA22F"
              name={Project.SDP}
              onClick={onSelected}
              selected={selected === Project.SDP}
            />
          </ul>
          <div className={dateClasses}>2022</div>
          <ul className="">
            <ProjectItem
              color="#6B43EE"
              name={Project.CrocoFinance}
              onClick={onSelected}
              selected={selected === Project.CrocoFinance}
            />
          </ul>
          <div className={dateClasses}>2021</div>
          <ul className="">
            <ProjectItem
              color="#6B43EE"
              name={Project.Trezor}
              onClick={onSelected}
              selected={selected === Project.Trezor}
            />
          </ul>
        </section>
        <section className="flex text-slate-400 text-xs font-light mt-auto space-x-5 pl-1 items-center">
          {/* <div>Deployed via GitHub Pages</div>
          <p>Twitter, Linkein</p> */}
          <a
            href="https://x.com/0xrbrada"
            target="_blank"
            className={aIconClass}
          >
            <XLogo
              className={`h-[1.3rem] w-auto display:inline-block cursor-pointer ${iconHoverClasses} `}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/robert-brada-252474112/"
            target="_blank"
            className={aIconClass}
          >
            <LinkedinLogo
              className={`h-6 w-auto display:inline-block cursor-pointer ${iconHoverClasses}`}
            />
          </a>
          <a
            href="https://github.com/robertbrada"
            target="_blank"
            className={aIconClass}
          >
            <GithubLogo
              className={`h-[1.55rem] w-auto display:inline-block cursor-pointer ${iconHoverClasses}`}
            />
          </a>
        </section>
      </div>
    </aside>
  );
}
