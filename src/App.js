import "normalize.css";
import { Logo } from "./logo.js";
import { Menu } from "./menu.js";
import { Phone } from "./phone.js";
import WebFont from "webfontloader";
import { useEffect, useState } from "react";
import { Main } from "./main.js";
import { Footer } from "./footer.js";
import { CallModal } from "./callModal.js";

export default function App() {
  const [isCallOpen, setIsCallOpen] = useState(false);

  // useEffect(() => {
  //   WebFont.load({
  //     google: {
  //       families: ["Raleway"],
  //     },
  //   });
  // }, []);

  return (
    <>
      {isCallOpen ? (
        <CallModal />
      ) : (
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
      )}
    </>
  );
}
