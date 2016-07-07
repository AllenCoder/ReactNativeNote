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
    ScrollView,TextInput,TouchableHighlight,
} from 'react-native';
var onePT = 1 / PixelRatio.get(); //最小的像素密度
const Header = require('./header');
var imgs = ['http://www.baidu.com/img/bd_logo1.png',
    'http://c.hiphotos.baidu.com/image/h%3D200/sign=89c6743711ce36d3bd0484300af23a24/ae51f3deb48f8c54469d4dc23e292df5e1fe7f95.jpg',
    'http://e.hiphotos.baidu.com/image/h%3D200/sign=5f6ab3f5d00735fa8ef049b9ae500f9f/29381f30e924b8995d7368d66a061d950b7bf695.jpg',
    'http://g.hiphotos.baidu.com/image/pic/item/96dda144ad345982f4c3f47c08f431adcaef8496.jpg'];
class AwesomeProject extends Component {

    render() {
        return (
            <View style={[styles.flex,{marginTop: 45}]}>
                <MyImage imgs={imgs}></MyImage>
            </View>
        );
    }

}
class MyImage extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            count: 0,
            imgs: this.props.imgs
        };
    }

    goPreview() {
        var count = this.state.count;
        count--;
        if (count > 0) {
            this.setState({
                count: count

            })

        }
    }

    goNext() {
        var count = this.state.count;
        count++;
        console.log(this.state.imgs.size)
        if (count < this.state.imgs.size) {
            this.setState({
                count: count

            })
        }
    }

    render() {
        return (<View style={[styles.flex,{alignItems: 'center'}]}>
            <View style={styles.image}>
                <Image style={styles.img}
                       resizeMode='contain'
                       source={require('./test.jpg')}>

                </Image>
            </View>
            <View style={styles.btns}>
                <TouchableOpacity onPress={this.goPreview.bind(this)}>
                    <Text>上一张</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goNext.bind(this)} style={[{marginLeft: 20}]}>
                    <Text>下一张</Text>
                </TouchableOpacity>
            </View>
        </View>);
    }
}
class HightComponet extends Component {
    show(val) {
        alert(val);
    }

    render() {
        return (
            <View style={styles.flex}>
                <TouchableHighlight onPress={this.show.bind(this,"欢迎学习 ReactNative ")} underlayColor='red'>
                    <Text style={styles.item}>欢迎学习</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.show.bind(this,"欢迎学习 ReactNative ")} underlayColor='red'>
                    <Text style={styles.item}>欢迎学习</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.show.bind(this,"欢迎学习 ReactNative ")} underlayColor='red'>
                    <Text style={styles.item}>欢迎学习</Text>
                </TouchableHighlight>
            </View>
        )
    }

}
class SearchText extends Component {


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            show: false,
            value: null
        };
    }

    hide(val) {
        this.setState({
            show: false,
            value: val
        })
    }

    getValue(text) {
        this.setState({
            show: true,
            value: text
        });
    }

    render() {
        return ( <View style={styles.flex}>
            <View style={[styles.flex,styles.flexDirection]}>
                <View style={[styles.flex,styles.input]}>
                    <TextInput
                        keyboardType="web-search"
                        placeholder="请输入关键词"
                        value={this.state.value}
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={this.getValue.bind(this)}/>
                </View>

                <View style={styles.btn}>
                    <Text style={styles.search} onPress={this.hide.bind(this,this.state.value)}>搜索
                    </Text>
                </View>

            </View>
            {
                this.state.show ?
                    <View style={styles.result}>
                        <Text onPress={this.hide.bind(this,this.state.value+'加东方 QQ')} style={styles.item}
                              numberOfLines={1}>
                            {this.state.value}加我 QQ
                        </Text>
                        <Text onPress={this.hide.bind(this,this.state.value+'原件')} style={styles.item}
                              numberOfLines={1}>
                            {this.state.value}加我 QQ
                        </Text>
                        <Text onPress={this.hide.bind(this,this.state.value+'大神')} style={styles.item}
                              numberOfLines={1}>
                            {this.state.value}加我 QQ
                        </Text>
                        <Text onPress={this.hide.bind(this,this.state.value+' AllenCoder')} style={styles.item}
                              numberOfLines={1}>
                            {this.state.value}加我 QQ
                        </Text>
                    </View> : null
            }


        </View>);
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
        return (<ScrollView style={styles.flex}>
            <Text style={styles.list_item} onclick={this._pressButton.bind(this)}>点我可以弹回去</Text>
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
    },
    flex: {
        flex: 1
    },
    flexDirection: {
        flexDirection: 'row'
    },
    topStatus: {
        marginTop: 25
    },
    input: {
        height: 45,
        borderColor: 'red',
        borderWidth: 1,
        marginLeft: 10,
        paddingLeft: 10,
        borderRadius: 5
    },
    btn: {
        width: 45,
        marginLeft: -5,
        marginRight: 5,
        backgroundColor: '#23BEFF',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    topStatus: {},
    flexDirection: {
        flexDirection: 'row'
    },
    btns: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center'
    },
    img: {
        height: 150,
        width: 300,
        borderRadius:5,
        resizeMode : 'cover'

    },
    image: {
        borderWidth: 1,
        height: 150,
        width: 300,
        justifyContent:'center',
        marginLeft:30,
        marginRight:30
    }


});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
