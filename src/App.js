import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import AllArticles from './components/AllArticles';
import SingleArticle from './components/SingleArticle';
import User from './components/User';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header></Header>
        <Switch>
        <Route exact path = '/api/topics/:topic/articles' component={AllArticles} />
        <Route path = '/api/articles/:article_id' component={SingleArticle} />
        <Route path = '/api/articles' component={AllArticles} />
        <Route path = '/api/users/:username' component={User} />
        <Route path = '/' component={AllArticles} />
        </Switch>
        <div className="App">
        </div>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
