import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Main from '../components/Main';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import { productList } from '../utils/data';

const Home = ({ cart, handleAddToCart }) => {
  const countItems = cart.length
  return (
    <>
      <Header />
      <Nav countItems={countItems}/>
      <Main />
      <ProductList products={productList} addToCart={handleAddToCart} />
      <Cart cartItems={cart} />
      <Footer />
    </>
  )
}

export default Home;