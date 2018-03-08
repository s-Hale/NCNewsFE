
export const fetchArticles = () => {
    return fetch(`http://localhost:9090/api/articles`)
      .then(res => res.json())
  }

