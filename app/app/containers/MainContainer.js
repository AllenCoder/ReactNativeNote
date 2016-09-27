/**
 * Created by allen on 16/7/23.
 */
'use strict'
import React,{Component} from  'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Account from '../pages/Account';
import More from '../pages/More';
var height = Dimensions.get('window').height;
export default class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'home'

        };
        console.log(this.state.selectedTab);
    }

    render() {

        return (

            <TabNavigator>
                <TabNavigator.Item
                    title="主页"
                    selected={this.state.selectedTab === 'home'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../res/tabbar_white_home.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../res/home_sel.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="产品"
                    selected={this.state.selectedTab === 'product'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../res/tabbar_white_product.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../res/tabbar_red_product.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'product' })}>
                    <Product {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="账户"
                    selected={this.state.selectedTab === 'account'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../res/tabbar_white_account.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../res/tabbar_red_account.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'account' })}>
                    <Account {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="更多"
                    selected={this.state.selectedTab === 'more'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../res/tabbar_white_more.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../res/tabbar_red_more.png")} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'more' })}>
                    <More {...this.props}/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
const styles=StyleSheet.create({
    iconStyle:{
        width:26,
        height:26,
    },
    textStyle:{
        color:'#838c93',
    },
    selectedTextStyle:{
        color:'black',
    }
});