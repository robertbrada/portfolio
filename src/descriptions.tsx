import { Project } from './types';
import { A } from './components/A';
import { LinkedinLogo } from './components/logos/LinkedinLogo';
import { GithubLogo } from './components/logos/GithubLogo';
import { XLogo } from './components/logos/XLogo';

const aIconClass =
  'inline-block transition-transform duration-200 hover:-translate-y-0.5';
const iconHoverClasses = 'px-1 py-1';

const descriptions: Record<Project, React.ReactNode> = {
  [Project.Trezor]: (
    <div>
      <p>
        I joined{' '}
        <A project={Project.Trezor} href="https://satoshilabs.com/">
          SatoshiLabs
        </A>{' '}
        in 2020 as a frontend developer. With the team we were building{' '}
        <A project={Project.Trezor} href="https://trezor.io/trezor-suite">
          Trezor Suite
        </A>{' '}
        which is a web app that people use to interact with the{' '}
        <A project={Project.Trezor} href="https://trezor.io/">
          Trezor
        </A>{' '}
        hardware wallet. My main job was to help with Ethereum integration and
        to improve the existing interface based on the feedback from QA
        engineers and everyday users.
      </p>
      <p className="mt-2">
        Below you can see some screens from the{' '}
        <A project={Project.Trezor} href="https://trezor.io/trezor-suite">
          Trezor Suite
        </A>{' '}
        app that I have worked on in particular.
      </p>
    </div>
  ),
  [Project.CrocoFinance]: (
    <div>
      <p>
        Croco Finance started as a{' '}
        <A
          project={Project.CrocoFinance}
          href="https://ethglobal.com/events/ethonline"
        >
          hackathon
        </A>{' '}
        project. We got a price for the best projects and later we secured a
        grant from{' '}
        <A project={Project.CrocoFinance} href="https://app.uniswap.org/">
          Uniswap
        </A>{' '}
        to support newer version of their protocol. The app measures so-called{' '}
        <A
          project={Project.CrocoFinance}
          href="https://support.uniswap.org/hc/en-us/articles/20904453751693-What-is-Impermanent-Loss"
        >
          impermanent loss
        </A>{' '}
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
  [Project.Eigen]: (
    <div>
      <p>
        This app was created as a support project for the{' '}
        <A project={Project.Eigen} href="https://www.eigenlayer.xyz/">
          EigenLayer
        </A>{' '}
        re-staking protocol. The company I worked for (
        <A project={Project.Eigen} href="https://rockawayx.com/">
          RockawayX
        </A>
        ) was interested in monitoring EigenLayer AVSs (Actively Validated
        Services). This web app displays events that occurred on the{' '}
        <A project={Project.Eigen} href="https://www.eigenda.xyz/">
          EigenDA
        </A>{' '}
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
        in the{' '}
        <A project={Project.Observatory} href="https://cosmos.network/">
          Cosmos
        </A>{' '}
        network. To do that the app uses custom global network of sensors to
        detect location of individuals nodes. It's a very data-heavy app which
        required a lot of work and attention to detail in order to make it look
        clean and easy to navigate. We built this app at{' '}
        <A project={Project.Observatory} href="https://rockawayx.com/">
          RockawayX
        </A>{' '}
        . I was working in the frontend team since its inception. The app is
        complex and building it required a team effort during my stay at{' '}
        <A project={Project.Observatory} href="https://rockawayx.com/">
          RockawayX
        </A>
        . The app is live and can be viewed at{' '}
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
        This tool was created for entities with large token holdings{' '}
        {`(typically
        blockchain foundations)`}{' '}
        that need to delegate their tokens among validators in the{' '}
        <A project={Project.SDP} href="https://cosmos.network/">
          Cosmos
        </A>{' '}
        network. Validators are scored based on their performance, location and
        more. Each user can specify his own rules (left part of the screen) and
        the decentralization engine running on the backend computes stake
        distribution according to the rules specified by user.
      </p>
      <p className="pt-2">
        This app was created during my time at{' '}
        <A project={Project.SDP} href="https://rockawayx.com/">
          RockawayX
        </A>
        . I was fully responsible for the frontend design and code. The
        challenging part was delivering such complex UI in a short time of 3
        months. We successfully launched and got first paying customers right
        after.
      </p>
      <p className="mt-2">
        The app is live at{' '}
        <A project={Project.SDP} href="https://smartdelegation.app/">
          smartdelegation.app
        </A>{' '}
        but access is given to paying customers only. However, you can watch a{' '}
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
        StakeBar simplified the process of staking on{' '}
        <A project={Project.StakeBar} href="https://cosmos.network/">
          Cosmos
        </A>{' '}
        networks for users who didn't want to deal with choosing a validator
        they would delegate their cryptocurrency to. The app picks the best
        validators (in terms of APR and decentralization) for the users. It is
        built on top of the{' '}
        <A project={Project.StakeBar} href="https://observatory.zone/">
          Observatory
        </A>{' '}
        project I worked on previously.
      </p>

      <p className="mt-2">
        I owned this project and I designed it and built it for the most part.
        The app is still accessible at{' '}
        <A project={Project.StakeBar} href="https://stakebar.io/">
          stakebar.io
        </A>{' '}
        but it's no longer actively maintained as in the company has shifted its
        focus to{' '}
        <A project={Project.StakeBar} href="https://solana.com/">
          Solana
        </A>{' '}
        projects.
      </p>
    </div>
  ),
  [Project.RobertBrada]: (
    <div>
      <p>
        I'm a software engineer from Prague who builds products end to end. I
        started at{' '}
        <A project={Project.RobertBrada} href="https://satoshilabs.com/">
          SatoshiLabs
        </A>
        , the company behind the{' '}
        <A project={Project.RobertBrada} href="https://trezor.io/">
          Trezor
        </A>{' '}
        wallet, then spent four years as a founding engineer at{' '}
        <A project={Project.RobertBrada} href="https://rockawayx.com/">
          RockawayX
        </A>{' '}
        building data-heavy web apps.
      </p>
      <p className="mt-2">
        In August 2025 I joined{' '}
        <A project={Project.RobertBrada} href="https://aztec.network/">
          Aztec Labs
        </A>
        , where I work on{' '}
        <A project={Project.RobertBrada} href="https://zkpassport.id/">
          ZKPassport
        </A>
        . It verifies identity without revealing the passport, so you can prove
        you're over 18 or a citizen of a given country and nothing else. On the
        side I design and ship my own Mac apps: BlinkMate, PromptBar and
        MacAway.
      </p>
      <p className="mt-2">
        If you have an idea for a collaboration, I'd love to hear about it.
        Leave me a message on{' '}
        <A project={Project.RobertBrada} href="https://x.com/0xrbrada">
          X
        </A>{' '}
        or{' '}
        <A
          project={Project.RobertBrada}
          href="https://www.linkedin.com/in/robert-brada-252474112/"
        >
          LinkedIn
        </A>
        .
      </p>
      <p className="mt-6">Robert</p>
      <section className="flex text-slate-400 text-xs font-light gap-2.5 items-center justify-start mt-6">
        <a href="https://x.com/0xrbrada" target="_blank" className={aIconClass}>
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
  ),
  [Project.Wormhole]: (
    <div>
      At RockawayX we've made a deal with{' '}
      <A project={Project.Wormhole} href="https://wormhole.com/">
        Wormhole
      </A>{' '}
      to build a solver for their <i>Wormhole Fast Transfers</i> protocol. This
      protocol enables USDC transfers across chains within ~ 30 seconds. We
      built a software that provides liquidity and interacts with Solana
      programs to allow just that.
    </div>
  ),
  [Project.Mayan]: (
    <div>
      RockawayX made a deal with{' '}
      <A project={Project.Mayan} href="https://mayan.finance/">
        Mayan
      </A>{' '}
      to boostrap their cross-chain bridge. RockawayX provided initial liquidity
      and we've built a largest solver transferring millions of USD value in
      daily volumes. The solver is a software interacting with Solana and EVM
      smart contracts and rebalances USDC and ETH between its wallets.
    </div>
  ),
  [Project.BlinkMate]: (
    <div>
      <p>
        Staring at a screen all day tires your eyes out. The{' '}
        <A
          project={Project.BlinkMate}
          href="https://www.aao.org/eye-health/tips-prevention/computer-usage"
        >
          20-20-20 rule
        </A>{' '}
        that eye doctors recommend says to look at something about 6 metres away
        for 20 seconds every 20 minutes. Nobody remembers to do that, so
        BlinkMate does the remembering.
      </p>
      <p className="mt-2">
        It sits in the menu bar and nudges you when it's time. You choose how
        often the breaks come, how long they last, and how hard the reminder is
        to ignore: a quiet change of the menu bar icon, a normal macOS
        notification, or a window in the middle of the screen. You also set your
        working hours, so it stays quiet in the evening.
      </p>
      <p className="mt-2">
        I built the app and the{' '}
        <A project={Project.BlinkMate} href="https://blinkmate.app/">
          landing page
        </A>{' '}
        myself. It's published on the{' '}
        <A
          project={Project.BlinkMate}
          href="https://apps.apple.com/app/blinkmate/id6756325660"
        >
          Mac App Store
        </A>
        .
      </p>
    </div>
  ),
  [Project.PromptBar]: (
    <div>
      <p>
        If you use{' '}
        <A project={Project.PromptBar} href="https://claude.ai/">
          Claude
        </A>{' '}
        or{' '}
        <A project={Project.PromptBar} href="https://chatgpt.com/">
          ChatGPT
        </A>{' '}
        daily, you end up retyping the same handful of instructions. PromptBar
        keeps them in the macOS menu bar. One shortcut opens a search box on top
        of whatever app you're in, you pick a prompt, and it's copied and ready
        to paste.
      </p>
      <p className="mt-2">
        Each prompt is an ordinary text file in a folder you choose, not a
        hidden database. So the library stays readable and yours even if you
        stop using the app. That's the main reason people trust a small tool
        like this.
      </p>
      <p className="mt-2">
        I did all of it alone: the native Mac app, the{' '}
        <A project={Project.PromptBar} href="https://promptbar.app/">
          landing page
        </A>{' '}
        and the store listing. It's published on the{' '}
        <A
          project={Project.PromptBar}
          href="https://apps.apple.com/app/promptbar-menu-bar-prompts/id6799008305"
        >
          Mac App Store
        </A>
        .
      </p>
    </div>
  ),
  [Project.MacAway]: (
    <div>
      <p>
        People leave their laptop open all the time, whether they're ordering a
        coffee or stepping into a meeting. MacAway locks it for them. It watches
        the iPhone or Apple Watch you already carry, and when that device moves
        too far away, the Mac locks itself. If it can't tell where you are, it
        locks anyway.
      </p>
      <p className="mt-2">
        Nothing gets installed on the phone, there's no account and no server.
        The Mac measures the Bluetooth signal on its own. The tricky part was
        that this signal jumps around constantly, so turning it into a reliable
        "they walked away" decision took a lot of testing on real hardware.
      </p>
      <p className="mt-2">
        I built the whole product end to end: the Mac app, the{' '}
        <A project={Project.MacAway} href="https://macaway.app/">
          landing page
        </A>{' '}
        and the checkout that sells and verifies licences.
      </p>
    </div>
  ),
};

export default descriptions;
