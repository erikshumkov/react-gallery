import React from 'react';

const NotFound = (props) => {
  return (
    <li className="not-found">
      <h3>
        No Results Found
      </h3>
      <p>
        That search did not return any results, please enter another tag or click one of the links.
      </p>
    </li>
  );
}

export default NotFound;
