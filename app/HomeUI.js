/**
 * Created by allen on 16/7/9.
 */
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
} from 'react-native';
export default class HomeUI extends Component{
    goBack(){
        const {navigator} = this.props;
        if (navigator){
            //返回上一页
            navigator.pop();
        }

    }
    render(){
        return(<View style={styles.container}>
                <Text style={styles.welcome} onPress={this.goBack.bind(this)}>
                    Welcome to React Native 东方耀
                </Text>
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});


