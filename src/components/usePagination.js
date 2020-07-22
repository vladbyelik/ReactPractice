import {useState} from 'react';

const usePagination = ( props, elementsOnPage ) => {

  const [state, setState] = useState(0);
  const paginNums = Math.ceil( props.length / elementsOnPage );
  const currArray = props.slice( elementsOnPage * state, elementsOnPage * state + elementsOnPage );
  const numsArray = new Array(paginNums).fill('');
  const selectPage = (num) => setState(num);
  return [currArray, numsArray, selectPage];

};

export default usePagination;
