import React, { Component } from 'react';
import { Animated } from 'react-native';
import randomcolor from 'randomcolor';

class AnimatedBar extends Component {

  constructor(props) {
    super(props);
    this._width = new Animated.Value(0);
    this.state = {
      color: randomcolor(),
    };
  }

  componentDidMount() {
    const { delay, value } = this.props;
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(this._width, {
        toValue: value,
      }),
    ]).start();
  }

  render() {
    const barStyles = {
      backgroundColor: this.state.color,
      height: 40,
      width: this._width,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
    };

    return (
      <Animated.View style={barStyles} />
    );
  }
}

export default AnimatedBar;
