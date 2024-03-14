import { Button } from "./Components/Button";
import vectorBlue from "./img/vectorBlue.svg";
import vectorWhite from "./img/vectorWhite.svg";

import { useEffect, useState } from "react";

export function Main({ handleOnClick }) {
  return (
    <main className="container">
      <h1 className="header__title">Создаю условия для вашего успеха</h1>
      <p className="header__appeal">Ваш успех зависит от ваших действий</p>

      <Button
        style={"btn__white"}
        square={"btn__white-square"}
        vector={vectorBlue}
        vectorStyle={"vector__blue"}
        mainClass={"full_btn"}
      >
        Записаться
      </Button>
      <Button
        style={"btn__other"}
        square={"btn__trans-square"}
        userStyle={{ height: "30px" }}
        vector={vectorWhite}
        vectorStyle={"vector__white"}
        mainClass={"full_btn"}
        handler={handleOnClick}
      >
        Заказать звонок
      </Button>
    </main>
  );
}
