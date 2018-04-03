import React from "react";
import { fetchComments, postComment } from "../api";
// import { Link } from "react-router-dom";

class Comments extends React.Component {
  state = {
    comments: [],
    inputComment: ""
  };

  componentWillReceiveProps(articleID) {
    if (articleID)
      fetchComments(articleID.articleID).then(comments => {
        this.setState({
          comments: comments
        });
      });
  }

  handleComment = event => {
    this.setState({
      inputComment: event.target.value
    });
  };

  handlePostComment = () => {
    let articleID = this.props.articleID;
    let commentBody = this.state.inputComment;
    postComment(articleID, commentBody).then(result => {
      console.log(result);
      this.setState({
        inputComment: "",
        comments: this.state.comments
          .concat(result.savedComment)
          .sort(this.handleSortComments)
      });
    });
  };

  handleSortComments(a, b) {
    return b.created_at - a.created_at;
  }

  render() {
    return (
      <div className="commentArea">
        <div className="textAreaPlusSubmit">
          <textarea
            placeholder="add your comment"
            className="newCommentInput"
            id="textArea"
            onChange={this.handleComment}
            value={this.state.inputComment}
          />
          <button id="submitButton" onClick={this.handlePostComment}>
            submit
          </button>
        </div>
        <h4 className="commentTitle">comment area</h4>
        {this.state.comments.map((comment, i) => {
          return (
            <div key={i} className="eachComment">
              <p>{comment.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comments;
