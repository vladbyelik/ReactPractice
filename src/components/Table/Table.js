import React from 'react';
import { PaginLogic } from '../../utils/pagination';
import { users, headers } from '../../utils/constants';
import { useTable } from '../../utils/useTable';
import TableModal from '../../utils/tableModal';
import './Table.css';

const User = (props) => {

  const {name, surname, age} = props.user;

  return (
    <tr>
      <td> {name} </td>
      <td> {surname} </td>
      <td> {age} </td>
      <TableModal props={props.user}/>
    </tr>
  )
};

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

        <tbody>
          {currArray.map(user => <User key={user.key} user={user} />)}
        </tbody>

      </table>
    </>
  )
};

export default Table;
