import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  state = {
    itensCart: JSON.parse(localStorage.getItem('cart')) || [],
  };

  render() {
    const { itensCart } = this.state;
    const verifyLength = itensCart.length > 0;
    return (
      <div>
        {verifyLength ? (
          itensCart.map((item) => (
            <li
              key={ item.id }
            >
              <h4 data-testid="shopping-cart-product-name">{item.title}</h4>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{item.price}</p>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                {`${item.order_backend}`}

              </p>
            </li>
          ))
        ) : (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
      </div>
    );
  }
}
