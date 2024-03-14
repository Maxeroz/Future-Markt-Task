import menu from "../img/menu.svg";

const data = [
  {
    id: 1,
    title: "Обо мне",
  },
  {
    id: 2,
    title: "Наставничество",
  },
  {
    id: 3,
    title: "Мероприятия",
  },
  {
    id: 4,
    title: "Кейсы",
  },
  {
    id: 5,
    title: "Отзывы",
  },
  {
    id: 6,
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
              <li key={id}>
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
