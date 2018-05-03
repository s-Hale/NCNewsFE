import React from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router-dom";

class AllArticles extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    let topic = this.props.match.params.topic;
    this.fetchArticlesByTopic(topic)
  }

  componentWillReceiveProps(newProps) {
    let topic = newProps.match.params.topic
    this.fetchArticlesByTopic(topic)
 }

//do not do history.push, it messes up pressing back

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

   fetchArticlesByTopic(topic) {
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



export default AllArticles;
