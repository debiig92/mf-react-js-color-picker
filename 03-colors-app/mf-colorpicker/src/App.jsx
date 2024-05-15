import React from "react";
import ReactDOM from "react-dom";
import useColors from "./hooks/useColors";
import "./index.css";
import ColorPicker from "./components/ColorPicker";
import { getLastColor } from "./helpers/getColors";

const App = () => {
  const { handleChangeColor, handleSubmitColor } = useColors();
  return (
    <>
      <div className="container">
        <ColorPicker handleChangeColor={handleChangeColor} handleSubmitColor={handleSubmitColor} color={getLastColor()} />
      </div></>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
