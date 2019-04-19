import React from 'react';
import Form from './Form';
import Navigation from './Navigation';


const Header = (props) => {
  return (
    <header>

      <Form formSubmit={props.formSubmit} />

      <Navigation handleClick={props.handleClick} />

    </header>
  );
}

export default Header;
