import React, { useState } from 'react';
import { PaginLogic } from '../../utils/pagination';
import { users, headers } from '../../utils/constants';
import { useTable } from '../../utils/useTable';
import TableModal from '../../utils/tableModal';
import './Table.css';

// const User = (props) => {

//   const {name, surname, age} = props.user;

//   return (
//     <tr>
//       <td> {name} </td>
//       <td> {surname} </td>
//       <td> {age} </td>
//       <TableModal props={props.user}/>
//     </tr>
//   )
// };

const Users = (props) => {
  
  const {currArray} = props;

  const [state, setState] = useState(currArray);

  const editItem = (key) => {
    console.log(key);
  };

  const deleteItem = (key, arr) => {
    const newArr = arr.filter(item => item.key !== key);
    setState(newArr);
  };

  return (
    <tbody>
      {state.map(user => {
        const {key, name, surname, age} = user;
        return (
          <tr key={key}>
            <td> {name} </td>
            <td> {surname} </td>
            <td> {age} </td>
            <TableModal props={user} deleteItem={() => deleteItem(key, state)} editItem={editItem}/>
          </tr>)}
        )}
    </tbody>
  )
}

const Table = () => {

  const [filteredUsers, filter, toggleSort] = useTable(users);
  const [currArray, numsArray, selectPage] = PaginLogic(filteredUsers, 7);

  return (
    <>
      <ul className="table-nums-list">
        {numsArray.map((_,num) => (
          <li key={num}>
            <button 
              className="btn-num"
              onClick={() => selectPage(num)}>
                {num + 1}
            </button>
          </li>
        ))}
      </ul>

      <form>
        <input type="text" placeholder='search by name' onChange={(e) => filter(e.target.value)} />
      </form>

      <table className="table">
      
        <thead>
          <tr>
            {headers.map((headline,idx) =>
              <th key={idx} 
                  className="th-headline" 
                  onClick={() => toggleSort(headline.propName)}>
                    {headline.isSortable ? headline.propName : <span>...</span>}
              </th>)}
          </tr>
        </thead>

        <Users currArray={currArray}/>

      </table>
    </>
  )
};

export default Table;
