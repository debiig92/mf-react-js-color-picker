
const ColorPicker = ({handleChangeColor, handleSubmitColor, color}) => {


  return (
   
    <form onSubmit={handleSubmitColor}>
        <input type="color" name="color-picker" id="color-picker"  className='form-control' style={
            {
                width: "100%",
                height: "300px"
            }
        } title='Seleccione un color'
        value={color}
        onChange={handleChangeColor}
        />
        <div className='text-center'>
            <div className='mt-3 fw-bold'>
                <div style={{
                    width: "20px",
                    height: "20px",
                    background: color,
                    display: "inline-block",
                    margin: "0 1rem",
                    borderRadius: "100%"
                }}>

                </div>
                { color }
            </div>
        </div>
        <div className="text-center">
        <button className="btn btn-success" type="submit">Guardar Color</button>
        </div>
    </form>
  )
}

export default ColorPicker