import { useEffect, useState } from "react";
import { getColorList, getLastColor } from "../helpers/getColors";

const useColors = () => {

  const [color, setColor] = useState(getLastColor());
const [colorList, setColorList] = useState(getColorList())

const handleChangeColor = (e) => {
    setColor(e.target.value);
};

const handleSubmitColor = (e) => {
    e.preventDefault();

    const copyColors = [color, ...colorList];

    setColorList(copyColors)
}

useEffect(() => {
  localStorage.setItem('colors', JSON.stringify(colorList
    ))
}, [colorList])



  return { color, setColor, colorList, setColorList, handleChangeColor, handleSubmitColor };
}

export default useColors