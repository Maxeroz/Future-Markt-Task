import { Button } from "./Button";
import vectorWhite from "../img/vectorWhite.svg";
import crossSmall from "../img/cross_small.svg";
import { useState } from "react";

{
  /* <div
      className={
        active ? "call-modal-background active" : '"call-modal-background"'
      }
    >*/
}

export function CallModal({ active, closeModal }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    // <div className="call-modal-background">
    <div
      className={
        active ? "call-modal-background active" : "call-modal-background"
      }
    >
      <div className="call-modal">
        <div className="cross__small">
          <button onClick={closeModal}>
            <img src={crossSmall} />
          </button>
        </div>
        <div className="call-modal-title">
          <h2>
            Закажите
            <br></br>
            обратный звонок
          </h2>
        </div>
        <form className="form-call-modal">
          <input
            name="name"
            placeholder="ИМЯ"
            className="text-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            name="phone"
            placeholder="ТЕЛЕФОН"
            className="form-call-phone text-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label className="form-call-div">
            <input
              type="checkbox"
              name="myCheckBox"
              className="form-real-checkbox"
              checked={isChecked}
              onChange={() => setIsChecked((is) => !is)}
            />
            <span className="custom-checkbox"></span>
            <span className="input-text">
              Согласен на сохранение
              <br />и обработку персональных данных
            </span>
          </label>
        </form>
        <Button
          style={"btn__other__call"}
          square={"btn__trans-square"}
          userStyle={{ height: "45px", width: "45px" }}
          vector={vectorWhite}
          vectorStyle={"vector__white"}
          mainClass={"full_btn_call"}
        >
          Заказать обратный звонок
        </Button>
      </div>
    </div>
  );
}
