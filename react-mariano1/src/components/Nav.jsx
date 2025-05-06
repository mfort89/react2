import React from 'react'

const Nav = ({countItem}) => {
  return (
    <nav style={{backgroundColor:'green', padding:"10px",textAlign:"center", color:"white"}}>
      <ul>
        <li><a>Inicio</a></li>
        <li>Acerca de</li>
        <li>Contacto</li>
        <li>Carrito:{countItem}</li>
      </ul>

    </nav>
  )
}

export default Nav
