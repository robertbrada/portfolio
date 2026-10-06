import { WormholeLogo } from '../logos/WormholeLogo';
import { RockawayLogo } from '../logos/RockawayLogo';
import { SatoshilabsLogo } from '../logos/SatoshilabsLogo';
import { ObservatoryLogo } from '../logos/ObservatoryLogo';
import { MayanLogo } from '../logos/MayanLogo';
import { AztecLogo } from '../logos/AztecLogo';
import { trackLinkClicked } from '../../analytics';
// import { UniswapLogo } from '../logos/UniswapLogo';

const aLogoClass =
  'hover:scale-[1.1] duration-100 transition-all grayscale opacity-40 hover:grayscale-0 hover:opacity-100';

interface Logo {
  name: string;
  href: string;
  logo: React.ReactNode;
}

const logos: Logo[] = [
  {
    name: 'RockawayX',
    href: 'https://www.rockawayx.com/',
    logo: <RockawayLogo className="w-[10rem]" />,
  },
  {
    name: 'Aztec',
    href: 'https://aztec.network/',
    logo: <AztecLogo className="w-32" />,
  },
  {
    name: 'SatoshiLabs',
    href: 'https://trezor.io/',
    logo: <SatoshilabsLogo className="w-44" />,
  },
  {
    name: 'Observatory',
    href: 'https://observatory.zone/',
    logo: <ObservatoryLogo className="w-48" />,
  },
  {
    name: 'Wormhole',
    href: 'https://wormhole.com/',
    logo: <WormholeLogo className="w-44" />,
  },
  {
    name: 'Mayan',
    href: 'https://mayan.finance/',
    logo: <MayanLogo className="w-36" />,
  },
  // { name: 'Uniswap', href: 'https://uniswap.org/', logo: <UniswapLogo className="w-44" /> },
];

export function LogosSection() {
  return (
    <div className="flex flex-wrap justify-start items-center gap-x-16 gap-y-10">
      {logos.map(({ name, href, logo }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          className={aLogoClass}
          onClick={() =>
            trackLinkClicked({ location: 'logo', url: href, label: name })
          }
        >
          {logo}
        </a>
      ))}
    </div>
  );
}
