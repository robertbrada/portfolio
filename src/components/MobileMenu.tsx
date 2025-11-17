import { useState } from 'react';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';
import { MenuItems } from './MenuItems';
import me from '/favicon-punk.svg';
import { Project } from '../types';

interface MobileMenuProps {
  className?: string;
  selected: Project;
  onSelected: (selected: Project) => void;
}
export const MobileMenu = ({ selected, onSelected }: MobileMenuProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <div className="w-full flex justify-between px-3 py-2 border-b-[1px] h-[3rem] items-center lg:hidden">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => {
            onSelected(Project.RobertBrada);
          }}
        >
          <img className="w-6 h-6" alt="Robert Brada" src={me} />
          <span>Robert Brada</span>
        </div>
        <div>
          <button
            onClick={() => {
              setOpened(!opened);
            }}
          >
            <MenuIcon className="h-[1rem] w-auto" />
          </button>
        </div>
      </div>
      <div
        className={`bg-text-primary bg-opacity-50 fixed inset-0 z-50 backdrop-blur-[1.5px] transition-opacity duration-300 ${
          opened ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpened(false)}
      >
        <div
          className={`bg-white h-full w-72 fixed right-0 overflow-y-auto transition-transform duration-300 ${
            opened ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full flex justify-end px-3 py-2 border-b-[1px] h-[3rem] items-center">
            <button
              onClick={() => setOpened(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="px-4 py-4">
            <MenuItems
              selected={selected}
              onSelected={(project) => {
                onSelected(project);
                setOpened(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
