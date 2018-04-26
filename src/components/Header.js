import React from "react";
import Topics from "./Topics";

class Header extends React.Component {
  state = {
    menuShow: false
  };

  handleMenuToggle = event => {
    this.setState({
      menuShow: !this.state.menuShow
    });
  };

  render() {
    return (
      <div className="header">
        <div className="headerWrapper">
          <a href="/api/articles">
            <h1 id="mainTitle">northcoders news</h1>
          </a>
          <i className="fa fa-bars burgerIcon" onMouseDown={this.handleMenuToggle} />
          <div className="topicMenu" style={{ display: this.state.menuShow ? "block" : "none" }}>
            <Topics />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
