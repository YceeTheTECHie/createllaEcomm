import React from 'react';
const Loader = ({action}) => (
  (action)? 
    <div class="loader"><p class="loader-text">Loading...</p></div>
        : 
        null
)

export default Loader;

