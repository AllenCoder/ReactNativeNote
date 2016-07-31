#ReactNative 学习笔记

1. folly::toJson: JSON object value was a Nan or INF

> 移出项目中 style 包含：" alignItems: 'center' " 
2. React-Native 引导页已经背景图    全屏覆盖展开

> 
```javascript
    var {width,height,scale,fontScale} = Dimensions.get('window');

```
> 用法：
```javascript
    <Image
        style={{flex: 1, width: width, height: height}}
        source={require('../img/loading_page.png')}
        defaultSource={require ('../img/loading_page.png')}
      />
```


1. [React Native 代码规范](https://github.com/ToAllen/react-native-coding-style)

# ReactNative存储
    1. [AsyncStorage](http://reactnative.cn/docs/0.28/asyncstorage.html)
# ReactNative IDE配置
    ！[VsCode 配置](http://www.jianshu.com/p/bdf36dd8bf58)