
export const fetchArticles = (topic) => {
  if(topic) {
    return fetch(`http://localhost:9090/api/topics/${topic}/articles`)
      .then(res => res.json())
  } else {
    return fetch(`http://localhost:9090/api/articles`)
      .then(res => res.json())
  }
}

export const fetchArticleById = (articleID) => {
  console.log(articleID)
  return fetch(`http://localhost:9090/api/articles/${articleID}`)
    .then(res => res.json())
}

