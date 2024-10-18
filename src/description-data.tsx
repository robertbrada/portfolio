import { Project } from "./types";
import me from "./assets/images/me.jpg";
import { LinkedinLogo } from "./components/LinkedinLogo";
import { GithubLogo } from "./components/GithubLogo";
import { XLogo } from "./components/XLogo";

const aIconClass = "hover:scale-[1.15] duration-100 transition-transform";
const iconHoverClasses = "px-1 py-1 ";

const descriptions: Record<Project, React.ReactNode> = {
  [Project.Trezor]: (
    <div>
      <p>
        I joined{" "}
        <a
          href="https://satoshilabs.com/"
          target="_blank"
          className="text-[#03854D] hover:underline"
        >
          SatoshiLabs
        </a>{" "}
        in 2020 as a frontend developer. With the team we were building{" "}
        <a
          href="https://trezor.io/trezor-suite"
          target="_blank"
          className="text-[#03854D] hover:underline"
        >
          Trezor Suite
        </a>{" "}
        which is a web interface to interact with the{" "}
        <a
          href="https://trezor.io/"
          target="_blank"
          className="text-[#03854D] hover:underline"
        >
          Trezor
        </a>{" "}
        hardware wallet. My main job was to make existing interface more user
        friendly and interactive based on the user feedback.
      </p>
      <p className="mt-2">
        Below you can see some example screens that I have worked on in the{" "}
        <a
          href="https://trezor.io/trezor-suite"
          target="_blank"
          className="text-[#03854D] hover:underline"
        >
          Trezor Suite
        </a>{" "}
        web app. The design didn't change since 2020.
      </p>
    </div>
  ),
  [Project.CrocoFinance]: (
    <div>
      <p>
        Croco Finance started as a 4-week{" "}
        <a
          href="https://ethglobal.com/events/ethonline"
          target="_blank"
          className="text-croco hover:underline"
        >
          ETH Online hackathon
        </a>{" "}
        project. We got a price for the top 3 projects. Later we secured a grant
        from{" "}
        <a
          href="https://app.uniswap.org/"
          target="_blank"
          className="text-croco hover:underline"
        >
          Uniswap
        </a>{" "}
        to support newer version of the protocol. The app measures so-called{" "}
        <a
          href=" https://support.uniswap.org/hc/en-us/articles/20904453751693-What-is-Impermanent-Loss"
          target="_blank"
          className="text-croco hover:underline"
        >
          impermanent loss
        </a>{" "}
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
      <a
        href="https://support.uniswap.org/hc/en-us/articles/20904453751693-What-is-Impermanent-Loss"
        target="_blank"
        className="text-duo hover:underline"
      >
        DuoCards
      </a>{" "}
      language app as part of a hiring process.
    </div>
  ),
  [Project.Eigen]: (
    <div>
      <p>
        This is a support project for the the{" "}
        <a
          href="https://www.eigenlayer.xyz/"
          target="_blank"
          className="text-[#3a24b5] hover:underline"
        >
          EigenLayer
        </a>{" "}
        re-staking protocol. The company I worked in (
        <a
          href="https://rockawayx.com/"
          target="_blank"
          className="text-[#3a24b5] hover:underline"
        >
          RockawayX
        </a>
        ) was interested in monitoring EigenLayer AVSs (Actively Validated
        Services). This web-app tracks events that happen on the{" "}
        <a
          href="https://www.eigenda.xyz/"
          target="_blank"
          className="text-[#3a24b5] hover:underline"
        >
          EigenDA
        </a>{" "}
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
        {" "}
        <a
          href="https://observatory.zone/"
          target="_blank"
          className="text-observatory hover:underline"
        >
          Observatory
        </a>{" "}
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
        <a
          href="https://smartdelegation.app/"
          target="_blank"
          className="text-sdp hover:underline"
        >
          Smart Delegation App
        </a>{" "}
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
        {" "}
        <a
          href="https://stakebar.io/"
          target="_blank"
          className="text-stakebar hover:underline"
        >
          StakeBar
        </a>{" "}
        is a tool built on top of the{" "}
        <a
          href="https://observatory.zone/"
          target="_blank"
          className="text-stakebar hover:underline"
        >
          Observatory
        </a>{" "}
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
            <a
              href="https://satoshilabs.com/"
              target="_blank"
              className="text-[#255ed9] hover:underline"
            >
              SatoshiLabs
            </a>{" "}
            in 2020 and later on started work at{" "}
            <a
              href="https://rockawayx.com/"
              target="_blank"
              className="text-[#255ed9] hover:underline"
            >
              RockawayX
            </a>{" "}
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
