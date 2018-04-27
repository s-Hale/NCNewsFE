import React from "react";
import { fetchTopics } from "../api";

class Topics extends React.Component {
  state = {
    topics: []
  };

  componentDidMount() {
    fetchTopics()
    .then(body => {
      this.setState({ topics: body.topics });
    })
  }

  render() {
    return (
      <div className="topicAreaWrap">
          <h3 className="topicTitle">browse articles by topic</h3>
          <div className='topicTagsArea'>
          {this.state.topics.map((topic, i) => {
            return (
              <div key={i}>
                <a href={`/api/topics/${topic.slug}/articles`}>
                  <h5 className="topicName">{topic.title}</h5>
                </a>
              </div>
            );
          })}
          </div>
      </div>
    );
  }
}

export default Topics;
