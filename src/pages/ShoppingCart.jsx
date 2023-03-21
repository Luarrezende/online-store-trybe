import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  render() {
    const { productsOnCart } = this.props;
    return (
      <section>
        {productsOnCart.length > 0 ? (
          <div>productsOnCart</div>
        ) : (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  productsOnCart: PropTypes.arrayOf(Object),
};

ShoppingCart.defaultProps = {
  productsOnCart: [],
};
