/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    ListView,
    PixelRatio,
    TouchableOpacity
} from 'react-native';
class AwesomeProject extends Component {

    render() {
        return (<View style={styles.container}>
                <View style={[styles.item,styles.center,styles.lineLeftRight]}>
                    <Text style={styles.font}>酒店</Text>
                </View>
                <View style={[styles.item,styles.lineLeftRight]}>
                    <View style={[styles.flex,styles.center]}>
                        <Text style={styles.font}>海外酒店</Text>

                    </View>
                    <View style={[styles.flex,styles.center]}>
                        <Text style={styles.font}>特惠酒店</Text>
                    </View>
                </View>
                <View style={[styles.item,styles.lineLeftRight]}>
                    <View style={[styles.flex,styles.center,styles.lineCenter]}>
                        <Text style={styles.font}>团购</Text>

                    </View>
                    <View style={[styles.flex,styles.center]}>
                        <Text style={styles.font}>客栈。公寓</Text>
                    </View>
                </View>
            </View>
        );
    }


}
const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        marginLeft: 5,
        marginRight: 5,
        height: 84,
        flexDirection: 'row',
        borderRadius: 5,
        padding: 2,
        backgroundColor: '#FF0067',

    },
    item: {
        flex: 1,
        height: 80,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    font:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },
    flex: {
        flex: 1
    },
    lineLeftRight:{
        borderColor:'#fff',
        borderLeftWidth:1/PixelRatio.get(),
        borderRightWidth:1/PixelRatio.get()
    },
    lineCenter:{
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:'#fff'
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
    thumbnail: {
        width: 53,
        height: 81,
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    button: {
        height: 40,
        width: 400,
        backgroundColor: 'green',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
