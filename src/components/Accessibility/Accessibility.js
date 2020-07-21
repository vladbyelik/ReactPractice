import React, {useState} from 'react';
import './Accessibility.css';

const Pagination = ({ props, elementsOnPage }) => {

  const [state, setState] = useState(0);
  const paginNums = Math.ceil( props.length / elementsOnPage );
  const currArray = props.slice( elementsOnPage * state, elementsOnPage * state + elementsOnPage );
  const numsArray = new Array(paginNums).fill('');
  const selectPage = (num) => () => setState(num);

  const PaginNums = ( {numsArray} ) => (
    <ul className="pagin-list">
      { numsArray.map((_,num) => (
        <li key={num}>
          <a onClick={selectPage(num)}
             href="#"> {num + 1} </a>
        </li>
      ))}
    </ul>)

  return (
    <>
      <ul className="image-list">
        {currArray.map((item, idx) => (
          <li key={idx} className="img">
            <img src={item} alt="alt-text"/>
            <span> Nature photo </span>
          </li>
        ))}
      </ul>
      <PaginNums numsArray={numsArray}/>
    </>
  )
}

export default Pagination;
