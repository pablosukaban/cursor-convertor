import React from "react";
import CursorBlock from "./components/CursorBlock";

function App() {
  return (
    <div className="flex h-screen items-center justify-center gap-14 bg-slate-100 text-xl ">
      <div className="flex max-w-full flex-col items-center justify-center gap-14 rounded-xl bg-white p-20 shadow-lg lg:flex-row">
        <CursorBlock currency="RUB" />
        <CursorBlock currency="USD" />
      </div>
    </div>
  );
}

export default App;
