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
    return (
      <Animated.View />
    );
  }
}

export default AnimatedBar;
