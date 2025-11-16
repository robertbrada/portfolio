import { Reference } from "./components/References";
import { Project } from "./types";

const references: Record<Project, Reference[]> = {
  [Project.Satoshilabs]: [
    {
      type: "web",
      link: "https://trezor.io/trezor-suite",
      description: "trezor.io",
    },
    {
      type: "github",
      link: "https://github.com/trezor/trezor-suite",
      description: "trezor",
    },
  ],
  [Project.CrocoFinance]: [
    {
      type: "github",
      link: "https://github.com/croco-finance",
      description: "croco-finance",
    },
    {
      type: "youtube",
      link: "https://www.youtube.com/watch?v=MEBnPKgrtxM",
      description: "Demo video",
    },
    {
      type: "medium",
      link: "https://crocofinance.medium.com/practical-example-concentrated-liquidity-and-capital-efficiency-in-uniswap-v2-vs-v3-cfdf64eefb9f",
      description: "Medium article",
    },
    {
      type: "x",
      link: "https://x.com/CrocoFinance",
      description: "@CrocoFinance",
    },
  ],
  [Project.DuoCards]: [
    {
      type: "web",
      link: "https://duocards.com/en/",
      description: "duocards.com",
    },
  ],
  [Project.Eigen]: [
    {
      type: "web",
      link: "https://eigen.rockawayx.app/mainnet",
      description: "eigen.rockawayx.app",
    },
    {
      type: "web",
      link: "https://www.eigenlayer.xyz/",
      description: "eigenlayer.xyz",
    },
  ],
  [Project.Observatory]: [
    {
      type: "web",
      link: "https://observatory.zone/",
      description: "observatory.zone",
    },
    {
      type: "x",
      link: "https://x.com/observatoryzone",
      description: "@observatoryzone",
    },
    {
      type: "loom",
      link: "https://www.loom.com/share/5171607453db4582944da75c53894aee",
      description: "Demo video",
    },
  ],
  [Project.RobertBrada]: [],
  [Project.SDP]: [
    {
      type: "web",
      link: "https://smartdelegation.app/",
      description: "smartdelegation.app",
    },
    {
      type: "loom",
      link: "https://www.loom.com/share/63751416a2b946baa0fd97af36205485?sid=dbd91a4f-0d60-47e5-be26-7bf2ce6d940a",
      description: "Demo video",
    },
  ],
  [Project.StakeBar]: [
    {
      type: "web",
      link: "https://stakebar.io/",
      description: "stakebar.io",
    },
    {
      type: "x",
      link: "https://x.com/StakeBar",
      description: "@StakeBar",
    },
    {
      type: "loom",
      link: "https://www.loom.com/share/5c6d4e5c89a346798705025e26bfa5e1",
      description: "Demo video",
    },
  ],
  [Project.Wormhole]: [
    {
      type: "web",
      link: "https://wormhole.com/",
      description: "wormhole.com",
    },
  ],
  [Project.Mayan]: [
    {
      type: "web",
      link: "https://mayan.finance/",
      description: "mayan.finance",
    },
  ],
};

export default references;
