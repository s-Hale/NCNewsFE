import React from "react";
import { fetchTopics } from "../api";
import { Link } from "react-router-dom";

class Topics extends React.Component {
  state = {
    topics: []
  };

  componentDidMount() {
    fetchTopics()
    .then(body => {
      this.setState({ topics: body.topics });
    })
    .catch(err => (this.props.history.push('/404')))
  }

  //do not do history.push, it messes up pressing back

  render() {
    return (
      <div className="topicAreaWrap">
          <h3 className="topicTitle">browse articles by topic</h3>
          <div className='topicTagsArea'>
          <Link className='topicName' to="/api/articles">All</Link>
          {this.state.topics.map((topic, i) => {
            return (
              <div key={i}>
                <Link to={`/api/topics/${topic.slug}/articles`}>
                  <h5 className="topicName">{topic.title}</h5>
                </Link>
              </div>
            );
          })}
          </div>
      </div>
    );
  }
}

export default Topics;
