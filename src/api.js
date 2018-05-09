export const fetchArticles = topic => {
  if (topic) {
    return fetch(`https://still-meadow-57011.herokuapp.com/api/topics/${topic}/articles`)
    .then(res => 
      res.json()
    );
  } else {
    return fetch(`https://still-meadow-57011.herokuapp.com/api/articles`)
    .then(res => 
      res.json()
    );
  }
};

export const fetchArticleById = articleID => {
  return fetch(`https://still-meadow-57011.herokuapp.com/api/articles/${articleID}`)
  .then(res => 
    res.json()
  );
};

export const fetchArticlesByUsername = username => {
  return fetch(`https://still-meadow-57011.herokuapp.com/api/articles/${username}`)
  .then(res => 
    res.json()
  );
};

export const fetchUserInfo = userInfo => {
  return fetch(`https://still-meadow-57011.herokuapp.com/api/users/${userInfo}`)
  .then(res => 
    res.json()
  );
};

export const fetchTopics = () => {
  return fetch("https://still-meadow-57011.herokuapp.com/api/topics")
  .then(res => 
    res.json()
  );
};

export const fetchComments = articleID => {
  return fetch(`https://still-meadow-57011.herokuapp.com/api/articles/${articleID}/comments`)
  .then(res => 
    res.json()
  );
};

export const postComment = (articleID, commentBody) => {
  return fetch(`https://still-meadow-57011.herokuapp.com/api/articles/${articleID}/comments`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ comment: commentBody })
  }).then(res => res.json());
};

export const addVoteArticle = (articleID, articleVote) => {
  return fetch(`https://still-meadow-57011.herokuapp.com/api/articles/${articleID}?vote=up&articleVote=${articleVote}`, {
    method: "PUT"
  }).then(res => 
    res.json()
  );
};

export const downVoteArticle = (articleID, articleVote) => {
  return fetch(`https://still-meadow-57011.herokuapp.com/api/articles/${articleID}?vote=down&articleVote=${articleVote}`, {
    method: "PUT"
  }).then(res => 
    res.json()
  );
};

export const deleteComment = commentID => {
  return fetch(`https://still-meadow-57011.herokuapp.com/api/comments/${commentID}`, {
    method: "DELETE"
  }).then(res => 
    res.json()
  );
};

export const addVoteComment = commentID => {
  return fetch(`https://still-meadow-57011.herokuapp.com/api/comments/${commentID}?vote=up`, {
    method: "PUT"
  }).then(res => 
    res.json()
  );
};

export const downVoteComment = commentID => {
  return fetch(`https://still-meadow-57011.herokuapp.com/api/comments/${commentID}?vote=down`, {
    method: "PUT"
  }).then(res => 
    res.json()
  );
};
