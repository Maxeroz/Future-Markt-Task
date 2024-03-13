import { Button } from "./button";

export function Main() {
  return (
    <main className="container">
      <h1 className="header__title">Создаю условия для вашего успеха</h1>
      <p className="header__appeal">Ваш успех зависит от ваших действий</p>

      <Button style={"btn__white"} square={"btn__white-square"}>
        Записаться
      </Button>
    </main>
  );
}
