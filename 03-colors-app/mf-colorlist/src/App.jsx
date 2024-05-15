import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ColorList from "./components/ColorList";

const App = () => {
  const colorsList = ["#661a1a", "#c96464", "#c964c5"];
  return (
    <>
      <ColorList colorsList={colorsList} />
    </>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
