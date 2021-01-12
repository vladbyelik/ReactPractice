import React from "react";
import { Link } from "react-router-dom";
import "./RouterLinks.css";

const RouterLinks = () => (
  <ul className="router-links">
    <li>
      <Link to="/">Main</Link>
    </li>
    <li>
      <Link to="/link1">Modal window</Link>
    </li>
    <li>
      <Link to="/link2">Ref - example</Link>
    </li>
    <li>
      <Link to="/cat">Cat&Mouse</Link>
    </li>
    <li>
      <Link to="/pdf">PDF&Excel</Link>
    </li>
    <li>
      <Link to="/pdf2">PDF&Excel2</Link>
    </li>
    <li>
      <Link to="/table">Table</Link>
    </li>
  </ul>
);

export default RouterLinks;
