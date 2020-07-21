import React, {useState} from 'react';
import './Accessibility.css';

const Img = ({ src }) => (
  <>
    <img src={src} alt="alt-text"/>
    <span> Nature photo </span>
  </>
)

const Pagination = ({ props, elementsOnPage }) => {

  const [state, setState] = useState(0);
  const paginNums = Math.ceil( props.length / elementsOnPage );
  const currArray = props.slice( elementsOnPage * state, elementsOnPage * state + elementsOnPage);
  const numsArray = new Array(paginNums).fill('');

  const changePage = (num) => () => setState( num );

  const PaginNums = ( {numsArray} ) => (
    <ul className="pagin-list">
      { numsArray.map((_,num) => (
        <li key={num}>
          <a onClick={changePage(num)}
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
      <PaginNums numsArray={numsArray}/>
    </>
  )
}

export default Pagination;
