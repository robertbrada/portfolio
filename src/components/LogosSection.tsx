import { WormholeLogo } from "./logos/WormholeLogo";
import { RockawayLogo } from "./logos/RockawayLogo";
import { TrezorLogo } from "./logos/TrezorLogo";
import { ObservatoryLogo } from "./logos/ObservatoryLogo";
import { MayanLogo } from "./logos/MayanLogo";
import { AztecLogo } from "./logos/AztecLogo";

const aLogoClass =
  "hover:scale-[1.1] duration-100 transition-all grayscale opacity-40 hover:grayscale-0 hover:opacity-100";

export function LogosSection() {
  return (
    <div className="flex flex-wrap justify-start items-center gap-14 mt-20 mb-4">
      <a
        href="https://www.rockawayx.com/"
        target="_blank"
        className={aLogoClass}
      >
        <RockawayLogo className={`w-[10rem]`} />
      </a>
      <a href="https://aztec.network/" target="_blank" className={aLogoClass}>
        <AztecLogo className="w-32" />
      </a>
      <a href="https://trezor.io/" target="_blank" className={aLogoClass}>
        <TrezorLogo className="w-32" />
      </a>
      <a
        href="https://observatory.zone/"
        target="_blank"
        className={aLogoClass}
      >
        <ObservatoryLogo className="w-48" />
      </a>
      <a href="https://wormhole.com/" target="_blank" className={aLogoClass}>
        <WormholeLogo className="w-44" />
      </a>
      <a href="https://mayan.finance/" target="_blank" className={aLogoClass}>
        <MayanLogo className="w-36" />
      </a>
    </div>
  );
}
