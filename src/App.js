import "normalize.css";
import { Logo } from "./Components/Logo.js";
import { Menu } from "./Components/Menu.js";
import { Phone } from "./Components/Phone.js";
import WebFont from "webfontloader";
import { Main } from "./Components/Main.js";
import { Footer } from "./Components/Footer.js";
import { CallModal } from "./Components/CallModal.js";
import { useEffect, useState } from "react";
import { ConsultModal } from "./Components/ConsultModal.js";

export default function App() {
  const [isCallOpen, setIsCallOpen] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(true);

  function handleOnClickCall() {
    setIsCallOpen((is) => !is);
  }

  function handleOnClickConsult() {
    setIsConsultOpen((is) => !is);
  }

  return (
    <>
      <div className="main__page">
        <header className="header">
          <div className="container header-container">
            <Logo styleLogo={"header__logo"} />
            <Menu />
            {/* <div className="space__div"></div> */}
            <Phone />
          </div>
        </header>
        <Main
          handleOnClickCall={handleOnClickCall}
          handleOnClickConsult={handleOnClickConsult}
        />
        <Footer />
      </div>
      <CallModal active={isCallOpen} closeModal={() => setIsCallOpen(false)} />

      {isConsultOpen ? (
        <ConsultModal
          active={isConsultOpen}
          closeModal={() => setIsConsultOpen(false)}
        />
      ) : (
        ""
      )}
    </>
  );
}
