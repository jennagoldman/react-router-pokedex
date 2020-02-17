import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import List from './List';
import Detail from './Detail';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/:search?" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/pokemons/:name" component={Detail} />
          </Switch>
        </Router>
      </div>
    );
  }
}

