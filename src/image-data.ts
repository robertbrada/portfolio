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

const images: Record<Project, string[]> = {
  [Project.Trezor]: [trexorEthTx, trezorWallet, trezorChart],
  [Project.CrocoFinance]: [
    crocoLanding2,
    crocoSimulator,
    crocoCrocosHorizontal,
    crocoPoolsV3,
    crocoSimulatorV3,
  ],
  [Project.DuoCards]: [duoRedesign, duoRedesignBlue, duoOriginal],
  [Project.Eigen]: [eigenServiceDark, eigenNewsfeed, eigenOperatorFutureLight],
  [Project.Observatory]: [
    observatoryDashboardLight,
    observatoryValidatorsList,
    observatoryValidators,
    observatoryDashboardDark,
  ],
  [Project.RobertBrada]: [],
  [Project.SDP]: [sdpChain, sdpValidators, sdpGuide],
  [Project.StakeBar]: [stakeLandingBlue, stakeInput, stakeCheers, stake1],
};

export default images;
