import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

export default class Modal extends Component {

  componentWillMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <button onClick={this.props.onClose}>Close</button>
        {this.props.children}
      </div>
    , this.root)
  }
}
