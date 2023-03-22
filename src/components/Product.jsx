import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { productName, productImg, productPrice } = this.props;
    return (
      <div>
        <h1>{ productName }</h1>
        <img src={ productImg } alt={ productName } />
        <p>{ productPrice }</p>
      </div>
    );
  }
}

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  productImg: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
};

export default Product;
