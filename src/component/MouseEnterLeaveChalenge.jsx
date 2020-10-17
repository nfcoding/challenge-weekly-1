import React from 'react'

/*
  ubah component dibawah sesuai spesifikasi berikut:
  1.  saat mouse ada di atasnya
      background berwarna kuning
  2.  saat tidak ada mouse di atasnya
      background berwarna hijau

  jadikan file ComponentBackgroundColor.jsx
  sebagai contoh
*/

function MouseEventDemo() {
  function handleOnMouseEnter() {
    console.log('mouse enter event')
  }

  function handleOnMouseLeave() {
    console.log('mouse leave event')
  }

  const styling = {
    backgroundColor: 'yellow',
    width: 100,
    height: 100,
  }
  return (
    <div
      style={styling}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      [Enter Leave]
    </div>
  )
}

export default MouseEventDemo
