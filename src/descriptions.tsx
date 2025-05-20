import { Project } from "./types";
import me from "./assets/images/robert/ja-cropped.jpg";
import { LinkedinLogo } from "./components/logos/LinkedinLogo";
import { GithubLogo } from "./components/logos/GithubLogo";
import { XLogo } from "./components/logos/XLogo";
import { WormholeLogo } from "./components/logos/WormholeLogo";
import { RockawayLogo } from "./components/logos/RockawayLogo";
import { TrezorLogo } from "./components/logos/TrezorLogo";
import { A } from "./components/A";
import { ObservatoryLogo } from "./components/logos/ObservatoryLogo";
import { MayanLogo } from "./components/logos/MayanLogo";

const aIconClass = "hover:scale-[1.15] duration-100 transition-transform";
const aLogoClass = "hover:scale-[1.1] duration-100 transition-transform";
const iconHoverClasses = "px-1 py-1 ";

const descriptions: Record<Project, React.ReactNode> = {
  [Project.Trezor]: (
    <div>
      <p>
        I joined{" "}
        <A project={Project.Trezor} href="https://satoshilabs.com/">
          SatoshiLabs
        </A>{" "}
        in 2020 as a frontend developer. With the team we were building{" "}
        <A project={Project.Trezor} href="https://trezor.io/trezor-suite">
          Trezor Suite
        </A>{" "}
        which is a web app that people use to interact with the{" "}
        <A project={Project.Trezor} href="https://trezor.io/">
          Trezor
        </A>{" "}
        hardware wallet. My main job was to help with Ethereum integration and
        to improve the existing interface based on the feedback from QA
        engineers and everyday users.
      </p>
      <p className="mt-2">
        Below you can see some screens from the{" "}
        <A project={Project.Trezor} href="https://trezor.io/trezor-suite">
          Trezor Suite
        </A>{" "}
        app that I have worked on in particular.
      </p>
    </div>
  ),
  [Project.CrocoFinance]: (
    <div>
      <p>
        Croco Finance started as a{" "}
        <A
          project={Project.CrocoFinance}
          href="https://ethglobal.com/events/ethonline"
        >
          hackathon
        </A>{" "}
        project. We got a price for the best projects and later we secured a
        grant from{" "}
        <A project={Project.CrocoFinance} href="https://app.uniswap.org/">
          Uniswap
        </A>{" "}
        to support newer version of their protocol. The app measures so-called{" "}
        <A
          project={Project.CrocoFinance}
          href="https://support.uniswap.org/hc/en-us/articles/20904453751693-What-is-Impermanent-Loss"
        >
          impermanent loss
        </A>{" "}
        that liquidity providers are exposed to on decentralized exchanges. I
        designed and built the whole UI while my friend was building the
        data-fetching part. We got a ton of positive feedback from the community
        and this work opened us door for future job offers.
      </p>

      <p className="mt-2">
        The app is not running now because it required more time and money to
        keep it up-to-date which we couldn't give it at that time.
      </p>
    </div>
  ),
  [Project.DuoCards]: (
    <div>
      This was a 2-day design project created in collaboration with the team
      building the{" "}
      <A project={Project.DuoCards} href="https://duocards.com/en/">
        DuoCards
      </A>{" "}
      language-learning app. The task was to redesign the existing landing page
      of{" "}
      <A project={Project.DuoCards} href="https://duocards.com/en/">
        duocards.com
      </A>{" "}
      to make it more appealing to users. I present it here as my attempt to
      create something non-technical, outside of the crypto space.{" "}
    </div>
  ),
  [Project.Eigen]: (
    <div>
      <p>
        This app was created a support project for the the{" "}
        <A project={Project.Eigen} href="https://www.eigenlayer.xyz/">
          EigenLayer
        </A>{" "}
        re-staking protocol. The company I worked for (
        <A project={Project.Eigen} href="https://rockawayx.com/">
          RockawayX
        </A>
        ) was interested in monitoring EigenLayer AVSs (Actively Validated
        Services). This web app displays events that occurred on the{" "}
        <A project={Project.Eigen} href="https://www.eigenda.xyz/">
          EigenDA
        </A>{" "}
        AVS, as operators of this service has a hard time understanding the
        protocol traffic.
      </p>
      <p className="mt-2">
        I was responsible for the app's frontend. The objective was to make it
        super simple in order to deliver it as fast as possible but still make
        it look legit and easy to use.
      </p>
    </div>
  ),

  [Project.Observatory]: (
    <div>
      <p>
        Observatory started as an app measuring decentralization of blockchains
        in the{" "}
        <A project={Project.Observatory} href="https://cosmos.network/">
          Cosmos
        </A>{" "}
        network. To do that the app uses custom global network of sensors to
        detect location of individuals nodes. It's a very data-heavy app which
        required a lot of work and attention to detail in order to make it look
        clean and easy to navigate. We built this app at{" "}
        <A project={Project.Observatory} href="https://rockawayx.com/">
          RockawayX
        </A>{" "}
        . I was working in the frontend team since it's inception. app is
        complex and building it required a team effort during my stay at{" "}
        <A project={Project.Observatory} href="https://rockawayx.com/">
          RockawayX
        </A>
        . The app is live and can be viewed at{" "}
        <A project={Project.Observatory} href="https://observatory.zone/">
          observatory.zone
        </A>
        .
      </p>
    </div>
  ),
  [Project.SDP]: (
    <div>
      <p>
        This tool was created for entities with large token holdings{" "}
        {`(typically
        blockchain foundations)`}{" "}
        that need to delegate their tokens among validators in the{" "}
        <A project={Project.SDP} href="https://cosmos.network/">
          Cosmos
        </A>{" "}
        network. Validators are scored based on their performance, location and
        more. Each user can specify his own rules (left part of the screen) and
        the decentralization engine running on the backend computes stake
        distribution according to the rules specified by user.
      </p>
      <p className="pt-2">
        This app was created during my time at{" "}
        <A project={Project.SDP} href="https://rockawayx.com/">
          RockawayX
        </A>
        . I was fully responsible for the frontend design and code. The
        challenging part was delivering such complex UI in a short time of 3
        months. We successfully launched and got first paying customers right
        after.
      </p>
      <p className="mt-2">
        The app is live at{" "}
        <A project={Project.SDP} href="https://smartdelegation.app/">
          smartdelegation.app
        </A>{" "}
        but access is given to paying customers only. However, you can watch a{" "}
        <A
          project={Project.SDP}
          href="https://www.loom.com/share/63751416a2b946baa0fd97af36205485?sid=dbd91a4f-0d60-47e5-be26-7bf2ce6d940a"
        >
          walkthrough video
        </A>
        .
      </p>
    </div>
  ),

  [Project.StakeBar]: (
    <div>
      <p>
        StakeBar simplified the process of staking on{" "}
        <A project={Project.StakeBar} href="https://cosmos.network/">
          Cosmos
        </A>{" "}
        networks for users who didn't want to deal with choosing a validator
        they would delegate their cryptocurrency to. The app picks the best
        validators (in terms of APR and decentralization) for the users. Is is
        built on top of the{" "}
        <A project={Project.StakeBar} href="https://observatory.zone/">
          Observatory
        </A>{" "}
        project I worked on previously.
      </p>

      <p className="mt-2">
        I owned this project and I designed it and built it for the most part.
        The app is still accessible at{" "}
        <A project={Project.StakeBar} href="https://stakebar.io/">
          stakebar.io
        </A>{" "}
        but it's no longer actively maintained as in the company has shifted its
        focus to{" "}
        <A project={Project.StakeBar} href="https://solana.com/">
          Solana
        </A>{" "}
        projects.
      </p>
    </div>
  ),
  [Project.RobertBrada]: (
    <div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="text-justify flex-grow basis-3/4">
          <p>
            {/* Happy to see you on my portfolio page!  */}
            {/* I create wireframes in Figma, build the MVP and then I iterate on it as we see the needs. */}
            I'm a software engineer from Prague. I joined the crypto community
            in 2018 after attending DevCon4 Ethereum conference. After
            university, I worked in{" "}
            <A project={Project.RobertBrada} href="https://satoshilabs.com/">
              SatoshiLabs
            </A>
            , the invertor of{" "}
            <A
              project={Project.RobertBrada}
              href="https://trezor.io/?gclsrc=aw.ds&&utm_source=google&gad_source=1&gad_campaignid=20810887858&gbraid=0AAAAAClLb_tFxu1eFC-IlIHAo3gOIiFPe&utm_medium=cpc&utm_campaign=PMax%20%7C%20Feed%20%7C%20CZ&utm_id=20800700799&gclid=CjwKCAjwravBBhBjEiwAIr30VM7Xp3xUJl7RC2c2El2LxjNkwpFBZa-9ZEXGWTvONWMC7SOQ6BWSxRoCMHgQAvD_BwE"
            >
              Trezor
            </A>{" "}
            wallet. One year later, I joined{" "}
            <A project={Project.RobertBrada} href="https://rockawayx.com/">
              RockawayX
            </A>{" "}
            as a founding member of its engineering division. We started
            developing staking tools for Cosmos blockchains. Currently, we're
            running solvers and bridging millions of USD value daily through{" "}
            <A project={Project.RobertBrada} href="https://wormhole.com/">
              Wormhole
            </A>{" "}
            and{" "}
            <A project={Project.RobertBrada} href="https://mayan.finance/">
              Mayan
            </A>{" "}
            cross-chain bridges.
            {/* running staking services and own developer studio. */}
            {/* I was a founding member of its developer studio */}
          </p>
          <p className="mt-2">
            I get driven by building products that are used by real people. This
            site highlights work I’ve done on my own and in collaboration with
            my great colleagues.
          </p>
          <p className="mt-2">
            If you have an idea about possible collaboration, I would't love to
            hear about it. Leave me a message on{" "}
            <A project={Project.RobertBrada} href="https://x.com/0xrbrada">
              X
            </A>{" "}
            or{" "}
            <A
              project={Project.RobertBrada}
              href="https://www.linkedin.com/in/robert-brada-252474112/"
            >
              LinkedIn
            </A>
            .
          </p>
          <p className="mt-6">Robert</p>
          <div className="align-center my-16 mx-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center justify-items-center">
              {/* <WormholeLogo className="w-44 sm:w-36 xs:w-28" /> */}
              <a
                href="https://www.rockawayx.com/"
                target="_blank"
                className={aLogoClass}
              >
                <RockawayLogo className={`w-[6.3rem]`} />
              </a>
              <a
                href="https://trezor.io/"
                target="_blank"
                className={aLogoClass}
              >
                <TrezorLogo className="w-20" />
              </a>
              <a
                href="https://observatory.zone/"
                target="_blank"
                className={aLogoClass}
              >
                <ObservatoryLogo className="w-32" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center justify-items-center mt-8 md:my-6 mx-20">
              <a
                href="https://wormhole.com/"
                target="_blank"
                className={aLogoClass}
              >
                <WormholeLogo className="w-28" />
              </a>
              <a
                href="https://mayan.finance/"
                target="_blank"
                className={aLogoClass}
              >
                <MayanLogo className="w-24" />
              </a>
            </div>
            {/* <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
              <div />
              <DebridgeLogo className="w-[7rem]" />
              <div />
            </div> */}
          </div>
        </div>
        <div className="mt-2 flex-grow basis-1/4">
          <img
            className="rounded-md mx-auto max-w-60 md:max-w-full h-auto"
            alt="Robert Brada"
            src={me}
          />
          <section className="flex text-slate-400 text-xs font-light mt-4 space-x-6 md:space-x-2 pl-1 items-center justify-center">
            <a
              href="https://x.com/0xrbrada"
              target="_blank"
              className={aIconClass}
            >
              <XLogo
                className={`h-[1.4rem] w-auto display:inline-block cursor-pointer ${iconHoverClasses} `}
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
      </div>
    </div>
  ),
  [Project.Wormhole]: (
    <div>
      At RockawayX we build solver for Wormhole's Fast Transfer protocol.
    </div>
  ),
  [Project.Mayan]: <div>At RockawayX we build solver for Mayan bridge.</div>,
};

export default descriptions;
