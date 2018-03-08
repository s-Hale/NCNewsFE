import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import AllArticles from './components/AllArticles';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header></Header>
        <Switch>
        <Route path = '/api/articles' component={AllArticles} />
        </Switch>
        <div className="App">
        </div>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
