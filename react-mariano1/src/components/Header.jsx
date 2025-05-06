import React from 'react'

const Header = () => {

  let estilos = {backgroundColor: 'blue', padding:"10px",textAlign:"center", color:"white"}
  return (
    <header style={estilos}>
        <h1>Bienvenidos a mi app en React</h1>
    </header>
  )
}

export default Header
