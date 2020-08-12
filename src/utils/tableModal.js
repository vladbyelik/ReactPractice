import React, {useState} from 'react';
import Portal from '../components/Portal';

const TableModal = (props) => {

  const [state, setState] = useState({isModalOpen: false});

  const [stateVal, setStateVal] = useState(props.props);

  const {key} = props.props;

  const {editItem, deleteItem} = props;

  const toggleModal = () => setState({isModalOpen: !state.isModalOpen});

  const handleChange = (event) => {

    const { name, value, type } = event.target;

    setStateVal({
      ...stateVal,
      [name]: type === "number" ? +value : value
    });
  }

  return (
    <td>
        <button className="modal-btn" onClick={toggleModal}>...</button>

        {state.isModalOpen && 
        <Portal>
          <div className="table-modal">

            <form>
              <input type="text" value={stateVal.name} name="name" onChange={handleChange}/>
              <input type="text" value={stateVal.surname} name="surname" onChange={handleChange}/>
              <input type="number" value={stateVal.age} name="age" onChange={handleChange}/>
            </form>

            <div className="table-btns">
              <button onClick={() => editItem(stateVal)}>Edit</button>
              <button onClick={() => deleteItem(key)}>Delete</button>
              <button onClick={toggleModal}>Close</button>  
            </div>

          </div>
        </Portal>}

    </td>
  )
}

export default TableModal;
