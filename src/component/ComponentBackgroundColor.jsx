import React, { useState } from 'react'

/*
ini adalah contoh merubah style
dan child dalam hal ini string
menggunakan bantuan state
*/

function ComponentBackgroundColor() {
  const [color, setColor] = useState('red')
  const styling = {
    backgroundColor: color,
    width: 100,
    height: 100,
  }

  function handleClick() {
    const newColor = color === 'red' ? 'blue' : 'red'
    setColor(newColor)
  }

  return (
    <div style={styling}>
      <button
        onClick={handleClick}
        type="button"
      >
        {color}
      </button>
    </div>
  )
}

export default ComponentBackgroundColor
