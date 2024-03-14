import menu from "../img/menu.svg";

const data = [
  {
    id: 1,
    title: "Обо мне",
  },
  {
    id: 1,
    title: "Наставничество",
  },
  {
    id: 1,
    title: "Мероприятия",
  },
  {
    id: 1,
    title: "Кейсы",
  },
  {
    id: 1,
    title: "Отзывы",
  },
  {
    id: 1,
    title: "Контакты",
  },
];

export function Menu() {
  return (
    <>
      <nav className="nav__menu">
        <ul>
          {data.map((obj) => {
            const { id, title } = obj;
            return (
              <li>
                <a href="#">{title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <button>
        <img src={menu} className="header__menu__icon" alt="Menu" />
      </button>
    </>
  );
}
