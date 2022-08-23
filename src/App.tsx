import React, { useState, useEffect } from "react";
import CursorBlock from "./components/CursorBlock";

function App() {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  useEffect(() => {
    fetch("https://cdn.cur.su/api/latest.json")
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
      })
      .catch((err) => {
        alert("Ошибка в получении валют");
        console.error(err);
      });
  }, []);

  const onChangeFromPrice = (value: string) => {
    setFromPrice(+value);
  };

  const onChangeToPrice = (value: string) => {
    setToPrice(+value);
  };

  return (
    <div className="flex h-screen items-center justify-center gap-14 bg-slate-100 text-xl ">
      <div className="flex max-w-full flex-col items-center justify-center gap-14 rounded-xl bg-white p-20 shadow-lg lg:flex-row">
        <CursorBlock
          value={fromPrice}
          currency={fromCurrency}
          onChangeCurrency={setFromCurrency}
          onChangeValue={onChangeFromPrice}
        />
        <CursorBlock
          value={toPrice}
          currency={toCurrency}
          onChangeCurrency={setToCurrency}
          onChangeValue={onChangeToPrice}
        />
      </div>
    </div>
  );
}

export default App;
