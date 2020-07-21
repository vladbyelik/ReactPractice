import React, {Fragment, useState} from 'react';
import './Accessibility.css';

const Img = ({ src }) => (
  <Fragment>
    <img src={src} alt="alt-text"/>
    <span> Nature photo </span>
  </Fragment>
)

const Pagination = ({ props }) => {

  const elementsOnPage = 3;
  const [state, setState] = useState(1);
  const paginNums = Math.ceil( props.images.length / elementsOnPage );
  const currArray = props.images.slice( elementsOnPage * state - elementsOnPage, elementsOnPage * state );

  const PaginNums = ( {nums} ) => (
    <ul className="pagin-list">
      { new Array(nums).fill('').map((_,num) => (
        <li key={num}>
          <a onClick={ () => setState( num + 1 ) }
             href="#"> {num + 1} </a>
        </li>
      ))}
    </ul>)

  return (
    <Fragment>
      <ul className="image-list">
        {currArray.map((item, idx) => (
          <li key={idx} className="img">
            <Img src={item} />
          </li>
        ))}
      </ul>
      <PaginNums nums={paginNums}/>
    </Fragment>
  )
}

export default Pagination;
