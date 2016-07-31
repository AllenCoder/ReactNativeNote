/**
 * Created by allen on 16/7/23.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Navigator,StatusBar,
    BackAndroid,View
} from 'react-native';
import Splash from './pages/Splash.js';
var _navigator, isRemoved = false;
export default class  app extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
          this.renderScene = this.renderScene.bind(this);
          this.goBack = this.goBack.bind(this);
          BackAndroid.addEventListener('hardwareBackPress', this.goBack);
      }

    goBack() {
        return NaviGoBack(_navigator);
    }

    renderScene(route, navigator) {
        let Component = route.component;
        _navigator = navigator;
        if (route.name === 'WebViewPage') {
            BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
            isRemoved = true;
        } else {
            if (isRemoved) {
                BackAndroid.addEventListener('hardwareBackPress', this.goBack);
            }
        }
        return (
            <Component navigator={navigator} route={route} />
        );
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight;
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor="#3e9ce9"
                    barStyle="default"
                />
                <Navigator
                    ref='navigator'
                    style={styles.navigator}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                    initialRoute={{
            component: Splash,
            name: 'Splash'
          }}
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});