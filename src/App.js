import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import index from './pages/Index';
import shoppingcart from './pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ index } />
          <Route exact path="/shoppingcart" component={ shoppingcart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
