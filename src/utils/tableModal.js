import React, {useState} from 'react';
import Portal from '../components/Portal';

const TableModal = (props) => {

  const {key, name, surname, age} = props.props;

  const {editItem, deleteItem} = props;

  const [state, setState] = useState({isModalOpen: false});

  const toggleModal = () => setState({isModalOpen: !state.isModalOpen});

  /////////////////////////////////////////////////////////////////////////

  const [stateVal, setStateVal] = useState(props.props)

  // console.log(stateVal);

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    setStateVal({
      ...stateVal,
      [name]: type === "number" ? +value : value
    })

     console.log("FORM: ", stateVal)
  }

  const handleSubmit = (e) => {
    
    console.log(stateVal);
    setStateVal(stateVal);
    e.preventDefault();

  }

  /////////////////////////////////////////////////////////////////////////

  return (
    <td>
        <button className="modal-btn" onClick={toggleModal}>...</button>
        {state.isModalOpen && 
        <Portal>
          <div className="table-modal">

            <form onSubmit={handleSubmit}>
              <input type="text" value={stateVal.name} name="name" onChange={handleChange}/>
              <input type="text" value={stateVal.surname} name="surname" onChange={handleChange}/>
              <input type="number" value={stateVal.age} name="age" onChange={handleChange}/>
              <input type="submit" value="submit"/>
            </form>

            <div className="table-btns">
              {/* <button>Edit</button> */}
              <button onClick={() => deleteItem(key)}>Delete</button>
              <button onClick={toggleModal}>Close</button>  
            </div>

          </div>
        </Portal>}
    </td>
  )
}

export default TableModal;
