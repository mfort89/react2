import React from 'react';

const Cart = ({ cartItems, isOpen, onClose, borrarProducto }) => {
  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
        <button onClick={onClose} className="close-button">
          X
        </button>
      </div>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p>El carrito esta vacio</p>
        ) : (
          <ul className="cart-item">
            {cartItems.map((item, index) => (
              <React.Fragment key={index}>
                <li style={{ color: 'black' }}>
                  {item.name} - ${item.price} - cant:{item.cantidad}
                  <button onClick={() => borrarProducto(item)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </li>
              </React.Fragment>
            ))}
          </ul>
        )}
      </div>
      <button>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;
