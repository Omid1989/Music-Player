import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  ScrollView,
  PanResponder,
  SafeAreaView,
  ActivityIndicator,
  I18nManager,
  StatusBar,
} from 'react-native';

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text as Ntext,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from 'react-native-slider';
import Moment from 'moment';
import Svg, {Image as Imgsvg, Circle, ClipPath} from 'react-native-svg';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const TRACK = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
class Listtrack extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          justifyContent: 'space-between',
          paddingVertical: 5,
          flexDirection: 'row',
          // backgroundColor: 'white',
          //borderBottomWidth: 1,
          // borderBottomColor: 'rgba(0,0,0,0.2)',
        }}>
        <View
          style={{
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 20,
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              height: 2,
              marginVertical: 1,
            }}></View>
          <View
            style={{
              width: 20,
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              marginVertical: 1,
              height: 2,
            }}></View>
        </View>

        <Image
          source={require('../assets/images/wallpaper.jpg')}
          style={{width: 50, height: 50, borderRadius: 50}}
        />
        <View style={{alignSelf: 'center', paddingHorizontal: 10}}>
          <Text style={{fontSize: 25, color: 'rgba(255, 255, 255, 0.7)'}}>
            Parande
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'rgba(255, 255, 255, 0.7)',
              alignSelf: 'flex-end',
            }}>
            hayede
          </Text>
        </View>
        <View style={{alignSelf: 'center', paddingHorizontal: 10}}>
          <Text style={{fontSize: 20, color: 'rgba(255, 255, 255, 0.7)'}}>
            golhaye ghorbat
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'rgba(255, 255, 255, 0.7)',
              alignSelf: 'flex-end',
            }}>
            6:00
          </Text>
        </View>
        <Icon
          style={{alignSelf: 'center'}}
          name="dots-three-vertical"
          size={30}
          color="rgba(255, 255, 255, 0.7)"
        />
      </View>
    );
  }
}

export class PlayScreen extends Component {
  constructor() {
    super();

    this.state = {
      tracklenght: 300,
      timeElapsed: '0:00',
      timeRemaining: '5:00',
      scrolly: new Animated.Value(0),
    };

    I18nManager.allowRTL(false);

    // RNFS.readDir(path)
    //   .then(result => {
    //     alert('GOT RESULT', result);
    //     //return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    //   })
    //   .then(statResult => {
    //     if (statResult[0].isFile()) {
    //       alert('RNFS.readFile(statResult[1], utf8)');
    //     }
    //     alert('no file');
    //   })
    //   .then(contents => {
    //     alert('contents');
    //   })
    //   .catch(err => {
    //     alert('err.message, err.code');
    //   });
  }

  changeTime = seconds => {
    this.setState({timeElapsed: Moment.utc(seconds * 1000).format('m:ss')});
    this.setState({
      timeRemaining: Moment.utc(
        (this.state.tracklenght - seconds) * 1000,
      ).format('m:ss'),
    });
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      //onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        return Math.abs(gestureState.dy) > 2; // can adjust this num
      },
      onPanResponderGrant: (e, gestureState) => {
        this.fScroll.setNativeProps({scrollEnabled: false});
      },
      //  onPanResponderMove: () => {},
      // onPanResponderTerminationRequest: () => true,
    });
  }
  // handleScroll = Object => {

  //   if (Object.nativeEvent.contentOffset.y == 0) {
  //     this.smallp.setNativeProps({opacity: 1});
  //   }
  //   if (Object.nativeEvent.contentOffset.y > 0) {
  //     this.smallp.setNativeProps({opacity: 0});
  //   }
  // };
  render() {
    const opacity = this.state.scrolly.interpolate({
      inputRange: [0, screenHeight / 2],
      outputRange: [1, 0],
    });
    return (
      <SafeAreaView style={{height: '100%'}}>
        <StatusBar backgroundColor="transparent" translucent={true} />

        <ScrollView
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: this.state.scrolly}}},
          ])}
          ref={e => {
            this.fScroll = e;
          }}
          /* onScrollBeginDrag={() => {
           
          }}*/
          onScrollBeginDrag={() => {
            //  this.refresh.setNativeProps({height: 50});
          }}
          onScrollEndDrag={() => {
            this.playerpage.setNativeProps({height: screenHeight});

            //  this.refresh.setNativeProps({height: 0});
          }}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <LinearGradient colors={['#f234aa', '#f23c8e', '#f2476b']}>
            <Animated.View
              style={{height: screenHeight - 90, opacity: opacity}}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  // backgroundColor: 'white',
                  height: 90,
                  paddingHorizontal: 25,
                  paddingVertical: 35,
                  // elevation: 5,
                }}>
                <Ionicons
                  name="ios-arrow-back"
                  style={{alignSelf: 'flex-start'}}
                  size={30}
                  color="white"
                />
              </View>

              <ScrollView
                ref={e => {
                  this.trackscroll = e;
                }}
                {...this._panResponder.panHandlers}
                onScrollEndDrag={() =>
                  this.fScroll.setNativeProps({scrollEnabled: true})
                }>
                {TRACK.map((item, index) => (
                  <Listtrack />
                ))}
              </ScrollView>
            </Animated.View>
          </LinearGradient>
          <View
            ref={e => {
              this.playerpage = e;
            }}
            style={{elevation: 1}}>
            <Animated.View
              ref={e => {
                this.smallp = e;
              }}
              style={{
                // elevation: 4,
                zIndex: 1,
                position: 'absolute',
                width: screenWidth,
                height: 100,
                backgroundColor: 'white',
                opacity: opacity,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  //justifyContent: 'center',
                  marginTop: 12,
                  marginBottom: 35,
                  width: '80%',
                  // alignSelf: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 7,
                }}>
                <View style={{justifyContent: 'center'}}>
                  <Image
                    source={require('../assets/images/play.png')}
                    style={{width: 45, height: 45}}
                  />
                </View>

                <View style={{justifyContent: 'center'}}>
                  <Image
                    source={require('../assets/images/next.png')}
                    style={{width: 40, height: 40}}
                  />
                </View>
                <View style={{flex: 1, marginHorizontal: 19, marginRight: -50}}>
                  <Text style={{fontSize: 20, color: 'rgba(0,0,0,0.6)'}}>
                    Parande
                  </Text>

                  <Slider
                    style={{marginTop: -15}}
                    minimumValue={0}
                    maximumValue={this.state.tracklenght}
                    trackStyle={Styles.track}
                    thumbStyle={Styles.thumb}
                    minimumTrackTintColor="#d92da4"
                    maximumTrackTintColor="#ccc"
                    onValueChange={seconds => {
                      this.changeTime(seconds);
                    }}></Slider>
                </View>
              </View>
            </Animated.View>
            <Svg style={{paddingBottom: 50}}>
              <ClipPath id="clip">
                <Circle r={400} cx={200} cy={90} />
              </ClipPath>
              <Imgsvg
                style={{opacity: '0.3'}}
                href={require('../assets/images/wallpaper.jpg')}
                width={screenWidth}
                height={screenHeight}
                clipPath="url(#clip)"
                preserveAspectRatio="xMidYMid slice"
              />
              <View
                style={{
                  marginTop: 10,
                  marginBottom: 40,
                  padding: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Icon
                  name="chevron-thin-down"
                  size={30}
                  color="rgba(0,0,0,0.4)"
                />
                <Icon
                  name="dots-three-vertical"
                  size={30}
                  color="rgba(0,0,0,0.4)"
                />
              </View>
              <View
                style={{
                  //justifyContent: 'center',
                  marginTop: 22,
                  alignSelf: 'center',
                  elevation: 15,
                  borderRadius: 100,
                  width: 200,
                  height: 200,
                  backgroundColor: 'red',
                }}>
                <Image
                  source={require('../assets/images/wallpaper.jpg')}
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                  }}
                />
                <Icon
                  style={{position: 'absolute', bottom: -15, right: 40}}
                  name="heart"
                  size={40}
                  color="#d9425d"
                />
                <View
                  style={{
                    marginTop: 32,
                    alignSelf: 'center',

                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 20, color: 'rgba(0,0,0,0.8)'}}>
                    Parande
                  </Text>
                  <Text style={{color: 'rgba(0,0,0,0.6)'}}>
                    golhaye ghorbat
                  </Text>
                  <Text style={{color: 'rgba(0,0,0,0.6)'}}>hayede</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 121,
                  width: '70%',
                  alignSelf: 'center',
                }}>
                <View style={{}}>
                  <Image
                    source={require('../assets/images/list.png')}
                    style={{width: 20, height: 20}}
                  />
                </View>

                <View style={{}}>
                  <Image
                    source={require('../assets/images/random.png')}
                    style={{width: 20, height: 20}}
                  />
                </View>
                <View style={{}}>
                  <Image
                    source={require('../assets/images/repeat.png')}
                    style={{width: 20, height: 20}}
                  />
                </View>
              </View>
            </Svg>

            <View
              style={{
                //flexDirection: 'row',
                //justifyContent: 'space-around',
                // marginTop: -50,
                marginHorizontal: 50,
                //width: '60%',
                // alignSelf: 'center',
              }}>
              <Slider
                minimumValue={0}
                maximumValue={this.state.tracklenght}
                trackStyle={Styles.track}
                thumbStyle={Styles.thumb}
                minimumTrackTintColor="#d92da4"
                maximumTrackTintColor="#ccc"
                onValueChange={seconds => {
                  this.changeTime(seconds);
                }}></Slider>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: -12,
                }}>
                <Text style={{color: '#ccc'}}>{this.state.timeElapsed}</Text>
                <Text style={{color: '#ccc'}}>{this.state.timeRemaining}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 12,
                marginBottom: 35,
                width: '80%',
                alignSelf: 'center',
              }}>
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../assets/images/back.png')}
                  style={{width: 70, height: 70}}
                />
              </View>
              <View style={{marginHorizontal: 20}}>
                <Image
                  source={require('../assets/images/play.png')}
                  style={{width: 100, height: 100}}
                />
              </View>

              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../assets/images/next.png')}
                  style={{width: 70, height: 70}}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const Styles = StyleSheet.create({
  track: {height: 9, borderRadius: 5, backgroundColor: '#ccc'},
  thumb: {width: 0, height: 0, backgroundColor: '#d92da4'},
});
export default PlayScreen;
