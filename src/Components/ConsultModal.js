import { useEffect, useRef, useState } from "react";
import crossSmall from "../img/cross_small.svg";

export function ConsultModal({ active, closeModal }) {
  return (
    <div
      className={`${
        active ? "call-modal-background active" : "call-modal-background"
      }`}
    >
      <div className="call-modal-content">
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
          </div>
        </div>
      </div>
    </div>
  );
}
