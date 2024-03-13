import "normalize.css";
import { Logo } from "./logo.js";
import { Menu } from "./menu.js";
import { Phone } from "./phone.js";
import WebFont from "webfontloader";
import { useEffect } from "react";
import { Main } from "./main.js";

export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Raleway"],
      },
    });
  }, []);

  return (
    <>
      <header className="header">
        <div className="container header-container">
          <Logo />
          <Menu />
          <Phone />
        </div>
        <Main />
      </header>
    </>
  );
}
