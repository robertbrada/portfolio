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
        <A project={Project.Trezor} href="https://trezor.io/">
          Trezor
        </A>{" "}
        hardware wallet. My main job was to make existing interface more user
        friendly and interactive based on the user feedback.
      </p>
      <p className="mt-2">
        Below you can see some example screens that I have worked on in the{" "}
        <A project={Project.Trezor} href="https://trezor.io/trezor-suite">
          Trezor Suite
        </A>{" "}
        web app. The design didn't change since 2020.
      </p>
    </div>
  ),
  [Project.CrocoFinance]: (
    <div>
      <p>
        Croco Finance started as a 4-week{" "}
        <A
          project={Project.CrocoFinance}
          href="https://ethglobal.com/events/ethonline"
        >
          ETH Online hackathon
        </A>{" "}
        project. We got a price for the top 3 projects. Later we secured a grant
        from{" "}
        <A project={Project.CrocoFinance} href="https://app.uniswap.org/">
          Uniswap
        </A>{" "}
        to support newer version of the protocol. The app measures so-called{" "}
        <A
          project={Project.CrocoFinance}
          href="https://support.uniswap.org/hc/en-us/articles/20904453751693-What-is-Impermanent-Loss"
        >
          impermanent loss
        </A>{" "}
        on Uniswap decentralized exchange.
      </p>
      <p>
        I designed and developed the UI from scratch while my co-founder was
        building the data-fetching part. The main challenge was designing the
        simulator in a way that makes it easy to understand for the end user. We
        got a ton of positive feedback from the community and this work opened
        us door for future job offers.
      </p>
      <p className="mt-2">
        The app is not running now as me and my co-founder got a full-time jobs
        and running the app required more time and money to cover the costs.
      </p>
    </div>
  ),
  [Project.DuoCards]: (
    <div>
      Here I took a break from tech-oriented products and tried to to something
      more playful. This was purely a design project where I tried to redesig
      landing page of{" "}
      <A project={Project.DuoCards} href="https://duocards.com/en/">
        DuoCards
      </A>{" "}
      language app as part of a hiring process.
    </div>
  ),
  [Project.Eigen]: (
    <div>
      <p>
        This is a support project for the the{" "}
        <A project={Project.Eigen} href="https://www.eigenlayer.xyz/">
          EigenLayer
        </A>{" "}
        re-staking protocol. The company I worked in ({" "}
        <A project={Project.Eigen} href="https://rockawayx.com/">
          RockawayX
        </A>{" "}
        ) was interested in monitoring EigenLayer AVSs (Actively Validated
        Services). This web-app tracks events that happen on the{" "}
        <A project={Project.Eigen} href="https://www.eigenda.xyz/">
          EigenDA
        </A>{" "}
        AVS because operators of this service couldn't make sense of the
        protocol traffic.
      </p>
      <p className="mt-2">
        I was responsible for the app UI. The objective was to make it super
        simple and clean to deliver it as fast as possible but still in a good
        shape.
      </p>
    </div>
  ),

  [Project.Observatory]: (
    <div>
      <p>
        <A project={Project.Observatory} href="https://observatory.zone/">
          Observatory
        </A>{" "}
        started as an app measuring decentralization of blockchains in the
        Cosmos ecosystem. Later we added newsfeed, information about governance
        etc. It's a very data-heavy app which required a lot of work to make
        everything clear and understandable.
      </p>
    </div>
  ),
  [Project.SDP]: (
    <div>
      <p>
        {" "}
        <A project={Project.SDP} href="https://smartdelegation.app/">
          Smart Delegation App
        </A>{" "}
        is an app that helps blockchain foundations delegated their
        cryptocurrency to validators that perform well. The foundation can
        specify their own rules that drive the asset distribution. It was very
        challenging to fit a lot of information into a small space and make it
        all interactive.
      </p>
      <p className="mt-2">
        As of the end of 2024 the app is still up and running and being used by
        paying customers.
      </p>
    </div>
  ),

  [Project.StakeBar]: (
    <div>
      <p>
        <A project={Project.StakeBar} href="https://stakebar.io/">
          StakeBar
        </A>{" "}
        is a tool built on top of the{" "}
        <A project={Project.StakeBar} href="https://observatory.zone/">
          Observatory
        </A>{" "}
        project I was working on before. It picks validators on behalf of users
        who users who want to stake their cryptocurrencies. The validators are
        picked in such a way that decentralizes the network and maximizes the
        rewards.
      </p>
      <p className="mt-2">
        I was the owner of this project as I designed it all and built from the
        most part.The app is still running and being used. However, the project
        is not being actively developed because the Cosmos ecosystem is not
        growing.
      </p>
    </div>
  ),
  [Project.RobertBrada]: (
    <div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="text-justify ">
          <p>
            {/* Happy to see you on my portfolio page!  */}I am a software
            developer and product designer based in Prague - Czech Republic. I
            work mostly on frontend side of things. Creating the initial
            wireframes and then iterating as I interact with the product.
            Usually I work with Figma, React, Next.js. I studied Cybernetics but
            got hooked up by crypto in 2017 and since then following that path.
            I joined{" "}
            <A project={Project.RobertBrada} href="https://satoshilabs.com/">
              SatoshiLabs
            </A>{" "}
            in 2020 and later on started work at{" "}
            <A project={Project.RobertBrada} href="https://rockawayx.com/">
              RockawayX
            </A>{" "}
            which is a crypto company running VC team, staking services and own
            Labs developer studio.
          </p>
          <p className="mt-2">
            Even though I have software background I love creating great
            eye-catching, easy-to-navigate easy-to-use products with simple UI
            that are a pleasure to use. On this page you can see some that I
            designed and built either by myself or in collaborations with my
            colleagues.
          </p>
          <p className="mt-2">
            If you like my portfolio I would love to chat about your ideas or
            possible collaboration. You can reach me out at on the link below.
          </p>
          <p className="mt-4">Robert</p>
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
