import crocoCrocosHorizontal from "./assets/images/croco/crocos-horizontal.svg";
import crocoLanding2 from "./assets/images/croco/landing-2.svg";
import crocoPoolsV3 from "./assets/images/croco/pools-v3.svg";
import crocoSimulatorV3 from "./assets/images/croco/simulator-v3.svg";
import crocoSimulator from "./assets/images/croco/simulator.svg";
import duoOriginal from "./assets/images/duocards/original.png";
import duoRedesignBlue from "./assets/images/duocards/redesign-blue.svg";
import duoRedesign from "./assets/images/duocards/redesign.svg";
import eigenNewsfeed from "./assets/images/eigen/newsfeed.svg";
import eigenOperatorFutureLight from "./assets/images/eigen/operator-future-light.svg";
import eigenServiceDark from "./assets/images/eigen/service-dark.svg";
import observatoryDashboardDark from "./assets/images/observatory/dashboard-dark.svg";
import observatoryDashboardLight from "./assets/images/observatory/dashboard-light.svg";
import observatoryValidatorsList from "./assets/images/observatory/validators-list.svg";
import observatoryValidators from "./assets/images/observatory/validators.svg";
import sdpChain from "./assets/images/sdp/chain.svg";
import sdpGuide from "./assets/images/sdp/guide.svg";
import sdpValidators from "./assets/images/sdp/validators.svg";
import stakeCheers from "./assets/images/stakebar/cheers.svg";
import stakeInput from "./assets/images/stakebar/input.svg";
import stakeLandingBlue from "./assets/images/stakebar/landing-blue.svg";
import stake1 from "./assets/images/stakebar/ui-1.svg";
import trezorChart from "./assets/images/trezor/chart.svg";
import trexorEthTx from "./assets/images/trezor/eth-transaction.svg";
import trezorWallet from "./assets/images/trezor/wallet.svg";
import mayanApp from "./assets/images/mayan/mayan-app.png";
import wormholeApp from "./assets/images/wormhole/wormhole-app.png";
import { Project } from "./types";

export interface ProjectImage {
  src: string;
  border?: boolean;
  description?: string;
}

const images: Record<Project, ProjectImage[]> = {
  [Project.Trezor]: [
    { src: trexorEthTx, border: true },
    { src: trezorChart, border: false },
    { src: trezorWallet, border: false },
  ],
  [Project.CrocoFinance]: [
    {
      src: crocoLanding2,
      border: true,
      description:
        "Landing page of Croco Finance with special Christmas design",
    },
    {
      src: crocoSimulator,
      border: true,
      description:
        "Simulator: on the left the user changes prices of assets in selected pool. On the right side he can see compare current and simulated states",
    },
    {
      src: crocoCrocosHorizontal,
      border: true,
      description: "All croco avatars being shown on the web",
    },
    {
      src: crocoPoolsV3,
      border: true,
      description: "Design of the newer version supporting Uniswap v3",
    },
    {
      src: crocoSimulatorV3,
      border: true,
      description: "Simulator of the newer version supporting Uniswap v3",
    },
  ],
  [Project.DuoCards]: [
    {
      src: duoRedesign,
      border: false,
      description: "Redesigned landing page in green",
    },
    {
      src: duoRedesignBlue,
      border: false,
      description: "Redesigned landing page in blue",
    },
    {
      src: duoOriginal,
      border: true,
      description:
        "The existing landing page of duocards.com that should be redesigned",
    },
  ],
  [Project.Eigen]: [
    { src: eigenServiceDark, border: false },
    { src: eigenNewsfeed, border: true },
    {
      src: eigenOperatorFutureLight,
      border: true,
      description: "This page shows the future vision for this product design ",
    },
  ],
  [Project.Observatory]: [
    { src: observatoryDashboardLight, border: false },
    { src: observatoryValidatorsList, border: false },
    { src: observatoryValidators, border: false },
    { src: observatoryDashboardDark, border: false },
  ],
  [Project.SDP]: [
    { src: sdpChain, border: true },
    { src: sdpValidators, border: true },
    { src: sdpGuide, border: true },
  ],
  [Project.StakeBar]: [
    { src: stakeLandingBlue, border: false },
    { src: stakeInput, border: false },
    { src: stakeCheers, border: false },
    { src: stake1, border: false },
  ],
  [Project.RobertBrada]: [],
  [Project.Wormhole]: [{ src: wormholeApp, border: false }],
  [Project.Mayan]: [{ src: mayanApp, border: false }],
};

export default images;
