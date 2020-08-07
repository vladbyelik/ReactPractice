import React, {useState} from 'react';
import Portal from '../components/Portal';

const TableModal = (props) => {

  const {key, name, surname, age} = props.props;

  const {editItem, deleteItem} = props;

  const [state, setState] = useState({isModalOpen: false});

  const toggleModal = () => setState({isModalOpen: !state.isModalOpen});

  return (
    <td>
        <button className="modal-btn" onClick={toggleModal}>...</button>
        {state.isModalOpen && 
        <Portal>
          <div className="table-modal">
            <button>Edit</button>
            <button onClick={() => deleteItem(key)}>Delete</button>
            <button onClick={toggleModal}>Close</button>

            <input type="text" value={name} onChange={(e) => editItem(e.target.value, key)}/>


          </div>
        </Portal>}
    </td>
  )
}

export default TableModal;
