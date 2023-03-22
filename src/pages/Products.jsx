import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

class Products extends React.Component {
  state = {
    productsDetail: {},
    productsToCart: JSON.parse(localStorage.getItem('cart')) || [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const apiResult = await getProductById(id);
    this.setState({
      productsDetail: apiResult,
    });
  }

  handleCartList = () => {
    const { productsToCart, productsDetail } = this.state;
    this.setState({
      productsToCart: [...productsToCart, productsDetail],
    });
  };

  saveToCart = () => {
    const { productsToCart, productsDetail } = this.state;
    const { id } = productsDetail;
    const toCart = productsToCart.find((item) => item.id === id);

    if (toCart) {
      const updateProduct = productsToCart.filter((itens) => itens.id !== id);
      productsDetail.quantity += 1;
      // console.log(id.quantity);
      const productQuantity = [...updateProduct, productsDetail.quantity];
      localStorage.setItem('cart', JSON.stringify(productQuantity));
      this.setState({
        productsToCart: productQuantity,
      });
    } else {
      console.log('else');
      productsDetail.quantity = 1;
      localStorage.setItem('cart', JSON.stringify([...productsToCart, productsDetail]));
      this.handleCartList(id);
    }
  };

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
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.saveToCart(productsDetail) }
        >
          Adicionar ao carrinho
        </button>
        <Link to="/shoppingcart">
          <button type="button" data-testid="shopping-cart-button">
            Carrinho de compras
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
