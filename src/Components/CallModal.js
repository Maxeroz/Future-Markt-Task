import { Button } from "./Button";
import vectorWhite from "../img/vectorWhite.svg";
import crossSmall from "../img/cross_small.svg";
import { useEffect, useRef, useState } from "react";

export function CallModal({ active, closeModal }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // Refs to pick Elemets
  const inputEl = useRef(null);
  const modalContainerElRef = useRef(null);

  // Effect to focus on NAME Input filed when componen is mounted
  useEffect(() => {
    inputEl.current.focus();
  }, [active]);

  // Effect to close modal using Esc Button
  useEffect(() => {
    let handlerButton = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handlerButton);

    return () => {
      document.removeEventListener("keydown", handlerButton);
    };
  }, [closeModal]);

  // Effect to close modal using Overlay
  useEffect(() => {
    let handler = (e) => {
      if (!modalContainerElRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [closeModal]);

  return (
    // <div className="call-modal-background">
    <div
      className={`${
        active ? "call-modal-background active" : "call-modal-background"
      }`}
    >
      <div className="call-modal-content" ref={modalContainerElRef}>
        <div className="call-modal-container">
          <div className="cross__small">
            <button onClick={closeModal}>
              <img src={crossSmall} className="cross_svg" />
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
              ref={inputEl}
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
              <span className="input-text__mobile">
                Согласен на сохранение
                <br />и обработку персональных данных
              </span>
              <span className="input-text">
                Согласен на сохранение и обработку
                <br />
                персональных данных
              </span>
            </label>
          </form>
          <Button
            style={"btn__other__call"}
            square={"btn__trans-square"}
            // userStyle={{ height: "46px", width: "46px" }}
            vector={vectorWhite}
            vectorStyle={"vector__white"}
            mainClass={"full_btn_call"}
          >
            Заказать обратный звонок
          </Button>
        </div>
      </div>
    </div>
  );
}
