import React, {useState} from 'react';
import Portal from '../Portal';
import './ModalExample.css';

const ModalExample = () => {

  const [state, setState] = useState({
    isModalOpen: false
  });

  const toggleModal = () => setState(({ isModalOpen: !state.isModalOpen }));

  return (<>
    <button onClick={toggleModal}>Open modal</button>
    {state.isModalOpen && 
    <Portal>
      <div className="modal">
        <button onClick={toggleModal}>Close</button>
        <h3>Modal is open!</h3>
      </div>
    </Portal>}
  </>)
}

export default ModalExample;
