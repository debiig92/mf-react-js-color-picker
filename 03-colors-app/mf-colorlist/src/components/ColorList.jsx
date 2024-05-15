import React from 'react'
import Swal from 'sweetalert2'

const ColorList = ({ colorsList = [] }) => {


 const handleClick = (color) => {
    navigator.clipboard.writeText(color);
    Swal.fire({
        position: 'top-end',
        title: 'Color: ' + color + ' Copied!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true
      })
 };

  return (

    <div className='list-group text-center'>
        {
          colorsList.length > 0 ? (
            colorsList.map((color, index) => (
                <button
                    key={index}
                    type='button'
                    className='list-group-item list-group-item-action text-white'
                    aria-current="true"
                    title='Copiar'
                    style={{
                        background: color,
                        fontWeight: 'bolder'
                    }}
                    onClick={ () => handleClick(color)}
                >
                    {color}
                </button>
            ))
          ): ( <div className='alert alert-danger'>Sin elementos por mostrar</div>)
        }
    </div>
  )
}

export default ColorList