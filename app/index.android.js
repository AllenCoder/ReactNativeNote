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
    ViewPagerAndroid,
    Navigator
} from 'react-native';
import LikeCount from './LikeCount.js'; //导入喜欢数组件
import Button from  './Button.js';//导入按钮组件
import HomeUI from './HomeUI.js';

const PAGES = 5;
const BGCOLOR = ['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273'];

const ImageSrc = [require('./res/guide01.jpg'), require('./res/guide02.jpg'), require('./res/guide03.jpg'), require('./res/guide04.jpg'), require('./res/guide01.jpg')];
class ProgressBar extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    render() {
        var fractionalPosition = (this.props.position + this.props.progress.offset);
        var progressBarSize = (fractionalPosition / (PAGES - 1)) * this.props.size;
        return (<View style={[styles.progressBarContainer,{width:this.props.size}]}>
            <View style={[styles.progressBar,{width:progressBarSize}]}/>

        </View>);
    }
}
class app extends Component {
    render() {
        let defaultName = 'WelcomeUI';
        let defaultCompenent = WelcomeUI;
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{name:defaultName,component:defaultCompenent}}
                    configureScene={
                    (route) =>{
                        return Navigator.SceneConfigs.FloatFromRight;
                    }
                }
                    renderScene={
                (route,navigator)=>{
                let Component = route.component;
                return <Component {...route.parms} navigator={navigator}/>

                }
            }

                />
            </View>
        );


    }
}

class WelcomeUI extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            page: 0,
            animationAreEnadle: true, //动画是否开启
            progress: {
                position: 0,
                offset: 0
            }
        };
    }
    onPageSelected = (e)=> {
        this.setState({page: e.nativeEvent.position})
    }

    onPageScroll=(e) =>{
        this.setState({progress: e.nativeEvent});
    }
    move(delta){
        var page = this.state.page+delta;
        this.go(page);
    }
    go(page){
        if (this.state.animationAreEnadle){
            this.viewPager.setPage(page);
        }else {
            this.viewPager.setPageWithoutAnimation(page);
        }
        //刷新
        this.setState({page});
    }
    onClick = ()=> {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'HomeUI',
                component: HomeUI
            })
        }
    }

    render() {
        const thumbsUp = '\uD83D\uDC4D';
        var pages = [];
        for (var i = 0; i < PAGES; i++) {
            var pageStyle = {
                backgroundColor: BGCOLOR[i % BGCOLOR.length],
                padding: 20
            };
            if (i < PAGES - 1) {

                pages.push(<View key={i} style={pageStyle} collapsable={false}>
                    <Image
                        style={styles.image}
                        source={ImageSrc[i%BGCOLOR.length]}
                    />
                    <LikeCount />

                </View>)
            } else {
                //最后一页 ViewPage 加上一个按钮
                pages.push(<View key={i} style={pageStyle} collapsable={false}>
                    <Image style={styles.image}
                           source={ImageSrc[i%BGCOLOR.length]}/>
                    <LikeCount />
                    <TouchableOpacity onPress={this.onClick} style={styles.startupButton}>
                        <Text style={styles.likesText}>{thumbsUp+'启动首页'}</Text>
                    </TouchableOpacity>

                </View>);
            }
        }
        var {page,animationsAreEnabled} = this.state;
        return(<View style={styles.container}>
            <ViewPagerAndroid
                style={styles.viewPager}
                initialPage ={0}
                onPageScroll ={this.onPageScroll}
                onPageSelected ={this.onPageSelected}
                ref={viewPager =>{this.viewPager =viewPager}}>
                {pages}

            </ViewPagerAndroid>
            <View style={styles.buttons}>
                { animationsAreEnabled ?
                    <Button
                        text ="Turn off animations"
                        enable ={true}
                        onPress={()=>this.setState({animationAreEnadle:false})}
                    />:<Button
                    text="Turn animations back on"
                    enable ={true}
                    onPress ={()=>this.setState({animationAreEnadle:true})}/>}
            </View>
            <View style={styles.buttons}>
                <Button text ="Start" enabled ={page>0} onPress={() =>this.go(0)}/>
                <Button text ="Prev" enabled ={page>0} onPress={() =>this.move(-1)}/>
                <Text style={styles.buttonText}>页:{page+1}/{PAGES}</Text>
                <ProgressBar size={100} progress ={this.state.progress}/>
                <Button text="Next" enabled ={page<PAGES-1} onPress ={() =>this.move(1)}/>
                <Button text ="Last" enabled ={page<PAGES-1} onPress={() =>this.go(PAGES-1)}/>
            </View>
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
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    image: {},
    progressBarContainer: {
        height:10,
        margin:10,
        borderColor:'#eeeeee',
        borderWidth:2
    },
    progressBar: {
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
        width:100,
        height:60
    },
    buttons:{
        width:100,
        height:60
    }
});

AppRegistry.registerComponent('app', () => app);
