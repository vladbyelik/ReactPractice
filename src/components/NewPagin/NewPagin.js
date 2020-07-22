import React from 'react';
import usePagination from '../usePagination';

export default function NewPagin({ array, elements }) {

  const [currArray, numsArray, selectPage] = usePagination(array, elements);

  return (
    <>
      {currArray.map((src,el) => (
        <img src={src} key={el} alt="alt-prop"/>
      ))}
      
      {numsArray.map((_,num) => (
        <a onClick={() => selectPage(num)} key={num} href="#">{num + 1}</a>
      ))}
    </>
  )
}
