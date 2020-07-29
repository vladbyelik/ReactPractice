import React, {useState} from 'react';
import './Table.css';
import { PaginLogic } from '../../utils/pagination';
import { users, headers } from '../../utils/constants';
import Portal from '../Portal';

class User extends React.Component {

  state = {
    isModalOpen: false
  }

  toggleSort = (prop) => {

    console.log();

    const newCurrArr = [];
    return newCurrArr;
    
  }

  toggleModal = () => !this.setState({ isModalOpen: !this.state.isModalOpen });

  render() {

    const { currArray } = this.props;

    return (
      <tbody>
        {currArray.map(user => {
          return (
            <tr key={user.key}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.age}</td>
              <td>
                <button className="modal-btn" onClick={this.toggleModal}>...</button> 
                {this.state.isModalOpen && 
                <Portal>
                  <div className="modal">
                    <button onClick={this.toggleModal}>Close</button>
                    <h3>Modal is open!</h3>
                  </div>
                </Portal>}
              </td>
            </tr>
            )
          })}
      </tbody>
    )
  }
}

const Table = () => {

  const dots = <span>...</span>;

  const [stateArr, setStateArr] = useState(users);

  // sort function here...

  const [currArray, numsArray, selectPage] = PaginLogic(stateArr, 5);

  return (
    <>
      <ul className="table-nums-list">
        {numsArray.map((_,num) => (
          <li key={num}>
            <button className="btn-num" onClick={() => selectPage(num)}> {num + 1} </button>
          </li>
        ))}
      </ul>

      <table className="table">
        <thead>
          <tr>
            {headers.map((headline,idx) => 
              <th key={idx} className="th-headline">
                { headline.isSortable ? headline.propName : dots }
              </th>)}
          </tr>
        </thead>

        <User currArray={currArray} />

      </table>
    </>
  )
};

export default Table;
