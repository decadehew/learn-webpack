'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
// import './search.css';
import './search.scss';
// import './search.less';

class Search extends React.Component {
  render () {
    return (
      <div className="search-text">Search Text</div>
    )
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)