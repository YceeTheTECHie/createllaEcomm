import React from 'react';
const Loader = ({action}) => (
  (action)? 
    <div className="justify-content-center loader"><p className="loader-text">Loading...</p></div>
        : 
        null
)

export default Loader;

