import React from 'react';
import { Link } from 'react-router-dom';

// Define the Button component accepting `to` (destination path) and `description` as props
const LinkButton = ({ to, description }) => {
  return (
    <Link to={to} className="link-styles">
      <button className='button-styles'>
        {description}
      </button>
    </Link>
  );
};

export default LinkButton;