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

  render() {
    return (
      <div className="topicAreaWrap">
          <h3 className="topicTitle">browse articles by topic</h3>
          <div className='topicTagsArea'>
          <Link className='topicName' to="/articles">All</Link>
          {this.state.topics.map((topic, i) => {
            return (
              <div key={i}>
                <Link to={`/topics/${topic.slug}/articles`}>
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
