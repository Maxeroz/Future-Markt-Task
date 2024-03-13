import "normalize.css";
import { Logo } from "./Components/Logo.js";
import { Menu } from "./Components/Menu.js";
import { Phone } from "./Components/Phone.js";
import WebFont from "webfontloader";
import { useEffect, useState } from "react";
import { Main } from "./main.js";
import { Footer } from "./footer.js";
import { CallModal } from "./Components/CallModal.js";

export default function App() {
  const [isCallOpen, setIsCallOpen] = useState(true);

  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: ["Raleway"],
  //     },
  //   });
  // }, []);

  return (
    <>
      <CallModal />
      <div className="main__page">
        <header className="header">
          <div className="container header-container">
            <Logo />
            <Menu />
            <div className="space__div"></div>
            <Phone />
          </div>
        </header>
        <Main />
        <Footer />
      </div>
    </>
  );
}
