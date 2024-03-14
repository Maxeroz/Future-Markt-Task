import { InfoText } from "../infoText";

export function Footer() {
  return (
    <footer className="container footer">
      <InfoText>
        <span className="text">130+</span>
        <span className="shadowText__mobile">техники</span>
        <span className="shadowText">
          техник для <br />
          достижения целей
        </span>
      </InfoText>
      <InfoText>
        <span className="text">250%</span>
        <span className="shadowText__mobile">Продуктивности</span>
        <span className="shadowText">
          увеличение личной
          <br />
          продуктивности
        </span>
      </InfoText>
    </footer>
  );
}
