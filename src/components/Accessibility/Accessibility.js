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
  const [state, setState] = useState(0);
  const paginNums = Math.ceil( props.images.length / elementsOnPage );
  const currArray = props.images.slice( elementsOnPage * state, elementsOnPage * state + elementsOnPage);
  const numsArray = new Array(paginNums).fill('');

  const PaginNums = ( numsArray ) => (
    <ul className="pagin-list">
      { numsArray.map((_,num) => (
        <li key={num}>
          <a onClick={ () => setState( num ) }
             href="#"> {num + 1} </a>
        </li>
      ))}
    </ul>)

  return (
    <>
      <ul className="image-list">
        {currArray.map((item, idx) => (
          <li key={idx} className="img">
            <Img src={item} />
          </li>
        ))}
      </ul>
      <PaginNums nums={numsArray}/>
    </>
  )
}

export default Pagination;
