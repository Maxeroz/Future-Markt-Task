import { useEffect, useRef, useState } from "react";
import { InfoText } from "../infoText";

export function Footer() {
  const [percent, setPercent] = useState(null);
  const [technique, setTechnique] = useState(null);

  // JS Framework TASK 1 and TASK 2:

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");

      const json = await data.json();

      const sum = json.Date.replaceAll("-", "")
        .split("", 8)
        .reduce((acc, number) => acc + Number(number), 0);

      setPercent(Math.round(json.Valute.GBP.Value));
      setTechnique(sum);
    };

    fetchData();
  }, []);

  return (
    <footer className="container footer">
      <InfoText>
        <span className="text">{technique}+</span>
        <span className="shadowText__mobile">техники</span>
        <span className="shadowText">
          техник для <br />
          достижения целей
        </span>
      </InfoText>
      <InfoText>
        <span className="text">{percent}%</span>
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
