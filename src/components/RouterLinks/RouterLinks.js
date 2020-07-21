import React from 'react';
import { Link } from 'react-router-dom';
import './RouterLinks.css';

const RouterLinks = () => (
  <ul className="router-links">
    <li>
      <Link to="/">Main</Link>
    </li>
    <li>
      <Link to="/link1">Link1</Link>
    </li>
    <li>
      <Link to="/link2">Link2</Link>
    </li>
  </ul>
)

export default RouterLinks;
