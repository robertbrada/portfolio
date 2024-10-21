import { Project } from "./types";
import me from "./assets/images/me.jpg";
import { LinkedinLogo } from "./components/LinkedinLogo";
import { GithubLogo } from "./components/GithubLogo";
import { XLogo } from "./components/XLogo";
import { A } from "./components/A";

const aIconClass = "hover:scale-[1.15] duration-100 transition-transform";
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
        <div className="text-justify ">
          <p>
            {/* Happy to see you on my portfolio page!  */}
            {/* I create wireframes in Figma, build the MVP and then I iterate on it as we see the needs. */}
            I am a software developer and product designer based in Prague,
            Czech Republic. I hold degree in Cybernetics but I got hooked on
            crypto in 2017 and I have been following that path since then. In
            2020, I joined{" "}
            <A project={Project.RobertBrada} href="https://satoshilabs.com/">
              SatoshiLabs
            </A>
            , and a year later, I joined{" "}
            <A project={Project.RobertBrada} href="https://rockawayx.com/">
              RockawayX
            </A>{" "}
            as a founding member of its developer division.
            {/* running staking services and own developer studio. */}
            {/* I was a founding member of its developer studio */}
          </p>
          <p className="mt-2">
            Despite my software background I love creating eye-catching and
            easy-to-navigate products that are a pleasure to use. On this page,
            you can see some of the projects I've built, either on my own or in
            collaboration with my great colleagues.
          </p>
          <p className="mt-2">
            If you like my portfolio, I'd be happy to chat about your ideas and
            potential collaboration. You can reach me via the links below.
          </p>
          <p className="mt-6">Have fun around here!</p>
          <p className="mt-6">Robert</p>
        </div>
        <img
          className="w-48 auto h-min rounded-sm mx-auto mt-2 md:mx-0"
          alt="Robert Brada"
          src={me}
        />
      </div>
      <section className="flex text-slate-400 text-xs font-light mt-12 space-x-6 pl-1 items-center justify-center">
        <a href="https://x.com/0xrbrada" target="_blank" className={aIconClass}>
          <XLogo
            className={`h-[2rem] w-auto display:inline-block cursor-pointer ${iconHoverClasses} `}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/robert-brada-252474112/"
          target="_blank"
          className={aIconClass}
        >
          <LinkedinLogo
            className={`h-[2.3rem] w-auto display:inline-block cursor-pointer ${iconHoverClasses}`}
          />
        </a>
        <a
          href="https://github.com/robertbrada"
          target="_blank"
          className={aIconClass}
        >
          <GithubLogo
            className={`h-[2.3rem] w-auto display:inline-block cursor-pointer ${iconHoverClasses}`}
          />
        </a>
      </section>
    </div>
  ),
};

export default descriptions;
