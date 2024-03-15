import { useEffect, useRef, useState } from "react";
import crossSmall from "../img/cross_small.svg";
import { Logo } from "./Logo";

export function ConsultModal({ active, closeModal }) {
  const modalContainerElRef = useRef(null);

  useEffect(() => {
    let handler = () => {
      closeModal();
      console.log("Hello");
    };

    setTimeout(() => {
      handler();
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, []);

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
