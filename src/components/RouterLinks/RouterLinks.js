import React from 'react';
import { Link } from 'react-router-dom';

const RouterLinks = () => {
  return (
    <ul>
      <li>
        <Link to="/">Main</Link>
      </li>
      <li>
        <Link to="/link1">Link1</Link>
      </li>
      <li>
        <Link to="/link2">Link1</Link>
      </li>
    </ul>
  )
}

export default RouterLinks;
