import { Button } from "./Button";
import vectorBlue from "../img/vectorBlue.svg";
import vectorWhite from "../img/vectorWhite.svg";

import { useEffect, useState } from "react";

export function Main({ handleOnClickCall, handleOnClickConsult }) {
  return (
    <main className="container">
      <h1 className="header__title">Создаю условия для вашего успеха</h1>
      <p className="header__appeal__phone">
        Ваш успех зависит от ваших действий
      </p>
      <p className="header__appeal">
        Когда ваше время и энергия лучше сфокусированы, стремление к новым
        возможностям становится реальностью, ваш успех зависит от ваших действий
      </p>

      <div className="buttons">
        <Button
          style={"btn__white"}
          square={"btn__white-square"}
          vector={vectorBlue}
          vectorStyle={"vector__blue"}
          mainClass={"full_btn"}
          handler={handleOnClickCall}
        >
          <span className="displayMobile">Записаться</span>
          <span className="displayDesktop">Записаться на консультацию</span>
        </Button>
        <Button
          style={"btn__other"}
          square={"btn__trans-square"}
          vector={vectorWhite}
          vectorStyle={"vector__white"}
          mainClass={"full_btn"}
          handler={handleOnClickCall}
        >
          <span className="displayMobile">Заказать звонок</span>
          <span className="displayDesktop">Бесплатная консультация</span>
        </Button>
      </div>
    </main>
  );
}
