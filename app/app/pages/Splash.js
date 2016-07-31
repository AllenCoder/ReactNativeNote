'use strict'
import React from 'react';
import {
    Dimensions,
    Image,
    InteractionManager

} from 'react-native';
import MainContainer from '../containers/MainContainer.js'
import GuidePage from  '../pages/GuidePage';
/**
 * 对象解构赋值
 * @type {*|Object}
 */
var {width,height,scale,fontScale} = Dimensions.get('window');
 import Storage from 'react-native-storage';
var storge = new Storage();
var DeviceInfo = require('react-native-device-info');
var version  ;
export default class Splash extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {

        console.log("Device Unique ID", DeviceInfo.getUniqueID());  // e.g. FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9
// * note this is IDFV on iOS so it will change if all apps from the current apps vendor have been previously uninstalled

        console.log("Device Manufacturer", DeviceInfo.getManufacturer());  // e.g. Apple

        console.log("Device Model", DeviceInfo.getModel());  // e.g. iPhone 6

        console.log("Device ID", DeviceInfo.getDeviceId());  // e.g. iPhone7,2 / or the board on Android e.g. goldfish

        console.log("Device Name", DeviceInfo.getSystemName());  // e.g. iPhone OS

        console.log("Device Version", DeviceInfo.getSystemVersion());  // e.g. 9.0

        console.log("Bundle Id", DeviceInfo.getBundleId());  // e.g. com.learnium.mobile

        console.log("Build Number", DeviceInfo.getBuildNumber());  // e.g. 89

        console.log("App Version", DeviceInfo.getVersion());  // e.g. 1.1.0

        console.log("App Version (Readable)", DeviceInfo.getReadableVersion());  // e.g. 1.1.0.89

        console.log("Device Name", DeviceInfo.getDeviceName());  // e.g. Becca's iPhone 6

        console.log("User Agent", DeviceInfo.getUserAgent()); // e.g. Dalvik/2.1.0 (Linux; U; Android 5.1; Google Nexus 4 - 5.1.0 - API 22 - 768x1280 Build/LMY47D)


        const {navigator} = this.props;
        storge.load({
            key:'AppVersion',
            autoSync:true,
        }).then(ret =>{
            version = ret.AppVersion;
            console.log(JSON.stringify(version))
        }).catch(err => {
            // 如果没有找到数据且没有同步方法，
            // 或者有其他异常，则在catch中返回
            console.warn(err);
        })

        this.timer = setTimeout(()=> {
            InteractionManager.runAfterInteractions(() => {
                if (version ===DeviceInfo.getVersion()){
                    navigator.resetTo({
                        component: MainContainer,
                        name: 'Main'
                    });
                }else{
                    storge.save({
                        key:'AppVersion',
                        rawData:{
                            AppVersion:DeviceInfo.getVersion(),
                        }
                        ,
                        expires:null
                    });
                    navigator.resetTo({
                        component: GuidePage,
                        name: 'GuidePage'
                    });
                    console.log(DeviceInfo.getVersion());

                }

            });
        }, 1000)
    }

    componentWillUnMount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <Image
                style={{flex :1,width: width ,height: height}}
                source={require ('../res/loading.jpg')}></Image>
        );
    }

}