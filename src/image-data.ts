import { Project } from "./types";
import trezor0 from "./assets/images/trezor/chart.png";
import trezor1 from "./assets/images/trezor/trade.png";
import trezor2 from "./assets/images/trezor/transaction.png";
import croco0 from "./assets/images/croco/croco-landing.png";
import crocoChristmas from "./assets/images/croco/christmas.svg";
import crocoSimulator from "./assets/images/croco/simulator.svg";
import crocoSimulatorDark from "./assets/images/croco/simulator-dark.svg";
import crocoCrocos from "./assets/images/croco/crocos.svg";
import crocoCrocosHorizontal from "./assets/images/croco/crocos-horizontal.svg";
import crocoLanding from "./assets/images/croco/landing.svg";
import stake0 from "./assets/images/stakebar/landing.png";
import stake1 from "./assets/images/stakebar/ui-1.png";
import stake2 from "./assets/images/stakebar/ui-2.png";
import stake3 from "./assets/images/stakebar/logo.png";
import stake4 from "./assets/images/stakebar/cheers.png";
import stake5 from "./assets/images/stakebar/drink.png";
import stakeLandingBlue from "./assets/images/stakebar/landing-blue.svg";
import stakeInput from "./assets/images/stakebar/input.svg";
import stakeCheers from "./assets/images/stakebar/cheers.svg";
import stakeCheersBg from "./assets/images/stakebar/cheers-bg.svg";
import stakeApp from "./assets/images/stakebar/app.svg";
import duo0 from "./assets/images/duocards/landing.png";
import duoOriginal from "./assets/images/duocards/original.png";
import duoRedesign from "./assets/images/duocards/redesign.svg";
import duoRedesignGreen from "./assets/images/duocards/redesign-green.svg";
import duoRedesignBlue from "./assets/images/duocards/redesign-blue.svg";
import eigenNewsfeed from "./assets/images/eigen/newsfeed.svg";
import eigenOperatorFuture from "./assets/images/eigen/operator-future.svg";
import eigenServiceDark from "./assets/images/eigen/service-dark.svg";
import observatoryDashboardLight from "./assets/images/observatory/dashboard-light.svg";
import observatoryDashboardDark from "./assets/images/observatory/dashboard-dark.svg";
import observatorydMain from "./assets/images/observatory/main-page.svg";
import observatoryValidators from "./assets/images/observatory/validators.svg";
import sdpChain from "./assets/images/sdp/chain.svg";
import sdpValidators from "./assets/images/sdp/validators.svg";
import sdpLanding from "./assets/images/sdp/landing.svg";
import sdpGuide from "./assets/images/sdp/guide.svg";

const images: Record<Project, string[]> = {
  [Project.Trezor]: [trezor0, trezor1, trezor2],
  [Project.CrocoFinance]: [crocoCrocosHorizontal, crocoSimulator, crocoLanding],
  [Project.DuoCards]: [duoOriginal, duoRedesign, duoRedesignBlue],
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
