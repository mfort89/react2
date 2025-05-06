import React from 'react'

const Main = ({data}) => {
  console.log(data);
  return (
    <main className='main' style={{backgroundColor:'lightblue', padding:"20px",textAlign:"center"}}>
        <h2>Contenido Principal</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima error 
            natus earum, culpa cupiditate aliquid nam modi corrupti expedita? Velit a
            spernatur iste adipisci temporibus, autem at explicabo aut. Eius, quas.</p>
    </main>
  )
}

export default Main
