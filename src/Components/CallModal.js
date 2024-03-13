export function CallModal() {
  return (
    <div className="call-modal-background">
      <div className="call-modal">
        <div className="call-modal-title">
          <h2>
            Закажите
            <br></br>
            обратный звонок
          </h2>
        </div>
        <form className="form-call-modal">
          <input name="name" placeholder="Имя" className="text-input" />
          <input
            name="phone"
            placeholder="Телефон"
            className="form-call-phone text-input"
          />
          <label className="form-call-div">
            <input
              type="checkbox"
              name="myCheckBox"
              className="form-real-checkbox"
            />
            <span className="custom-checkbox"></span>
            <span className="input-text">
              Согласен на сохранение
              <br />и обработку персональных данных
            </span>
          </label>
        </form>
      </div>
    </div>
  );
}
