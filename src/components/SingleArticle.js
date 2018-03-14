import React from "react";
import { fetchArticleById } from "../api";
import { Link } from "react-router-dom";

class SingleArticle extends React.Component {
  state = {
    article: {},
    articleVotes: null
  };

  componentDidMount() {
    let articleID = this.props.match.params.article_id;
    fetchArticleById(articleID).then(results => {
      console.log(results.article);
      this.setState({
        article: results.article,
        articleVotes: results.article.votes
      });
    });
  }

  render() {
    return (
      <div className="singleArticleAreaWrap">
        <div className="singleArticleArea">
          <h1 className="singleArticleTitle">{this.state.article.title}</h1>
          <article className="singleArticleBody">
            {this.state.article.body}
          </article>
          <Link
            id="articleUsername"
            to={`/api/users/${this.state.article.created_by}`}
          >
            <p className="singleArticleAuthor">
              {this.state.article.created_by}
            </p>
          </Link>
          <Link to={`/api/topics/${this.state.article.belongs_to}/articles`}>
            <p className="singleArticleTag">{this.state.article.belongs_to}</p>
          </Link>
          <p className="singleArticleVoteCount">{this.state.article.votes}</p>
        </div>
      </div>
    );
  }
}

export default SingleArticle;
