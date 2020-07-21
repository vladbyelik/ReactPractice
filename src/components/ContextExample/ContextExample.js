import React from 'react';

const TitleContext = React.createContext();

const obj = {
  value: 'Some headline',
  someVal: 250,
  click: () => console.log('Click!')
}

const LevelThree = () => (
  <TitleContext.Consumer>
    { ({value, someVal, click}) => <h3 onClick={click}> {value}, {someVal} </h3> }
  </TitleContext.Consumer>
)

const LevelTwo = () => <LevelThree/>

const LevelOne = () => <LevelTwo/>

const ContextExample = () => (
  <TitleContext.Provider value={obj}>
    <LevelOne />
  </TitleContext.Provider>
)

export default ContextExample;
