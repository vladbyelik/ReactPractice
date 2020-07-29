import {useState} from 'react';

export const PaginLogic = (props, elementsOnPage) => {
  const [state, setState] = useState(0);
  const paginNums = Math.ceil( props.length / elementsOnPage );
  const currArray = props.slice( elementsOnPage * state, elementsOnPage * state + elementsOnPage );
  const numsArray = new Array(paginNums).fill(null);
  const selectPage = (num) => setState(num);
  return [currArray, numsArray, selectPage];
}
