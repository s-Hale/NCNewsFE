import React from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router-dom";

class AllArticles extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    let topic = this.props.match.params.topic;
    fetchArticles(topic).then(articles => {
      if (topic) {
        this.setState({ articles: articles.articles });
      } else {
        this.setState({ articles: articles.allArticles });
      }
    });
  }

  render() {
    return (
      <div className="allArticleAreaWrap">
        <div className="allArticleArea">
          {this.state.articles.map((article, i) => {
            return (
              <div className="eachIndivArticle" key={i}>
                <Link to={`/api/articles/${article._id}`}>
                  <h1 className="indivArticleTitle">{article.title}</h1>
                  <Link to={`/api/users/${article.created_by}`}>
                    <p className="indivArticleAuthor">{article.created_by}</p>
                  </Link>
                  <div className="indivArticleSnippet">
                    {article.body.substring(0, 250) + " ... [read more]"}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllArticles;
