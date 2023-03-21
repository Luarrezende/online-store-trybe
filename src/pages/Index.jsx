import React from 'react';
import { Link } from 'react-router-dom';
import {
  getCategories,
  getProductsByQuery,
  getProductsFromCategoryAndQuery,
  getProductById,
} from '../services/api';
import Product from '../components/Product';

class Index extends React.Component {
  state = {
    get: [],
    inputSearch: '',
    productsList: [],
    productsToCart: [],
    productsOnCart: [],
  };

  async componentDidMount() {
    const get = await getCategories();
    this.setState({
      get,
    });
  }

  handleSearch = ({ target }) => {
    this.setState({
      inputSearch: target.value,
    });
  };

  productInpectSelect = async ({ target }) => {
    const { id } = target;
    const products = await getProductById(id);
    return products;
  };

  categorySelect = async ({ target }) => {
    const { id, value } = target;
    const products = await getProductsFromCategoryAndQuery(id, value);
    const { results } = products;
    this.setState({
      productsList: results,
    });
  };

  buttonSearch = async () => {
    const { inputSearch } = this.state;
    const products = await getProductsByQuery(inputSearch);
    const { results } = products;
    this.setState({
      productsList: results,
    });
  };

  // cartProductsList = (product) => {
  //   const { productsToCart } = this.state;
  //   this.setState({
  //     productsToCart: [...productsToCart, product],
  //   });
  // };

  // saveToCart = ({ target }) => {
  //   const { id } = target;
  //   const { productsOnCart, productsToCart } = this.state;
  //   const toCart = productsToCart.find((element) => element.id === id);
  //   this.setState(
  //     {
  //       productsOnCart: [...productsOnCart, toCart],
  //     },
  //     this.cartProductsList(toCart),
  //   );
  // };

  render() {
    const { get, inputSearch, productsList } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <button type="button">Carrinho de compras</button>
        </Link>
        {get.map(({ id, name }) => (
          <div key={ id }>
            <input
              type="radio"
              data-testid="category"
              id={ id }
              name="name"
              value={ name }
              onClick={ this.categorySelect }
            />
            <label htmlFor={ id }>{name}</label>
          </div>
        ))}

        <input
          type="text"
          data-testid="query-input"
          name="inputSearch"
          value={ inputSearch }
          onChange={ this.handleSearch }
        />
        <button data-testid="query-button" onClick={ this.buttonSearch }>
          Pesquisar
        </button>
        {productsList.length === 0 ? (
          <p>Nenhum produto foi encontrado</p>
        ) : (

          <ul>
            {productsList.map((product) => (
              <li key={ product.id } data-testid="product">
                <h4>{product.title}</h4>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{product.price}</p>

                <button>
                  Adicionar ao Carrinho

                </button>

              <li
                key={ product.id }
                data-testid="product"
              >
                <Link
                  to={ `/products/${product.id}` }
                  data-testid="product-detail-link"
                >
                  <Product
                    onClick={ this.productInpectSelect }
                    productName={ product.title }
                    productImg={ product.thumbnail }
                    productPrice={ product.price }
                    productId={ product.id }
                  />
                </Link>
              </li>
            ))}
          </ul>   

        )}

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Index;
