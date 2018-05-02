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
      })
    })
    .catch(err => (this.props.history.push('/404'))
  )}

  //do not do history.push, it messes up pressing back



  handleUpVote = event => {
    addVoteArticle(this.state.article._id, this.state.articleVotes).then(result => {
      this.setState({
        articleVotes: result.article.votes
      })
    })
  };

  handleDownVote = event => {
    downVoteArticle(this.state.article._id, this.state.articleVotes).then(result => {
      this.setState({
        articleVotes: result.article.votes
      })
    })
  };

  render() {
    return (
      <div className="singleArticleAreaWrap">
        <div className="singleArticleArea">
        <div className='img-wrapper'>
          <img
            className="articleImgSinglePage"
            src={this.state.article.imageURL}
            alt="imageofthings"
          />
          </div>
          <h1 className="singleArticleTitle">{this.state.article.title}</h1>
          <Link
            id="articleUsername"
            to={`/api/users/${this.state.article.created_by}`}
          >
            <p className="singleArticleAuthor">
              {this.state.article.created_by}
            </p>
          </Link>
          <article className="singleArticleBody">
            {this.state.article.body}
          </article>
          <p className='tagWord'>tags:</p>
          <Link to={`/api/topics/${this.state.article.belongs_to}/articles`}>
            <p className="singleArticleTag">{this.state.article.belongs_to}</p>
          </Link>
          <div className="singleArticleVoteCount">
            <i
              onClick={this.handleUpVote}
              id="upArrow"
              className="fa fa-arrow-up articleArrows upArrow"
            />
            <p className='voteNumber'>{this.state.articleVotes}</p>
            <i
              onClick={this.handleDownVote}
              id="downArrow"
              className="fa fa-arrow-down articleArrows downArrow"
            />
          </div>
        </div>
        <Comments articleID={this.state.article._id} />
      </div>
    );
  }
}

export default SingleArticle;
