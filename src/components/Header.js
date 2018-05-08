import React from "react";
import Topics from "./Topics";

class Header extends React.Component {

  render() {
    return (
        <div className="headerAreaWrap">
          <a href="/articles">
            <h1 className="mainTitle">northcoders news</h1>
          </a>
            <Topics />
        </div>
    );
  }
}

export default Header;
