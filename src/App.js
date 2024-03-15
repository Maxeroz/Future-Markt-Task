import "normalize.css";
import { Logo } from "./Components/Logo.js";
import { Menu } from "./Components/Menu.js";
import { Phone } from "./Components/Phone.js";
import WebFont from "webfontloader";
import { Main } from "./Components/Main.js";
import { Footer } from "./Components/Footer.js";
import { CallModal } from "./Components/CallModal.js";
import { useEffect, useState } from "react";

export default function App() {
  const [isCallOpen, setIsCallOpen] = useState(false);

  function handleOnClick() {
    setIsCallOpen((is) => !is);
  }
  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: ["Raleway"],
  //     },
  //   });
  // }, []);

  return (
    <>
      <div className="main__page">
        <header className="header">
          <div className="container header-container">
            <Logo />
            <Menu />
            {/* <div className="space__div"></div> */}
            <Phone />
          </div>
        </header>
        <Main handleOnClick={handleOnClick} />
        <Footer />
      </div>
      <CallModal active={isCallOpen} closeModal={() => setIsCallOpen(false)} />
    </>
  );
}
