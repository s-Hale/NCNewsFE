
export const fetchArticles = (topic) => {
  if(topic) {
    return fetch(`http://localhost:9090/api/topics/${topic}/articles`)
      .then(res => res.json())
  } else {
    return fetch(`http://localhost:9090/api/articles`)
    .then(res => res.json())
  }
}

