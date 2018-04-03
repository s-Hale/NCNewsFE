import React from "react";
import { fetchArticleById, addVoteArticle, downVoteArticle } from "../api";
import { Link } from "react-router-dom";
import Comments from "./Comments";

class SingleArticle extends React.Component {
  state = {
    article: {},
    articleVotes: null
  };

  componentDidMount() {
    let articleID = this.props.match.params.article_id;
    fetchArticleById(articleID).then(results => {
      this.setState({
        article: results.article,
        articleVotes: results.article.votes
      });
    });
  }

  handleUpVote = event => {
    addVoteArticle(this.state.article._id).then(result => {
      this.setState({
        articleVotes: result.article.votes
      });
    });
  };

  handleDownVote = event => {
    downVoteArticle(this.state.article._id).then(result => {
      this.setState({
        articleVotes: result.article.votes
      });
    });
  };

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
          <p className="singleArticleVoteCount">
            {this.state.articleVotes}
            <i
              onClick={this.handleUpVote}
              id="upArrow"
              className="fa fa-arrow-up articleArrows"
            />
            <i
              onClick={this.handleDownVote}
              id="downArrow"
              className="fa fa-arrow-down articleArrows"
            />
          </p>
        </div>
        <Comments articleID={this.state.article._id} />
      </div>
    );
  }
}

export default SingleArticle;
