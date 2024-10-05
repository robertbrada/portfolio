import { Project } from "./types";
import trezor0 from "./assets/images/trezor/chart.png";
import trezor1 from "./assets/images/trezor/trade.png";
import trezor2 from "./assets/images/trezor/transaction.png";
import croco0 from "./assets/images/croco/croco-landing.png";
import stake0 from "./assets/images/stakebar/landing.png";
import stake1 from "./assets/images/stakebar/ui-1.png";
import stake2 from "./assets/images/stakebar/ui-2.png";
import stake3 from "./assets/images/stakebar/logo.png";
import stake4 from "./assets/images/stakebar/cheers.png";
import stake5 from "./assets/images/stakebar/drink.png";
import duo0 from "./assets/images/duocards/landing.png";
import duoOriginal from "./assets/images/duocards/original.png";
import duoRedesign from "./assets/images/duocards/redesign.svg";
import duoRedesignGreen from "./assets/images/duocards/redesign-green.svg";
import duoRedesignBlue from "./assets/images/duocards/redesign-blue.svg";
import eigenNewsfeed from "./assets/images/eigen/newsfeed.svg";
import eigenOperatorFuture from "./assets/images/eigen/operator-future.svg";
import eigenServiceDark from "./assets/images/eigen/service-dark.svg";

const images: Record<Project, string[]> = {
  [Project.Trezor]: [trezor0, trezor1, trezor2],
  [Project.CrocoFinance]: [croco0],
  [Project.DuoCards]: [duoRedesign, duoRedesignBlue, duoOriginal],
  [Project.Eigen]: [eigenServiceDark, eigenNewsfeed, eigenOperatorFuture],
  [Project.Observatory]: [],
  [Project.RobertBrada]: [],
  [Project.SDP]: [],
  [Project.StakeBar]: [stake0, stake1, stake2, stake3, stake4, stake5],
};

export default images;
