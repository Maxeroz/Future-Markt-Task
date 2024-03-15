import logo from "../img/logo.svg";

export function Logo({ styleLogo }) {
  return <img src={logo} className={styleLogo} alt="Logo" />;
}
