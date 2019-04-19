import React from 'react';

import Gallery from './Gallery';

const Search = (props) => {

    return(
      <div>
        <Gallery data={props.data} title={props.tag} />
      </div>

    );
}

export default Search;
