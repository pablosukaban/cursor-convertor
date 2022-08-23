import React from "react";

const defaultCurrencies = ["RUB", "USD", "EUR", "GBP"];

type CursorBlockProps = {
  value: number;
  currency: string;
  onChangeValue: (event: string) => void;
  onChangeCurrency: (cur: string) => void;
};

const CursorBlock = ({
  value,
  currency,
  onChangeValue,
  onChangeCurrency,
}: CursorBlockProps) => {
  return (
    <div className="flex max-w-lg flex-col gap-5 ">
      <ul className="flex rounded-md border border-gray-300">
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            key={cur}
            className="grow cursor-pointer  rounded-md px-2 py-2 text-center hover:bg-gray-200"
            style={
              cur === currency
                ? { color: "white", backgroundColor: "#16b67f" }
                : {}
            }
          >
            {cur}
          </li>
        ))}
      </ul>
      <input
        value={value}
        placeholder={"0"}
        onChange={(event) => onChangeValue(event.target.value)}
        type="number"
        className="border border-gray-300 p-3 text-3xl "
      />
    </div>
  );
};

export default CursorBlock;
