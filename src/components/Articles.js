import React, {Component} from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router-dom";

class Articles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    let { topic } = this.props.match.params;
    this.fetchArticlesByTopic(topic)
  }

  componentWillReceiveProps(newProps) {
    let { topic } = newProps.match.params;
    this.fetchArticlesByTopic(topic)
 }

  render() {
    return (
      <div className="articleAreaWrap">
        <div className="articleArea">
          {this.state.articles.map((article, i) => {
            return (
              <div className="eachIndivArticle" key={i}>
                <Link to={`/articles/${article._id}`}>
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

  //eslint properly, and install as dev dependency

   fetchArticlesByTopic = (topic) => {
    fetchArticles(topic).then(articles => {
      if (topic) {
        if(articles.articles)
        this.setState({ articles: articles.articles });
      } else  {
        this.setState({ articles: articles.allArticles })
      }
    })
    .catch(err => (this.props.history.push('/404')))
  }
}



export default Articles;
