import React, {useState} from 'react';
import './Table.css';
import { PaginLogic } from '../../utils/pagination';
import { users, headers } from '../../utils/constants';
import Portal from '../Portal';

class User extends React.Component {

  state = {
    isModalOpen: false
  }

  constructor(props) {
    super(props);
    this.name = props.user.name;
    this.surname = props.user.surname;
    this.age = props.user.age;
  }

  toggleModal = () => !this.setState({ isModalOpen: !this.state.isModalOpen });

  render() {
    return (
      <>
        <td> {this.name} </td>
        <td> {this.surname} </td>
        <td> {this.age} </td>
        <td>
          <button className="modal-btn" onClick={this.toggleModal}>...</button>
          {this.state.isModalOpen && 
          <Portal>
            <div className="modal">
              <button onClick={this.toggleModal}>Close</button>
            </div>
          </Portal>}
        </td>
      </>
    )
}}

class Users extends React.Component {
  render() {
    const { currArray } = this.props;
    return (
      <tbody>
        {currArray.map(user => {
          return (
            <tr key={user.key}>
              <User user={user} />
            </tr>
            )
          })}
      </tbody>
    )
  }
}

const obj = [{
  key: 23,
  name: 'Vasya',
  surname: 'Pupkin',
  age: 23,
},
{
  key: 21,
  name: 'Vadfsfsya',
  surname: 'Pupsdfsdfsdfkin',
  age: 21,
}]

const Table = () => {

  const [stateArr, setStateArr] = useState(users);

  const toggleSort = (propName) => setStateArr(() => {

    switch (propName) {
      case 'name':
        console.log('this is name');
        return [...obj];
        
      case 'surname':
        console.log('this is surname');
        return users.reverse();

      case 'age':
        console.log('this is age');
        return users;

      default:
        break;
    }

  });

  
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
