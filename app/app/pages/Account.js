/**
 * Created by allen on 16/7/23.
 */
'use strict'
import React from  'react';
import {
    View,
    Text,
    ScrollView,
    RefreshControl,
    StyleSheet,
    Image
} from 'react-native';
export default class Account extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isRefreshing: false,
        };
    }

    render() {
        return (
            <ScrollView
                style={styles.scrollview}
                refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            colors={['#ff0000', '#00ff00', '#0000ff','#3ad564']}
            progressBackgroundColor="#ffffff"
          />
           }>
                <View style={[styles.center,{backgroundColor:'#fb4747'}]}>
                    <Image source={require('../res/tou_weirenzheng.png')} style={[styles.Image,styles.center]}/>
                    <Text style={styles.phoneText}>
                        137****5872
                    </Text>
                    <View style={[styles.horization,{marginTop:30,height:40,marginBottom:6}]}>
                        <Text style={styles.couponText}>0优惠卷</Text>
                        <View style={[{width: 0.5,height:25,backgroundColor:'white'}]}/>
                        <Text style={styles.couponText}>0瓜币</Text>
                    </View>

                </View>
                <View style={styles.horization}>
                    <View style={styles.horization}>
                        <Image source={require('../res/withdraw.png')}/>
                        <Text style={styles.rechargeText}>账户提现</Text>
                    </View>
                    <View style={styles.horization}>
                        <Image source={require('../res/recharge.png')}/>
                        <Text style={styles.rechargeText}>账户充值</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }

    _onRefresh() {
        //this.state({
        //        isRefreshing: true
        //    }
        //)
        setTimeout(() => {
            // 准备下拉刷新的5条数据
            const rowData = Array.from(new Array(5))
                .map((val, i) => ({
                    text: '刷新行 ' + (+this.state.loaded + i)
                }))
                .concat(this.state.rowData);

            this.setState({
                loaded: this.state.loaded + 5,
                isRefreshing: false,
                rowData: rowData,
            });
        }, 5000);
    }
}
const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
    },
    horization: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    view: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    phoneText: {
        marginTop: 10,
        color: 'white',
        fontSize: 14
    },
    couponText: {
        color: 'white',
        fontSize: 12,
        justifyContent: 'center',
        flex: 1,
        textAlign: 'center'
    },
    Image: {
        marginTop: 12,
        justifyContent: 'center',
        width: 60,
        height: 60
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    rechargeText:{
        color: 'black',
        fontSize: 15,
        justifyContent: 'center',
        flex: 1,
        marginLeft:9,
        textAlign: 'center'
    }
});