import React from "react";
import ReactDOM from "react-dom";
import ColorPicker from 'colorPicker/ColorPicker'
import ColorList from 'colorList/ColorList'
import useColors from 'colorPicker/useColors'
import "./index.css";

const App = () => {
  const { handleChangeColor, handleSubmitColor , color , colorList} = useColors();
  return (
    <>
  <h1 className="text-center bg-dark text-white pg-2 p-2">Color Picker</h1>
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-4 fs-6 text">
        <ColorList colorsList={colorList}/>
        </div>
        <div className="col-12 col-md-8 fs-6 text">
        <ColorPicker handleChangeColor={handleChangeColor} handleSubmitColor={handleSubmitColor} color={color} />
        </div>
      </div>
    </div>
  </>
  )
  };
ReactDOM.render(<App />, document.getElementById("app"));
