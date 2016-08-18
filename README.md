# ReactNative 学习笔记

1. folly::toJson: JSON object value was a Nan or INF

> 移出项目中 style 包含：" alignItems: 'center' " 

2. React-Native 引导页已经背景图    全屏覆盖展开

```
    var {width,height,scale,fontScale} = 
    Dimensions.get('window');

```
> 用法：

```javascript
    <Image
        style={{flex: 1, width: width, height: height}}
        source={require('../img/loading_page.png')}
        defaultSource={require ('../img/loading_page.png')}
      />
```


# [React Native 代码规范](https://github.com/ToAllen/react-native-coding-style)

# ReactNative存储
 [AsyncStorage](http://reactnative.cn/docs/0.28/asyncstorage.html)
# ReactNative IDE配置
   [VsCode 配置](http://www.jianshu.com/p/bdf36dd8bf58)
    
#  Android 项目中嵌入 ReactNative 模块
  [Android 项目中嵌入 ReactNative 模块](https://github.com/AllenCoder/ReactNativeNote/blob/master/Android%E5%8E%9F%E7%94%9F%E9%A1%B9%E7%9B%AE%E7%A7%BB%E6%A4%8D%20ReactNative.md)
    
## License
```
Copyright 2016 AllenCoder

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```