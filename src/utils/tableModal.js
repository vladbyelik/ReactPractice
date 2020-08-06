import React, {useState} from 'react';
import Portal from '../components/Portal';

const TableModal = (props) => {

  const {key, name, surname, age} = props.props;

  const {editItem, deleteItem} = props;

  // console.log(deleteItem);

  const [state, setState] = useState({isModalOpen: false});

  const toggleModal = () => setState({isModalOpen: !state.isModalOpen});

  return (
    <td>
        <button className="modal-btn" onClick={toggleModal}>...</button>
        {state.isModalOpen && 
        <Portal>
          <div className="table-modal">

            <button onClick={() => editItem(key)}>Edit</button>
            <button onClick={() => deleteItem(key)}>Delete</button>
            <button onClick={toggleModal}>Close</button>

          </div>
        </Portal>}
    </td>
  )
}

export default TableModal;
