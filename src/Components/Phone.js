import phone from "../img/phone.svg";

export function Phone() {
  return (
    <div className="phone-container">
      <button>
        <img src={phone} className="header__phone" alt="Phone" />
      </button>
      <span className="phone__number__logo">8-345-123-34-45</span>
    </div>
  );
}
