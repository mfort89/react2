import React from "react";

const Botones = ({texto, color}) => {
let estilo = {backgroundColor:color, color: "white", padding: "10px", borderRadius: "5px"}

    return(
       <button className='btn' style={estilo}>{texto}</button>
    )
}

export default Botones