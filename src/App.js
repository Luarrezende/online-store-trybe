import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import index from './pages/Index';
import shoppingcart from './pages/ShoppingCart';
import Product from './components/Product';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ index } />
          <Route exact path="/shoppingcart" component={ shoppingcart } />
          <Route
            exact
            path="/product/:id"
            render={ (props) => <Product { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
