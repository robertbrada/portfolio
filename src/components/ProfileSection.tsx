import me from "../assets/images/robert/aztec-profile-photo.jpg";
import { LinkedinLogo } from "./logos/LinkedinLogo";
import { GithubLogo } from "./logos/GithubLogo";
import { XLogo } from "./logos/XLogo";

const aIconClass =
  "hover:scale-[1.15] duration-100 transition-transform";
const iconHoverClasses = "px-1 py-1";

export function ProfileSection() {
  return (
    <div>
      <img
        className="rounded-md mx-auto w-full h-auto"
        alt="Robert Brada"
        src={me}
      />
      <section className="flex text-slate-400 text-xs font-light mt-4 space-x-4 items-center justify-center">
        <a
          href="https://x.com/0xrbrada"
          target="_blank"
          className={aIconClass}
        >
          <XLogo
            className={`h-[1.4rem] w-auto display:inline-block cursor-pointer ${iconHoverClasses}`}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/robert-brada-252474112/"
          target="_blank"
          className={aIconClass}
        >
          <LinkedinLogo
            className={`h-[1.6rem] w-auto display:inline-block cursor-pointer ${iconHoverClasses}`}
          />
        </a>
        <a
          href="https://github.com/robertbrada"
          target="_blank"
          className={aIconClass}
        >
          <GithubLogo
            className={`h-[1.6rem] w-auto display:inline-block cursor-pointer ${iconHoverClasses}`}
          />
        </a>
      </section>
    </div>
  );
}
