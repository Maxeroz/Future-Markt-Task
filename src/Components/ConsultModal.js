import { useEffect, useRef, useState } from "react";
import crossSmall from "../img/cross_small.svg";
import { Logo } from "./Logo";

export function ConsultModal({ active, closeModal }) {
  const modalContainerElRef = useRef(null);

  // Effect to close modal after 3000ms
  useEffect(() => {
    let handler = () => {
      closeModal();
    };

    setTimeout(() => {
      handler();
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, []);

  return (
    <div className="call-modal-background active">
      <div className="call-modal-content" ref={modalContainerElRef}>
        <div className="consult-modal-container">
          <div className="cross__small">
            <button onClick={closeModal}>
              <img src={crossSmall} className="cross_svg" />
            </button>
          </div>
          <div className="consult-modal-title">
            <h2>
              Спасибо <br></br>
              за заявку
            </h2>
            <h3>
              Я обязательно
              <br />
              свяжусь с вами
              <br />в ближайшее время.
            </h3>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Logo styleLogo={"consult__modal__logo"} />
          </div>
        </div>
      </div>
    </div>
  );
}
