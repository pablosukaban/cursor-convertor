import React, { useState, useEffect } from "react";
import CursorBlock from "./components/CursorBlock";

function App() {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");

  useEffect(() => {
    fetch("https://cdn.cur.su/api/latest.json")
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
        console.log(json.rates);
      })
      .catch((err) => {
        alert("Ошибка в получении валют");
        console.error(err);
      });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center gap-14 bg-slate-100 text-xl ">
      <div className="flex max-w-full flex-col items-center justify-center gap-14 rounded-xl bg-white p-20 shadow-lg lg:flex-row">
        <CursorBlock
          currency={fromCurrency}
          onChangeCurrency={setFromCurrency}
        />
        <CursorBlock currency={toCurrency} onChangeCurrency={setToCurrency} />
      </div>
    </div>
  );
}

export default App;
