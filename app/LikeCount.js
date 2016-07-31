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

} from 'react-native';
export default class LikeCount extends Component{
    //喜欢数组件
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            likes:0
        };
      }

    onClick=()=>{
        this.setState({likes:this.state.likes+1})
    }

    render(){
        //这是一个点赞的小图标,一个代码就搞定了
        const thumbsUp ='\uD83D\uDC4D';
        return (<View style={styles.likeContainer}>
            <TouchableOpacity onPress={this.onClick} style={styles.likeButton}>
                <Text style={styles.likesText}>{thumbsUp+'Like'}

                </Text>
            </TouchableOpacity>
            <Text style={styles.likesText}>{this.state.likes+'个喜欢数'}

            </Text>
        </View>);
    }

}
const styles = StyleSheet.create({
    likeContainer: {
        flex: 1,
        justifyContent: 'center',
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
    image:{
        width:100,
        height:60
    },

    viewPager:{
        flex:1
    },
    buttonText:{
        color:'#333333'
    },
    likeButton:{
        backgroundColor:'rgba(0,0,0,1)',
    },
    likesText:{
        fontSize: 20,
        color:'red',
        width:100,
        height:60,
    }
});


