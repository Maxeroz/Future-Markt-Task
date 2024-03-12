import "normalize.css";
import { Logo } from "./logo.js";
import { Menu } from "./menu.js";
import { Phone } from "./phone.js";
import WebFont from "webfontloader";
import { useEffect } from "react";

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
          <h1 className="header__title">Создаю условия для вашего успеха</h1>
          <p className="header__appeal">Ваш успех зависит от ваших действий</p>
        </div>
      </header>
    </>
  );
}
