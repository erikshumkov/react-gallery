import React from 'react';

const Image = (props) => {
  return(
    <li>
      <img src={props.url} alt={props.title} />
      <div className="img-overlay">
        <p>{props.title}</p>
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="btn-hp"><i className="fas fa-home"></i></a>
      </div>
    </li>
  );
}

export default Image;
