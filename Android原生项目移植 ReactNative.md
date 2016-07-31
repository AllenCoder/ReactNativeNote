# 1.在原有 Android 项目中嵌入 ReactNative 模块

>ReactNative的发展已经进入了很多开发者视野，作为一名原生开发者更是对 RN 充满了无限的好奇和期待,
    本节将详细讲述如何将一个原生的 Android App 项目嵌入最新的 RN 模块



## 1. 准备开始

    1.  一个已有的 Android 原生项目
    2. 已经配置好的原生 Android 开发环境和 node.js已经 RN 环境
    3. 改造之后的流程图 
   ![图片](http://7xs9qs.com1.z0.glb.clouddn.com/01.png)

## 2.开始改造
    1. 在原生 Android 项目的在app/build.gradle文件中，添加React Native依赖：

```
compile"com.facebook.react:react-native:+
```
    2.在工程目录下找到工程的 build.gradle文件中，添加 maven依赖
```
allprojects {
    repositories {
        jcenter()
        maven {
            // All of React Native (JS, Android binaries) is installed from npm
            url "$rootDir/node_modules/react-native/android"
        }
    }
}
```

    3. 在 app 目录里添加需要的权限
```
 <uses-permission android:name="android.permission.INTERNET"/>
 /**设置调试 的权限**/
 <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
```
    4.添加 FaceBook 的 ReactNative 调试的 activity
```
    <activity android:name="com.facebook.react.devsupport.DevSettingsActivity"/>
```
# 2. 编写原生的 ReactNative 模块 ，废话不多说，直接上代码

```java
package com.allen.reactapp;

import android.app.Activity;
import android.os.Bundle;

import com.facebook.react.BuildConfig;
import com.facebook.react.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

/**
 * 作者: allen on 16/7/31.
 */
public  class MyReactActivity extends Activity implements DefaultHardwareBackBtnHandler {
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        mReactRootView.startReactApplication(mReactInstanceManager, "my_react_activity", null);

        setContentView(mReactRootView);
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }
    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }


}

 
```

## 到此为止我们的Android项目Activity和配置文件以及完成了最基本的配置方法了。


========================================================================

========================================================================
# 3. 下面配置工程项目的 RN开发环境
    1. 先后顺序依次执行一下命令
```
 $ npm init
```
>该命令会创建一个package.json文件，并且提示我们输入一些信息，默认不输入即可，不过name必须要为全英文小写哦，

##然后再依次去执行以下命令 
```
 $ npm install --save react
 $ npm install --save react-native
 $ curl -o .flowconfig https://raw.githubusercontent.com/facebook/react-native/master/.flowconfig
```

创建完成后，去工程目录下修改 *package.json*
在scripts标签那边添加如下代码:
```
"start":"node_modules/react-native/packager/packager.sh"
```
![package_json](http://7xs9qs.com1.z0.glb.clouddn.com/package_json.png)
# 3. 工程目录下创建 index.android.js 由于是测试代码直接 Copy FaceBook 的源码
```

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
  View
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          我是 原生项目嵌入的 ReactNative
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

AppRegistry.registerComponent('my_react_activity', () => AwesomeProject);

```

> 注意：此处需要修改注册的入口 保持一致，我的是 *my_react_activity*

# 4.检查以上所有步骤，有无遗漏，如果正常，接下来就可以顺利的运行你的混合 APP 了，如果还不行，你需要检查你的姿势是否正确？

运行你的 APP
    1. 在项目的工程路径运行以下命令来启动你的开发服务器
```
react-native start
```
或
```
npm start
```
    2. android studio 调试你的 APP



```
  Process: com.allen.reactapp, PID: 20469
java.lang.RuntimeException: java.util.concurrent.ExecutionException: java.lang.RuntimeException: Could not connect to development server.
Try the following to fix the issue:
Ensure that the packager server is running
Ensure that your device/emulator is connected to your machine and has USB debugging enabled - run 'adb devices' to see a list of connected devices
If you're on a physical device connected to the same machine, run 'adb reverse tcp:8081 tcp:8081' to forward requests from your device
If your device is on the same Wi-Fi network, set 'Debug server host & port for device' in 'Dev settings' to y
at com.facebook.react.ReactInstanceManagerImpl.createReactContext(ReactInstanceManagerImpl.java:911)
at com.facebook.react.ReactInstanceManagerImpl.access$700(ReactInstanceManagerImpl.java:100)
at com.facebook.react.ReactInstanceManagerImpl$ReactContextInitAsyncTask.doInBackground(ReactInstanceManagerImpl.java:197)
at com.facebook.react.ReactInstanceManagerImpl$ReactContextInitAsyncTask.doInBackground(ReactInstanceManagerImpl.java:180)
at android.os.AsyncTask$2.call(AsyncTask.java:295)
at java.util.concurrent.FutureTask.run(FutureTask.java:237)
at android.os.AsyncTask$SerialExecutor$1.run(AsyncTask.java:234)
at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1113)
at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:588)
at java.lang.Thread.run(Thread.java:818)
Caused by: java.util.concurrent.ExecutionException: java.lang.RuntimeException: Could not connect to development server.
Try the following to fix the issue:
Ensure that the packager server is running
Ensure that your device/emulator is connected to your machine and has USB debugging enabled - run 'adb devices' to see a list of connected devices
If you're on a physical device connected to the same machine, run 'adb reverse tcp:8081 tcp:8081' to forward requests from your device
If your device is on the same Wi-Fi network, set 'Debug server host & port for device' in 'Dev settings' to y
at com.facebook.react.common.futures.SimpleSettableFuture.get(SimpleSettableFuture.java:68)
at com.facebook.react.ReactInstanceManagerImpl.createReactContext(ReactInstanceManagerImpl.java:882)
    ... 9 more
Caused by: java.lang.RuntimeException: Could not connect to development server.
Try the following to fix the issue:
Ensure that the packager server is running
Ensure that your device/emulator is connected to your machine and has USB debugging enabled - run 'adb devices' to see a list of connected devices
```

签名打包混合 APP
    1. 将 js 文件存入 bundle 一起打包
    执行命令：
```
curl -k "http://localhost:8081/index.android.bundle"> reactapp/src/main/assets/index.android.bundle
```
执行完命令成功，在 assets目录应该看到 index.android.bundle文件

Android studio 执行打包过程，作为一名 Android 老司机我就不再具体描述了