import { Button } from "./Button";
import vectorWhite from "../img/vectorWhite.svg";
import crossSmall from "../img/cross_small.svg";
import { useEffect, useRef, useState } from "react";
import { act } from "react-dom/test-utils";

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

  const inputEl = useRef(null);
  const modalContainerEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, [active]);

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

  useEffect(() => {
    let handler = (e) => {
      if (!modalContainerEl.current.contains(e.target)) {
        closeModal();
        console.log(modalContainerEl);
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
      <div className="call-modal-content" ref={modalContainerEl}>
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
            // userStyle={{ height: "45px", width: "45px" }}
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
