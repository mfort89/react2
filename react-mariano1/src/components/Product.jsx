import React from 'react'

const Product = ({product, addToCart}) => (
<section className='product'>
  <div className='fondoProducto'>
</div>
<img src={product.img} alt={product.name} className="imagenCano" />
<h3 className="product-name">{product.name}</h3>
<p className="product-price">${product.price}</p>
<button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700" onClick={() => 
  addToCart(product)}>Agregar al carrito</button>

</section>
);
 

export default Product;
