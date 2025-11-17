import { Link } from '@tanstack/react-router';
import { Project } from '../types';
import { MenuItems } from './MenuItems';
import me from '/favicon-punk.svg';

interface SideBarProps {
  selected: Project;
}

export function SideBar({ selected }: SideBarProps) {
  return (
    <aside className="h-screen sticky top-0 w-64 text-left px-4 shrink-0 flex-col hidden lg:flex">
      <div className="border-r-[1px] py-6 h-full flex flex-col">
        <section className="pl-[0.5rem] pt-[1rem]">
          <Link to="/">
            <div className="flex space-x-2 items-center cursor-pointer hover:scale-[1.03] transition-all duration-100">
              <img className="w-10 h-10" alt="Robert Brada" src={me} />
              <h1 className="font-bold text-[1.2rem] mt-[-0.1rem] text-black">
                /about
              </h1>
            </div>
          </Link>
        </section>
        <MenuItems selected={selected} />
      </div>
    </aside>
  );
}
