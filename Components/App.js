import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import AnimatedBar from './AnimatedBar';

const window = Dimensions.get('window');
const DELAY = 100;

export default class AnimatedBars extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5FCFF', justifyContent: 'center'}}>
        <View>
          {this.state.data.map((value, index) => <AnimatedBar value={value} delay={DELAY * index} key={index} />)}
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('AnimatedBars', () => AnimatedBars);
