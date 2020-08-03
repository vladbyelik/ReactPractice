import React, {useState} from 'react';
import Portal from '../components/Portal';

const TableModal = (props) => {

  const [state, setState] = useState({isModalOpen: false});
  const toggleModal = () => setState({isModalOpen: !state.isModalOpen});
  const {name, surname, age} = props.props;

  return (
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
  )
}

export default TableModal;
