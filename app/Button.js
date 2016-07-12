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
    TouchableOpacity,
    Navigator
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
        return(<TouchableWithoutFeedback onPress={this._handlePress}>
            <View style ={[styles.button,this.props.enabled?{} :styles.buttonDisabled]}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </View>
        </TouchableWithoutFeedback>);
    }
}
const styles = StyleSheet.create({
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
    image: {},
    progressBarContainer: {},
    progressBar: {
        alignSelf: 'flex-start ',
        flex: 1,
        backgroundColor: '#ff0000'
    },
    viewPager: {
        flex: 1
    },
    buttonText: {
        color: 'white'
    },
    startupButton:{

    }
});


