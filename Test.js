import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  Animated,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export class Test extends Component {
  constructor() {
    super();
    this.animvalue = new Animated.Value(1);
  }
  opacity = () => {
    this.animvalue.setValue(1);
    Animated.spring(this.animvalue, {
      toValue: 0,
      friction: 1,
    }).start();
  };
  render() {
    return (
      <View
        style={{flex: 1, backgroundColor: 'white', justifyContent: 'flex-end'}}>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <View style={{...StyleSheet.absoluteFill}}>
          <Image
            source={require('./src/assets/images/wallpaper.jpg')}
            style={{
              flex: 1,
              height: null,
              width: null,
            }}
          />
        </View>
        <View style={{height: height / 3, justifyContent: 'center'}}>
          <Animated.View
            style={{...styles.Button, opacity: this.buttonOpacity}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>SIGN IN </Text>
          </Animated.View>

          <View style={{...styles.Button, backgroundColor: '#225599'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              SIGN IN WITH FACEBOOK
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
});
export default Test;
