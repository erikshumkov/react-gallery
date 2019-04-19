import React from 'react';
import Image from './Image';
import NotFound from './NotFound';

const List = (props) => {

  // Save fetch data into a variable.
  const apiData = props.data;
  let images;
  // If handleSearch returns any data, display the images otherwise an error message is displayed on the page.
  if (apiData.length > 0) {
    images = apiData.map( img =>
      <Image url={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`}
             key={img.id}
             title={img.title}
              />
    );
  } else {
    images = <NotFound />
  }

  return(
    <ul>
      {images}
    </ul>
  );
}

export default List;
