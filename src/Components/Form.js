import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Form extends Component {

  state = {
    formText: ''
  }

  // If the form field gets written in, this method will update the state.
  onTextUpdate = e => {
    this.setState({ formText: e.target.value });
  }

  // Pulse effect gets added to the search button on click or when enter is pressed.
  pulseEffect = () => {
    const button = document.querySelector('.search-button');
    button.classList.add('pulse');
    setTimeout(() => { button.classList.remove('pulse'); }, 500);
  }

  // When form is submitted, formSubmit will get fired and pass three arguments to the App component.
  render() {
    return (
      <form className="search-form"
               onSubmit={e => this.props.formSubmit(e, this.props.history, this.tags.value)} >
        <input type="search"
               name="search"
               ref={(input) => this.tags = input}
               placeholder="Search"
               autoComplete="off"
               onChange={this.onTextUpdate} />
        <button type="submit" className="search-button" onClick={this.pulseEffect} >

          {/* Search Icon */}
          <svg className="sIcon" fill="#84b198" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>

        </button>
      </form>
    );
  }
}

export default withRouter(Form);
