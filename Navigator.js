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
    TouchableOpacity,
    Navigator,
    ScrollView
} from 'react-native';
const Header = require('./header');

class AwesomeProject extends Component {

     render() {
    let defaultName = 'List';
    let defaultComponent = List;
    return (
        <Navigator
            initialRoute={{ name: defaultName, component: defaultComponent }}
            configureScene={(route) => {
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
              }}
            renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
    );
}

}
class List extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            id: 1,
            author: null
        };
    }

    _pressButton() {
        const {navigator }= this.props;
        if (navigator) {
            navigator.push({
                name: 'Detail',
                component: Detail,
                parms: {
                    id: this.state.id,
                    getUser: function (user) {
                        self.setState({
                            user: user
                        });
                    }

                }
            })
        }

    }

    render() {
        return(<ScrollView style={styles.flex}>
            <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>作者是: {this.state.author }</Text>
            <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>豪华游轮三日游</Text>
            <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>豪华游轮三日游</Text>
        </ScrollView>);
    }
}
class Detail extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    _pressButton() {
        const {navigator }= this.props;
        if (navigator) {
            navigator.pop();
        }

    }

    render() {
        return(<ScrollView style={styles.flex}>
            <Text style={styles.list_item} onclick ={this._pressButton.bind(this)}>点我可以弹回去</Text>
        </ScrollView>);
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
    list_item: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        justifyContent: 'center',
    },
    list_item_font: {
        fontSize: 16,
    },
    new_title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#CD1D1C',
        marginLeft: 10,
        marginTop: 15
    },
    news_item: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        lineHeight: 40
    }

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
