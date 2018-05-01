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
    .catch(err => (this.props.history.push('/404')))
    fetchArticles()
    .then(res => {
      let userArts = res.allArticles.filter(article => {
       return article.created_by === userInfo
     })
    this.setState({ userArticles: userArts });
    })
    .catch(err => (this.props.history.push('/404')))
  }

  render() {
    return (
      <div className='userAreaWrap'>
      <div className="userProfileArea">
      <div className='imgWrap'>
      <img src={this.state.user.avatar_url} className="userAvatar" alt="userAvatar"/>
      </div>
        <div className="profileUsername">
          <p>user:</p>
          <p>{this.state.user.username}</p>
        </div>
        <div className="profileName">
          <p>name:</p>
          <p>{this.state.user.name}</p>
        </div>
      </div>
      <div className='userArticles'>
      <h2 className='byUser'>by this user:</h2>
          {this.state.userArticles.map((article, i) => {
            return (
              <div className="indivUserArticle" key={i}>
                <Link to={`/api/articles/${article._id}`}>
                  <h1 className="indivUserArticleTitle">{article.title}</h1>
                  </Link>
                  <div className="indivUserArticleSnippet">
                    {article.body.substring(0, 50) + " ..."}
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
