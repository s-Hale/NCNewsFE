
import React from 'react';

class Header extends React.Component {
   
render() {
  return (
    <div className='header'>
      <div className='headerWrapper'>
        {/* <a href='/api/articles'> */}
          <h1 id='mainTitle'>northcoders news</h1>
          <h5 id='mainSubtitle'>header component</h5>
          {/* </a> */}
      </div>
    </div>
  )}   
};


export default Header;