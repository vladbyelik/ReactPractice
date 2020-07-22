import React, { useState } from 'react';

const RefExample = () => {

  const textRef = React.createRef();
  const [state, setState] = useState('');
  const addText = () => setState(textRef.current.value);
 
  return (
    <>
      <form>
        <input ref={textRef} type='text' placeholder='text here' />
      </form>
      <span> {state} </span>
      <button onClick={addText}>Click</button>
    </>
  )
}

export default RefExample;
