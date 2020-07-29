import React from 'react';
import './PaginOne.css';
import { PaginLogic } from '../../utils/pagination';

const PaginOne = ( {props, elementsOnPage} ) => {

  const [currArray, numsArray, selectPage] = PaginLogic(props, elementsOnPage);
  
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
