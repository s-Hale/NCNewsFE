import React from "react";
import { fetchComments, postComment, deleteComment, addVoteComment, downVoteComment } from "../api";
import { Link } from "react-router-dom";
import { filterComments, alterVote } from "../stateupdaters.js";

class Comments extends React.Component {
  state = {
    comments: [],
    inputComment: ""
  };

  componentWillReceiveProps(articleID) {
    if (articleID)
      fetchComments(articleID.articleID)
      //fix this, send correct info from res
      .then(comments => {
        this.setState({
          comments: comments.sort(this.handleSortComments)
        });
      })
      .catch(err => (this.props.history.push('/404')))
  }

  handleComment = event => {
    this.setState({
      inputComment: event.target.value
    });
  };

  handlePostComment = () => {
    let articleID = this.props.articleID;
    let commentBody = this.state.inputComment;
    if (this.state.inputComment)
      postComment(articleID, commentBody).then(result => {
        this.setState({
          inputComment: "",
          comments: this.state.comments
            .concat(result.savedComment)
            .sort(this.sortComments)
        });
      });
  };

  sortComments(a, b) {
    return b.created_at - a.created_at;
  }

  handleDeleteComment = event => {
    let commentID = event.target.id;
    this.setState({
      comments: filterComments(this.state.comments, commentID) 
    });
    deleteComment(commentID);
  };

  handleUpVoteComment = event => {
    let commentID = event.target.id;
    this.setState({
      comments: alterVote(this.state.comments, commentID, "up")
    });
    addVoteComment(commentID);
  };

  handleDownVoteComment = event => {
    let commentID = event.target.id;
    this.setState({
      comments: alterVote(this.state.comments, commentID, "down")
    });
    downVoteComment(commentID);
  };

  render() {
    return (
      <div className="commentArea">
        <div className="textAreaInputBox">
          <textarea placeholder="add your comment" className="newCommentInput" id="textArea" onChange={this.handleComment} value={this.state.inputComment}/>
          <button id="submitButton" onClick={this.handlePostComment}>
            submit
          </button>
        </div>
        {this.state.comments.map((comment, i) => {
          return (
            <div key={i} className="eachComment">
              <p>{comment.body}</p>
              <Link id="commentUsername" to={`/users/${comment.created_by}`}>
                <p className="indivCommentAuthor">{comment.created_by}</p>
              </Link>
              <i onClick={this.handleUpVoteComment} id={comment._id} className="fa fa-arrow-up commentArrows upArrow"/>
              <i onClick={this.handleDownVoteComment} id={comment._id} className="fa fa-arrow-down commentArrows downArrow" />
              <div className="xWrapper">
                <p>{comment.votes}</p>
                {comment.created_by === "northcoder" && (
                  <i onClick={this.handleDeleteComment} id={comment._id} className="fa fa-times deleteCommentX" title="delete your comment?" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comments;
