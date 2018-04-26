import React from "react";
import { fetchUserInfo, fetchArticles } from "../api";
import { Link } from "react-router-dom";

class User extends React.Component {
  state = {
    user: {},
    userArticles: []
  };

  componentDidMount() {
    const userInfo = this.props.match.params.username;
    fetchUserInfo(userInfo)
    .then(body => {
      this.setState({ user: body.user });
    })
    fetchArticles()
    .then(res => {
      let userArts = res.allArticles.filter(article => {
       return article.created_by === userInfo
     })
    this.setState({ userArticles: userArts });
    });
  }

  render() {
    return (
      <div className='userWrapper'>
      <div className="userProfileArea">
        <h4 id="profileUsername">user:{this.state.user.username}</h4>
        <h4 id="profileName">name:{this.state.user.name}</h4>
        <img src={this.state.user.avatar_url} className="userAvatar" alt="userAvatar"/>
      </div>
      <div className='userArticles'>
          {this.state.userArticles.map((article, i) => {
            return (
              <div className="indivUserArticle" key={i}>
                <Link to={`/api/articles/${article._id}`}>
                  <h1 className="indivUserArticleTitle">{article.title}</h1>
                  </Link>
                  <div className="indivUserArticleSnippet">
                    {article.body.substring(0, 250) + " ... [read more]"}
                  </div>
              </div>
            )
          })}
            </div>
      </div>
    );
  }
}

export default User;
