import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const Navigation = (props) => {

    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink className="btn" to="/lighthouse" onClick={(e) => props.handleClick(e)}>lighthouse</NavLink></li>
          <li><NavLink className="btn" to="/sunrise" onClick={(e) => props.handleClick(e)}>sunrise</NavLink></li>
          <li><NavLink className="btn" to="/mountains" onClick={(e) => props.handleClick(e)}>mountains</NavLink></li>
        </ul>
      </nav>
    );
}

export default withRouter(Navigation);
