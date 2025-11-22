import { GithubLogo } from '../logos/GithubLogo';
import { LoomLogo } from '../logos/LoomLogo';
import { MediumLogo } from '../logos/MediumLogo';
import { WebsiteIcon } from '../icons/WebsiteIcon';
import { XLogo } from '../logos/XLogo';
import { YouTubeLogo } from '../logos/YouTubeLogo';

type ReferenceType = 'github' | 'web' | 'loom' | 'youtube' | 'medium' | 'x';

export interface Reference {
  type: ReferenceType;
  link: string;
  description: string;
}

interface ReferencesProps {
  references: Reference[];
}
const aIconClass =
  'hover:text-text-primary duration-200 transition-transform hover:translate-x-1 flex items-center gap-1.5 text-sm w-fit';

const iconCommonClassName = 'w-[1rem] cursor-pointer my-2';
const icons: Record<ReferenceType, React.ReactNode> = {
  github: <GithubLogo className={`h-[0.75rem] ${iconCommonClassName}`} />,
  loom: <LoomLogo className={`h-[0.75rem]  ${iconCommonClassName}`} />,
  medium: <MediumLogo className={`h-[0.75rem]  ${iconCommonClassName}`} />,
  web: <WebsiteIcon className={`h-[0.75rem]  ${iconCommonClassName}`} />,
  x: <XLogo className={`h-[0.7rem]  ${iconCommonClassName}`} />,
  youtube: <YouTubeLogo className={`h-[0.75rem]  ${iconCommonClassName}`} />,
};

export const References = ({ references }: ReferencesProps) => {
  return (
    <ul>
      <div className="text-sm mb-2 border-b-[1px] pb-2 opacity-70 xl:hidden">
        Reference links:
      </div>
      {references.map((reference, index) => (
        <li key={index} className="">
          <a href={reference.link} target="_blank" className={aIconClass}>
            {icons[reference.type]}
            <span className="text-sm">{reference.description}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
