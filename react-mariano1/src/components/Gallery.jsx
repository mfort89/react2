import React from 'react'

const Gallery = () => {

  let estilos = {backgroundColor: 'lightblue', padding:"20px",textAlign:"center"}

    const images = [
        "https://placehold.co/200x200",
        "https://placehold.co/200x200",
        "https://placehold.co/200x200",
    ];

  return (
    <section style={estilos}>
        {
            images.map((src,index)=>(
             <img src={src} alt={`imagen${index+1}`}/>   
            ))
        }
    </section>
  )
}

export default Gallery
