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
    Image,
    TouchableNativeFeedback,
} from 'react-native';

export default class Button extends Component {
    //开始 前进 后退 最后
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    _handlePress = ()=> {
        if (this.props.enabled && this.props.onPress) {
            this.props.onPress();

        }
    }

    render(){
        return(<TouchableNativeFeedback onPress={this._handlePress}>
            <View style ={[styles.button,this.props.enabled?{} :styles.buttonDisabled]}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </View>
        </TouchableNativeFeedback>);
    }
}
const styles = StyleSheet.create({
    button: {
        width:100,
        height:60
    },
    buttonText: {
        color: 'white'
    }
});


