
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
   
render() {
  return (
    <div className='header'>
      <div className='headerWrapper'>
        <Link to={`/api/articles`}>
          <h1 id='mainTitle'>northcoders news</h1>
          <h5 id='mainSubtitle'>header component</h5>
        </Link>  
      </div>
    </div>
  )}   
};


export default Header;