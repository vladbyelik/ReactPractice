import React from 'react';

export default class CustomTextInput extends React.Component {

  constructor (props) {
    super(props);
    this.inputRef = React.createRef();
  }
  
  submit () {
    console.log(this.inputRef.current.value);
  }
  
  render() {
    
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.submit.bind(this)}> Submit </button>
      </div>
    );
  }
}
