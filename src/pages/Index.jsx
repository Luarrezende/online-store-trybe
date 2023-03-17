import React from 'react';
import { Link } from 'react-router-dom';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/shoppingcart"
        >
          <button type="button">Carrinho de compras</button>
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Index;
