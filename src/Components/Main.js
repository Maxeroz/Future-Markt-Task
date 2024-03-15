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
          handler={handleOnClickConsult}
        >
          Записаться на консультацию
        </Button>
        <Button
          style={"btn__other"}
          square={"btn__trans-square"}
          // userStyle={{ height: "30px" }}
          vector={vectorWhite}
          vectorStyle={"vector__white"}
          mainClass={"full_btn"}
          handler={handleOnClickCall}
        >
          Заказать звонок
        </Button>
      </div>
    </main>
  );
}
