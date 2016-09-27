/**
 * Created by allen on 16/7/23.
 */
'use strict'

import React,{Component} from  'react';
import {
    ScrollView,
    StyleSheet,
    RefreshControl,
    Text,
    View,
    StatusBar
} from 'react-native'

const styles = StyleSheet.create({
    row: {
        borderColor: "#eee",
        borderWidth: 5,
        padding: 16,
        backgroundColor: 'white',
        flexDirection: "column"
    },
    horziation: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1
    },
    title_left: {
        color: '#3c76b8',
        fontSize: 14,
        justifyContent: 'space-between',
        flex: 1,
        alignSelf: 'flex-start',
        textAlign: 'center'
    }
    ,
    left: {
        color: '#333333',
        fontSize: 12,
        justifyContent: 'space-between',
        flex: 1,
        alignSelf: 'flex-start',
        textAlign: 'left'
    },
    center: {
        color: '#333333',
        fontSize: 12,
        justifyContent: 'space-between',
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center'
    },
    right: {
        color: '#333333',
        fontSize: 12,
        justifyContent: 'space-between',
        flex: 1,
        alignSelf: 'flex-end',
        textAlign: 'right'
    },
    text: {
        color: '#333333',
        fontSize: 15,
        textAlign: 'left',
        justifyContent: 'flex-start'
    },
    symbolen: {
        color: '#333333',
        fontSize: 12,
        marginLeft: 8,

    },
    scrollview: {
        flex: 1,
    },
    marginleft5: {
        marginTop: 5
    }
});

export default class Row extends Component {


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            symbolcn: "欧元",
            symbolen: "EURUSD",
            sell: "1.2333",
            buy: "1.354",
            sub: "1.233"
        };
    }

    _onClick() {
        this.props.onClick(this.props.data);
    }

    render() {
        return (
            <View style={styles.row}>
                <View style={styles.horziation}>

                    <Text style={styles.text}>{this.state.symbolcn}</Text>
                    <Text style={styles.symbolen}>{this.state.symbolen}</Text>
                </View>

                <View style={[styles.horziation,styles.marginleft5]}>
                    <Text style={styles.left}>{this.state.sub}</Text>
                    <Text style={styles.center}>{this.state.buy}</Text>
                    <Text style={styles.right}>{this.state.sell}</Text>
                </View>
            </View>
        );
    }
};

export default class product extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(20)).map(
                (val, i) => ({text: '初始行 ' + i}))
        };
    }

    render() {
        const rows = this.state.rowData.map((row, ii) => {
            return <Row key={ii} data={row}/>;
        });
        return (
            <View> <StatusBar
                backgroundColor="blue"
                barStyle="light-content"
            />
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
                    <View>
                        <View style={[styles.horziation,styles.marginleft5]}>
                            <Text style={styles.title_left}>名称</Text>
                            <Text style={styles.title_left}>买涨价</Text>
                            <Text style={styles.title_left}>买跌价</Text>
                        </View>
                        {rows}
                    </View>
                </ScrollView>
            </View>
        );
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
