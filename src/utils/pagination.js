import {useState} from 'react';

export const PaginLogic = (props, elementsOnPage) => {
  const [state, setState] = useState(0);
  const paginNums = Math.ceil( props.length / elementsOnPage );
  const currArray = props.slice( elementsOnPage * state, elementsOnPage * state + elementsOnPage );
  if (currArray.length === 0) { setState(state - 1) }
  const numsArray = new Array(paginNums).fill(null);
  const selectPage = (num) => setState(num);
  return [currArray, numsArray, selectPage];
}
