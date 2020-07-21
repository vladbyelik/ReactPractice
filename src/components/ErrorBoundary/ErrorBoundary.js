import React, {Component} from 'react';

export default class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>your code has an error!</h2>
        </div>
    )} else {
        return this.props.children;
    }
  }
};
