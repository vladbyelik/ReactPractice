import React from 'react';
import usePagination from '../usePagination';
import './Accessibility.css';

const Pagination = ({ array, elements }) => {

  const [currArray, numsArray, selectPage] = usePagination(array, elements);

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
          <a onClick={() => selectPage(num)} href="#"> {num + 1} </a>
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

export default Pagination;
