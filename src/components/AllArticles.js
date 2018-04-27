import React from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router-dom";

class AllArticles extends React.Component {
  state = {
    articles: [],
    menuShow: false
  };

  componentDidMount() {
    let topic = this.props.match.params.topic;
    fetchArticles(topic).then(articles => {
      if (topic) {
        this.setState({ articles: articles.articles });
      } else {
        this.setState({ articles: articles.allArticles });
      }
    })
    .catch(err => console.log(err))
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
                  <div className='img-wrapper'>
                  <img
                    className="articleImgHomepage"
                    src={article.imageURL}
                    alt="imageofthings"
                  /></div>
                  <div className="indivArticleSnippet">
                    {article.body.substring(0, 120) + " ..."}
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
