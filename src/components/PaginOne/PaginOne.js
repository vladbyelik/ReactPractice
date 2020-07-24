import React, {useState} from 'react';
import './PaginOne.css';

const PaginOne = ( {props, elementsOnPage} ) => {

  const [state, setState] = useState(0);
  const paginNums = Math.ceil( props.length / elementsOnPage );
  const currArray = props.slice( elementsOnPage * state, elementsOnPage * state + elementsOnPage );
  const numsArray = new Array(paginNums).fill(null);
  const selectPage = (num) => setState(num);

  const ElementsList = ( {currArray} ) => (
    <ul className="image-list">
      {currArray.map((item, idx) => (
        <li key={idx} className="img">
          <img src={item} alt="alt-text"/>
          <span> Nature photo </span>
        </li>
      ))}
    </ul>)

  const PaginList = ( {numsArray} ) => (
    <ul className="pagin-list">
      {numsArray.map((_,num) => (
        <li key={num}>
          <button onClick={() => selectPage(num)}> {num + 1} </button>
        </li>
      ))}
    </ul>)

  return (
    <>
      <ElementsList currArray={currArray}/>
      <PaginList numsArray={numsArray}/>
    </>
  )
}

export default PaginOne;
