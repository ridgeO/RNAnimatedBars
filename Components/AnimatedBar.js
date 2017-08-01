import React, { Component } from 'react';
import { Animated } from 'react-native';
import randomcolor from 'randomcolor';

class AnimatedBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: randomcolor(),
    };
  }

  render() {
    const barStyles = {
      backgroundColor: this.state.color,
      height: 40,
      width: this.props.value,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
    };

    return (
      <Animated.View style={barStyles} />
    );
  }
}

export default AnimatedBar;
