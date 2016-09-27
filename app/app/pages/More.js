/**
 * Created by allen on 16/9/13.
 */
/**
 * Created by allen on 16/7/23.
 */
'use strict'
import React from  'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
export default class MainContainer extends React.Component {
    render() {
        return (
            <View style={styles.lin}>
                <View style={styles.top12}/>
                <Image source={require('../res/horizontal_gray_line.png')} style={styles.line}/>
                <View style={styles.horizontal}>
                    <Image source={require('../res/icon_xxzx.png')} style={styles.Image}/>

                    <Text style={styles.text}>
                        消息中心
                    </Text>
                    <Image source={require('../res/icon_arrow.png')} style={styles.arrow}/>
                </View >
                <Image source={require('../res/horizontal_gray_line.png')} style={styles.gray_line}/>
                <View style={styles.horizontal}>
                    <Image source={require('../res/icon_bzzx.png')} style={styles.Image}/>
                    <Text style={styles.text}>
                        帮助中心
                    </Text>
                    <Image source={require('../res/icon_arrow.png')} style={styles.arrow}/>
                </View>
                <Image source={require('../res/horizontal_gray_line.png')} style={styles.line}/>
                <View style={styles.top12}/>
                <Image source={require('../res/horizontal_gray_line.png')} style={styles.line}/>
                <View style={styles.horizontal}>
                    <Image source={require('../res/icon_zfhy.png')} style={styles.Image}/>

                    <Text style={styles.text}>
                        转发好友
                    </Text>
                    <Image source={require('../res/icon_arrow.png')} style={styles.arrow}/>
                </View >
                <Image source={require('../res/horizontal_gray_line.png')} style={styles.gray_line}/>
                <View style={styles.horizontal}>
                    <Image source={require('../res/opinion_feedback.png')} style={styles.Image}/>
                    <Text style={styles.text}>
                        联系我们
                    </Text>
                    <Image source={require('../res/icon_arrow.png')} style={styles.arrow}/>
                </View>
                <Image source={require('../res/horizontal_gray_line.png')} style={styles.line}/>
                <View style={styles.top12}/>
                <Image source={require('../res/horizontal_gray_line.png')} style={styles.line}/>
                <View style={styles.horizontal}>
                    <Image source={require('../res/icon_xxzx.png')} style={styles.Image}/>

                    <Text style={styles.text}>
                        意见反馈
                    </Text>
                    <Image source={require('../res/icon_arrow.png')} style={styles.arrow}/>
                </View >
                <Image source={require('../res/horizontal_gray_line.png')} style={styles.gray_line}/>
                <View style={styles.horizontal}>
                    <Image source={require('../res/icon_dqbb.png')} style={styles.Image}/>
                    <Text style={styles.text}>
                        检查更新
                    </Text>
                    <Image source={require('../res/icon_arrow.png')} style={styles.arrow}/>
                </View>
                <Image source={require('../res/horizontal_gray_line.png')} style={styles.line}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    lin: {
        flexDirection: 'column'
    },
    horizontal: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 44,
        alignSelf:'center',
        alignItems:'center'
    },
    text: {
        fontSize: 16,
        color: '#333333',
        flex: 1,
        textAlign: 'left',
        marginLeft:14
    },
    Image: {
        width: 22,
        height: 23,
        marginLeft: 15
    },
    arrow:{
        height:23,
        width:22,
        marginRight:15
    },
    gray_line:{
        height:0.5,
        marginLeft:16,
        flexDirection: 'row'
    },
    line:{
        height:0.5,
        flexDirection: 'row'
    },
    top12:{
        height:12,
        backgroundColor:'#f1f1f1'
    }

});