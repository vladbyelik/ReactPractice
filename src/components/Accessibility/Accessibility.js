import React, {Fragment} from 'react';
import './Accessibility.css';

const Img = ({ src }) => {
  return (
    <Fragment>
      <img src={src} alt="alt-text"/>
      <span> Nature photo </span>
    </Fragment>
  )
};

const Accessibility = ({ props } ) => {
  return (
    <ul className="image-list">
      {props[0].images.map((item,index) => {
        return (
          <li key={index} className="img">
            <Img src={item} alt="alt-text" />
          </li>
        )
      })}
    </ul>
  )
};

export default Accessibility;
