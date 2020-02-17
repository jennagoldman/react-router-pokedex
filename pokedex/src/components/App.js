import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}
