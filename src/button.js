import vectorBlue from "./img/vectorBlue.svg";

export function Button({ children, style, square }) {
  return (
    <div className="full_btn">
      <button className={style}>{children}</button>
      <div className={square}>
        <img src={vectorBlue} className="vector__blue"></img>
      </div>
    </div>
  );
}
