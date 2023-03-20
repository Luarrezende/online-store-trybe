import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      get: [],
    };
  }

  async componentDidMount() {
    const get = await getCategories();
    this.setState({
      get,
    });
  }

  render() {
    const { get } = this.state;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/shoppingcart"
        >
          <button type="button">Carrinho de compras</button>
        </Link>
        {
          get.map(({ id, name }) => (
            <div
              key={ id }
            >
              <input
                type="radio"
                data-testid="category"
                id={ id }
              />
              <label htmlFor={ id }>{name}</label>
            </div>
          ))
        }
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Index;
