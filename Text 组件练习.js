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
const Header = require('./header');
class AwesomeProject extends Component {

    render() {
        return (<View>
                <Header> </Header>
                <List title='一线城市楼市退烧,有房源一夜跌价160万'></List>
                <List title='上海市民称墓地太贵买不起,买房存骨灰'></List>
                <List title='朝鲜再发视频,摧毁青瓦台,一切化作灰烬'></List>
                <List title='生活大爆炸人物原型都好牛逼'></List>
                <ImportantNew news={['解放军报社大楼正在拆除,标识已被卸下',
                                    '韩国停签东三省旅行社,或为阻止朝鲜游创汇',
                                    '南京大学生发起亲吻陌生人行动,南京大学生发起亲吻陌生人行动,南京大学生发起亲吻陌生人行动南京大学生发起亲吻陌生人行动',
                                    '防总署部署长江防汛,以防御98年量级的洪水为,目标']}></ImportantNew>
            </View>
        );
    }


}
class ImportantNew extends Component {
    show(title) {
        alert(title);
    }

    render() {

        var news = [];
        for (var i in this.props.news) {
            var text = (
                <Text onPress={this.show.bind(this,this.props.news[i])}
                      numberOfLines={2}
                      style={styles.news_item}
                      key={i}
                >{this.props.news[i]}</Text>
            );
            news.push(text);
        }
        return (  <View style={styles.flex}>
                <Text style={styles.new_title}>今日要闻</Text>
                {news}
            </View>
        );
    }
}
class List extends Component {
    render() {
        return (<View style={styles.list_item}>
            <Text style={styles.list_item_font}>{this.props.title}</Text>
        </View>);
    };
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
