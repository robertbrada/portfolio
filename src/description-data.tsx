import { Project } from "./types";

const images: Record<Project, React.ReactNode> = {
  [Project.Trezor]: <div>This is Trezor</div>,
  [Project.CrocoFinance]: (
    <div>
      <p>
        Croco Finance was a hackathon presented I created with my friend during
        Hack Money hackathon during the span of 3 weeks (?). I was working on
        the fronted code and designs, while my friend was working in the backed
        that fetched necessary data.
      </p>
      <p>
        The idea was to show liquidity providers what is the so-called
        impermanent loss at at that time nearly cretaed Uniswap decentralised
        exchange.
      </p>
      <p>
        One of the biggest challenge was to add simulator feature that would in
        a clear way project expected loss as the price of the underlying assets
        changes.
      </p>
      <p>
        We won a price for this project. Later we also secured a grant from
        Uniswap Labs to support Uniswap version 3. We stopped development a year
        later as both me and my co-founder got a full time jobs and didn't have
        time to support new protocols and changes.
      </p>
    </div>
  ),
  [Project.DuoCards]: (
    <div>
      Here I took a break from tech-oriented products and tried to to something
      more playful. This was purely a design project where I tried to redesig
      landing page of DuoCards.com as part of a hiring process.
    </div>
  ),
  [Project.Eigen]: <div>This is EigenBeat</div>,
  [Project.Observatory]: <div>This is Observatory</div>,
  [Project.RobertBrada]: <div>This is RobertBrada</div>,
  [Project.SDP]: <div>This is SDP</div>,
  [Project.StakeBar]: <div>This is StakeBar</div>,
};

export default images;
