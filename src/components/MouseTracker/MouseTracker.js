import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Cat extends Component {
  render() {
    const mouse = this.props.mouse;
    const catPic = 'https://i.pinimg.com/originals/25/52/e2/2552e2334a5207a4d31306c6cf9f85b0.png';
    return (
      <img src={catPic} alt="cat-pic" style={{width: '100px', height: '100px', position: 'absolute', left: mouse.x - 2, top: mouse.y - 2 }} />
    );
  }
}

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default class MouseTracker extends Component {
  render() {
    return (
      <div>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}

Cat.propTypes = {
  mouse: PropTypes.object,
}

Mouse.propTypes = {
  render: PropTypes.func,
}
