export const filterComments = (comments, commentID) => {
  return comments.filter(comment => {
    return comment._id !== commentID;
  });
};

export const alterVote = (comments, commentID, str) => {
  return comments.map(comment => {
    if (comment._id === commentID && str === "up") comment.votes += 1;
    if (comment._id === commentID && str === "down") comment.votes -= 1;
    return comment;
  });
};
