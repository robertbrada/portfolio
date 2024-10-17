import crocoCrocosHorizontal from "./assets/images/croco/crocos-horizontal.svg";
import crocoLanding from "./assets/images/croco/landing.svg";
import crocoSimulator from "./assets/images/croco/simulator.svg";
import duoOriginal from "./assets/images/duocards/original.png";
import duoRedesignBlue from "./assets/images/duocards/redesign-blue.svg";
import duoRedesign from "./assets/images/duocards/redesign.svg";
import eigenNewsfeed from "./assets/images/eigen/newsfeed.svg";
import eigenOperatorFuture from "./assets/images/eigen/operator-future.svg";
import eigenServiceDark from "./assets/images/eigen/service-dark.svg";
import observatoryDashboardDark from "./assets/images/observatory/dashboard-dark.svg";
import observatoryDashboardLight from "./assets/images/observatory/dashboard-light.svg";
import observatoryValidators from "./assets/images/observatory/validators.svg";
import sdpChain from "./assets/images/sdp/chain.svg";
import sdpGuide from "./assets/images/sdp/guide.svg";
import sdpLanding from "./assets/images/sdp/landing.svg";
import sdpValidators from "./assets/images/sdp/validators.svg";
import stakeApp from "./assets/images/stakebar/app.svg";
import stakeCheers from "./assets/images/stakebar/cheers.svg";
import stakeInput from "./assets/images/stakebar/input.svg";
import stakeLandingBlue from "./assets/images/stakebar/landing-blue.svg";
import stake2 from "./assets/images/stakebar/ui-2.png";
import trexorEthTx from "./assets/images/trezor/eth-transaction.svg";
import trezorWallet from "./assets/images/trezor/wallet.svg";
import trezorChart from "./assets/images/trezor/chart.svg";
import { Project } from "./types";

const images: Record<Project, string[]> = {
  [Project.Trezor]: [trexorEthTx, trezorWallet, trezorChart],
  [Project.CrocoFinance]: [crocoCrocosHorizontal, crocoSimulator, crocoLanding],
  [Project.DuoCards]: [duoRedesign, duoRedesignBlue, duoOriginal],
  [Project.Eigen]: [eigenServiceDark, eigenNewsfeed, eigenOperatorFuture],
  [Project.Observatory]: [
    observatoryDashboardLight,
    observatoryDashboardDark,
    observatoryValidators,
  ],
  [Project.RobertBrada]: [],
  [Project.SDP]: [sdpLanding, sdpValidators, sdpChain, sdpGuide],
  [Project.StakeBar]: [
    stakeLandingBlue,
    stakeApp,
    stake2,
    stakeInput,
    stakeCheers,
  ],
};

export default images;
