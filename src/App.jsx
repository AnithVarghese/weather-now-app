import React from "react";
import Nature from "./assets/Nature.png";
import Homepage from "./Pages/Homepage";

const App = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${Nature})` }}
    >
      <div className="min-w-screen min-h-screen bg-black/40 ">
        <Homepage />
      </div>
    </div>
  );
};

export default App;
