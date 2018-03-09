
import React from 'react';
import {fetchUserInfo} from '../api';



class User extends React.Component {
  state = {
    user: {}
  };

  componentDidMount () {
    const userInfo = this.props.match.params.username;
    fetchUserInfo(userInfo).then(body => {
      this.setState({ user: body.user}); 
   })
  }

  render() {
    return (
      <div className='userProfileArea'> 
        <h4 id='profileUsername'>user:{this.state.user.username}</h4>
        <h4 id='profileName'>name:{this.state.user.name}</h4>
        <img src = {this.state.user.avatar_url} className='userAvatar' alt="userAvatar"/>
      </div>
    )
  }
}



export default User;