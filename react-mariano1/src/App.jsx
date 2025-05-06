import React, { useState } from 'react'
import './App.css'
import Home from './layout/Home'

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setCartOpen] =useState(false);

  const handleAddToCart = (product) => {
    const productExists =cart.find(item => item.id === product.id)
    if(productExists){
      //alert('El producto ya esta en el carrito')
      setCart(cart.map((item) => item.id === product.id ? 
      {...item, cantidad:item.cantidad+1}:item))
    } else {

    }
    setCart([...cart, {...product, cantidad:1}])
  }

  const borrarProducto = (product) => {
    setCart(preVCart=>{
      return preVCart.map(item => {
        if(item.id=== product.id){
          if(item.cantidad > 1){
            return {...item, cantidad:item.cantidad-1}
          }else{
            return null
          }
        }

        
      })
    })
  }

  return (
    <>
      
      <Home cart={cart} handleAddToCart={handleAddToCart} isCartOpen={isCartOpen}
       setCartOpen={setCartOpen} />
      
      
    </>
  )
}

export default App
