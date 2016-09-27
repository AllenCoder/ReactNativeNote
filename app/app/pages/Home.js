/**
 * Created by allen on 16/9/13.
 */
/**
 * Created by allen on 16/7/23.
 */
'use strict'
import React from  'react';
import {
    View,
    Text,
    WebView,
    StyleSheet
} from 'react-native';
var DEFAULT_URL = "https://trade.juyoulicai.com/webapp/go!index.action";
export default class MainContainer extends React.Component {
    render() {
        return (
            <WebView WebViewstyle={styles.webview_style}

                     source={{uri:DEFAULT_URL}}
                     startInLoadingState={true}
                     domStorageEnabled={true}
                     javaScriptEnabled={true}>

            </WebView>
        )
    }
}

var styles = StyleSheet.create({
    webview_style: {
        backgroundColor: '#00ff00'
    }
})