import React, {useState} from 'react';
import './Table.css';
import { PaginLogic } from '../../utils/pagination';
import { users, headers } from '../../utils/constants';
import Portal from '../Portal';

const User = (props) => {

  const [state, setState] = useState({
    isModalOpen: false
  })

  const toggleModal = () => setState({ isModalOpen: !state.isModalOpen });

  const {name, surname, age} = props.user;

  return (
    <>
      <td> {name} </td>
      <td> {surname} </td>
      <td> {age} </td>
      <td>
        <button className="modal-btn" onClick={toggleModal}>...</button>
        {state.isModalOpen && 
        <Portal>
          <div className="modal">
            {name}
            {surname}
            {age}
            <button onClick={toggleModal}>Close</button>
          </div>
        </Portal>}
      </td>
    </>
  )
}

const Users = (props) => {
  return (
    <tbody>
      {props.currArray.map(user => {
        return (
          <tr key={user.key}>
            <User user={user} />
          </tr>
          )
        })}
    </tbody>
  )
}

const Table = () => {

  const [stateArr, setStateArr] = useState(users);

  const [toggle, setToggle] = useState({toReverse: false}) 

  const toggleSort = (propName) => {

    setToggle({toReverse: !toggle.toReverse});

    const sort = (prName) => setStateArr(
      toggle.toReverse ? 
        [...stateArr].sort((a,b) => a[prName].toUpperCase() > b[prName].toUpperCase() ? 1 : -1) :
        [...stateArr].sort((a,b) => a[prName].toUpperCase() < b[prName].toUpperCase() ? 1 : -1));

    const sortNum = (prName) => setStateArr(
      toggle.toReverse ? 
        [...stateArr].sort((a,b) => a[prName] - b[prName]) :
        [...stateArr].sort((a,b) => b[prName] - a[prName]));

    switch (propName) {
      case 'name':
        return sort('name');
        
      case 'surname':
        return sort('surname');

      case 'age':
        return sortNum('age');

      default:
        break;
    }
  };

  const [currArray, numsArray, selectPage] = PaginLogic(stateArr, 5);

  return (
    <>
      <ul className="table-nums-list">
        {numsArray.map((_,num) => (
          <li key={num}>
            <button className="btn-num" 
                    onClick={() => selectPage(num)}> 
                      {num + 1} 
            </button>
          </li>
        ))}
      </ul>

      <table className="table">
        <thead>
          <tr>
            {headers.map((headline,idx) => 
              <th key={idx} className="th-headline" onClick={() => toggleSort(headline.propName)}>
                { headline.isSortable ? headline.propName : <span>...</span> }
              </th>)}
          </tr>
        </thead>

        <Users currArray={currArray} />

      </table>
    </>
  )
};

export default Table;
