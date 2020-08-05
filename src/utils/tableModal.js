import React, {useState} from 'react';
import Portal from '../components/Portal';

const TableModal = (props) => {

  const {name, surname, age} = props.props;

  const [state, setState] = useState({isModalOpen: false});

  const [inputValue, setInputValue] = useState({
    value: 'some text here',
    isInEditMode: false,
    name,
    surname,
    age
  });

  const toggleModal = () => setState({isModalOpen: !state.isModalOpen});

  const changeEditMode = () => setInputValue({isInEditMode: !inputValue.isInEditMode});

  const updateCompValue = () => {
    setInputValue({
      isInEditMode: false,
      value: 'https://www.youtube.com/watch?v=WTh54FMNrbU'
    })
  };

  const renderEditView = () => (
    <div>
      <input 
        type="text" 
        defaultValue={inputValue.name}
        ref='text'/>
      {/* <input type="text" defaultValue={inputValue.surname}/>
      <input type="text" defaultValue={inputValue.age}/> */}
      <button onClick={changeEditMode}>X</button>
      <button onClick={updateCompValue}>OK</button>
    </div> 
  )

    const renderDefaultView = () => (
      <div onDoubleClick={changeEditMode}>{inputValue.name}</div>
    )

  return (
    <td>
        <button className="modal-btn" onClick={toggleModal}>...</button>
        {state.isModalOpen && 
        <Portal>
          <div className="modal">
            {/* {name}
            {surname}
            {age} */}

            { inputValue.isInEditMode ? renderEditView() : renderDefaultView() }

            <button onClick={toggleModal}>Close</button>

          </div>
        </Portal>}
    </td>
  )
}

export default TableModal;
