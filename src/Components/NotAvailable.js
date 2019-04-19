import React from 'react';

const NotAvailable = (props) => {
  return(
    <div className="main-content not-available">
      <i className="fas fa-exclamation-triangle"></i>
      <h3>Page Not Available</h3>
      <p>Search for something or click one of the link's.</p>
    </div>
  );
}

export default NotAvailable;
