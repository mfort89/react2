import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className='galeria'>
      {Array.isArray(products) ? ( // Añadimos una comprobación de seguridad
        products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ProductList;