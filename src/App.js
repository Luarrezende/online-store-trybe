import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import index from './pages/index';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ index } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
