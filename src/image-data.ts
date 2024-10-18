import crocoCrocosHorizontal from "./assets/images/croco/crocos-horizontal.svg";
import crocoLanding from "./assets/images/croco/landing.svg";
import crocoLanding2 from "./assets/images/croco/landing-2.svg";
import crocoSimulator from "./assets/images/croco/simulator.svg";
import crocoSimulatorV3 from "./assets/images/croco/simulator-v3.svg";
import crocoPoolsV3 from "./assets/images/croco/pools-v3.svg";
import duoOriginal from "./assets/images/duocards/original.png";
import duoRedesignBlue from "./assets/images/duocards/redesign-blue.svg";
import duoRedesign from "./assets/images/duocards/redesign.svg";
import eigenNewsfeed from "./assets/images/eigen/newsfeed.svg";
import eigenOperatorFutureLight from "./assets/images/eigen/operator-future-light.svg";
import eigenServiceDark from "./assets/images/eigen/service-dark.svg";
import observatoryDashboardDark from "./assets/images/observatory/dashboard-dark.svg";
import observatoryDashboardLight from "./assets/images/observatory/dashboard-light.svg";
import observatoryValidators from "./assets/images/observatory/validators.svg";
import observatoryValidatorsList from "./assets/images/observatory/validators-list.svg";
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
import { Project } from "./types";

export interface ProjectImage {
  src: string;
  border: boolean;
}

const images: Record<Project, ProjectImage[]> = {
  [Project.Trezor]: [
    { src: trexorEthTx, border: true },
    { src: trezorWallet, border: false },
    { src: trezorChart, border: false },
  ],
  [Project.CrocoFinance]: [
    { src: crocoLanding2, border: true },
    { src: crocoSimulator, border: true },
    { src: crocoCrocosHorizontal, border: true },
    { src: crocoPoolsV3, border: true },
    { src: crocoSimulatorV3, border: true },
  ],
  [Project.DuoCards]: [
    { src: duoRedesign, border: false },
    { src: duoRedesignBlue, border: false },
    { src: duoOriginal, border: true },
  ],
  [Project.Eigen]: [
    { src: eigenServiceDark, border: false },
    { src: eigenNewsfeed, border: true },
    { src: eigenOperatorFutureLight, border: true },
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
};

export default images;
