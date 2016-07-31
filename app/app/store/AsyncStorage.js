/**
 * Created by allen on 16/7/25.
 */
'use strict'

import Storage from 'react-native-storage';
//var STORAGE_KEY_ONE = '@AsyncStorageDemo:key_one';
//var STORAGE_KEY_MESSAGE = '@AsyncStorageDemo:key_message';
//module.exports ={
//      _loadInitialState(){
//        var value =  AsyncStorage.getItem(STORAGE_KEY_ONE);
//        console.log("存储的数据是"+value)
//          value =1.0;
//        return value;
//    },
//    async _saveValue( message){
//        try {
//            await AsyncStorage.setItem(STORAGE_KEY_ONE, message);
//
//            console.log("存储的数据是"+AsyncStorage.getItem(STORAGE_KEY_ONE));
//        } catch (e) {
//            console.log("存储数据错误" + e)
//        }
//    },
//    async _removeValue(){
//        await AsyncStorage.removeItem(STORAGE_KEY_ONE);
//    }
//}
//var storage = new Storage({
//    // 最大容量，默认值1000条数据循环存储
//    size: 1000,
//
//    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
//    defaultExpires: 1000 * 3600 * 24,
//
//    // 读写时在内存中缓存数据。默认启用。
//    enableCache: true,
//
//    // 如果storage中没有相应数据，或数据已过期，
//    // 则会调用相应的sync同步方法，无缝返回最新数据。
//    sync : {
//        // 同步方法的具体说明会在后文提到
//    }
//})
//// 使用key来保存数据。这些数据一般是全局独有的，常常需要调用的。
//// 除非你手动移除，这些数据会被永久保存，而且默认不会过期。
//storage.save({
//    key: 'loginState',  //注意:请不要在key中使用_下划线符号!
//    rawData: {
//        from: 'some other site',
//        userid: 'some userid',
//        token: 'some token'
//    },
//
//    // 如果不指定过期时间，则会使用defaultExpires参数
//    // 如果设为null，则永不过期
//    expires: 1000 * 3600
//});
//
//// 读取
//storage.load({
//    key: 'loginState',
//
//    // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的同步方法
//    autoSync: true,
//
//    // syncInBackground(默认为true)意味着如果数据过期，
//    // 在调用同步方法的同时先返回已经过期的数据。
//    // 设置为false的话，则始终强制返回同步方法提供的最新数据(当然会需要更多等待时间)。
//    syncInBackground: true
//}).then(ret => {
//    //如果找到数据，则在then方法中返回
//    console.log(ret.userid);
//}).catch(err => {
//    //如果没有找到数据且没有同步方法，
//    //或者有其他异常，则在catch中返回
//    console.warn(err);
//})