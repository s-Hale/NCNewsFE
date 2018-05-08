import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import User from "./components/User";
import Comments from "./components/Comments";
import NotFound from "./components/NotFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/topics/:topic/articles" component={Articles}/>
            <Route path="/articles/:article_id" component={SingleArticle} />
            <Route path="/articles" component={Articles} />
            <Route path="/topics" render={() => (<Redirect to="/articles"/>)}/>
            <Route path="/comments" component={Comments} />
            <Route path="/users/:username" component={User} />
            <Route exact path="/" render={() => (<Redirect to="/articles/"/>)}/>
            <Route path="/*" component={NotFound} />
          </Switch>
          <div className="App" />
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
