import { Button } from "./Button";
import vectorWhite from "../img/vectorWhite.svg";
import crossSmall from "../img/cross_small.svg";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

export function CallModal({ active, closeModal }) {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // Hook Form ///////////////////////////////
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setFocus,
  } = useForm();

  const onSubmit = (data) => {
    reset();
    closeModal();

    // Saving data to Local Storage
    localStorage.setItem("data", JSON.stringify(data));
  };

  // Refs to pick Elemets
  const modalContainerElRef = useRef(null);

  // Effect to focus on Input First Name
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  // Effect to focus on NAME Input filed when componen is mounted
  useEffect(() => {
    // inputEl.current.focus();
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

          <form className="form-call-modal" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("firstName", {
                required: true,
                minLength: 5,
              })}
              placeholder="ИМЯ"
              className="text-input"
            />

            <input
              {...register("phone", {
                required: true,
                minLength: 10,
              })}
              placeholder="ТЕЛЕФОН"
              className="form-call-phone text-input"
            />
            <label className="form-call-div">
              <input
                {...register("checked", {
                  required: true,
                })}
                type="checkbox"
                className="form-real-checkbox"
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
          </form>
        </div>
      </div>
    </div>
  );
}
