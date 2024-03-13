import { InfoText } from "./infoText";

export function Footer() {
  return (
    <footer className="container footer">
      <InfoText>
        <span className="text">130+</span>
        <span className="shadowText">техники</span>
      </InfoText>
      <InfoText>
        <span className="text">250%</span>
        <span className="shadowText">Продуктивности</span>
      </InfoText>
    </footer>
  );
}
