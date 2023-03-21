import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

class Products extends React.Component {
  state = {
    productsDetail: {},
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const apiResult = await getProductById(id);
    this.setState({
      productsDetail: apiResult,
    });
  }

  render() {
    const { productsDetail } = this.state;
    const { title, thumbnail, price } = productsDetail;

    return (
      <>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img
          data-testid="product-detail-image"
          src={ thumbnail }
          alt={ title }
        />
        <p data-testid="product-detail-price">{ price }</p>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          <button
            type="button"
          >
            Adicionar oo carrinho
          </button>
        </Link>
      </>
    );
  }
}

Products.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}.isRequired;

export default Products;
