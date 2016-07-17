/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image,Dimensions,WebView
} from 'react-native';
import Swiper from 'react-native-swiper';
var width =Dimensions.get('window').width;
var height =Dimensions.get('window').height;
class app extends Component {
  render() {
    return (
        <View style={styles.flex}>
          <WebView style={{height: height,width:width}} source={{uri:'http://bbs.csdn.net/topics/391982554'}}></WebView>
        </View>
        //<Swiper style={styles.wrapper} showsButtons={false}
        //        dot={<View style={{backgroundColor:'rgba(255,255,255,.3)',  width: 0, height: 0}} />}
        //        activeDot={<View style={{backgroundColor: '#fff', width: 0, height: 0}} />}>
        //  <View style={styles.slide1}>
        //   <Image resizeMode='stretch' source={require('./res/guide01.jpg')} style={[{width:width,height: height}]}/>
        //  </View>
        //  <View style={styles.slide2}>
        //    <Image resizeMode='stretch' source={require('./res/guide02.jpg')} style={[{width:width,height: height}]}/>
        //  </View>
        //  <View style={styles.slide3}>
        //    <Image resizeMode='stretch' source={require('./res/guide03.jpg')} style={[{width:width,height: height}]}/>
        //  </View>
        //  <View style={styles.slide3}>
        //    <Image resizeMode='stretch' source={require('./res/guide04.jpg')} style={[{width:width,height: height}]}/>
        //  </View>
        //</Swiper>
    );
  }
}
var swiper = React.createClass({
  render: function() {
    return (
        <Swiper style={styles.wrapper} showsButtons={false} >
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
    )
  }
})
const styles = StyleSheet.create({
  flex:{
    flex:1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

AppRegistry.registerComponent('app', () => app);
