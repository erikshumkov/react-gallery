import React from 'react';
import List from './List';

const Gallery = (props) => {

  const style = {
    hide: { display: "none" }
  }
  let images = props.data.length;
  return (
    <div className="photo-container">
      {
      // If no data is returned from the fetch call hide h2 element.
      (images === 0)
        ? <h2 style={style.hide}>{props.title}</h2>
        : <h2>{props.title}</h2>
      }
      <List data={props.data} />

    </div>
  );
}

export default Gallery;
