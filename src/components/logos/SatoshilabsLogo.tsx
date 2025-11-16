import logo from "../../assets/images/trezor/logo.svg";

export function SatoshilabsLogo({ className }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Satoshilabs"
      className={className}
    />
  );
}
