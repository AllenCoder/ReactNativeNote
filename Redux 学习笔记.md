# 1. Redux 是什么？


ReactNative 架构Redux研究
字数1067 阅读5379 评论4 喜欢15
参考文档:http://camsong.github.io/redux-in-chinese/index.html
参考Demo:https://github.com/alinz/example-react-native-redux
参考文档 http://www.jianshu.com/p/14933fd9c312

01. ReactNative 架构Redux研究.jpg
Redux是当前最热门的React架构。它的出现主要是为了修补Facebook官方推荐架构Flux的不足。
[!![alt](http://upload-images.jianshu.io/upload_images/80690-2c073cb2c2cf1010.jpg?imageMogr2/auto-orient/strip%7CimageView2/2)]

02. Redux开发环境搭建.jpg
Redux开发环境搭建非常简单。需要注意的是，由于目前React-Native 0.17.0 的兼容性不好，建议大家先用0.16.0，并关注0.18.0的更新。


03. Redux 三个要点.jpg
Redux为了达到对组件state的控制，禁止直接修改state，而是通过action触发reducers的方式来更新state树。


04. Redux概览.jpg
Redux的主要工作在store上。通过store持有状态树，监听、分发action。


05. Redux 三原则.jpg
State只读，可能让人比较费解。Redux并不直接修改state树，而是创建state树副本，更新后，直接替换旧的state树。


06. Rx 异步流.jpg
Rx与Redux配合良好，可以把Redux store作为可观察变量处理。


07. Action.jpg
Action是Redux处理数据的开始。数据的任何变化都应该有相应的Action。


08. Reducer.jpg
Reducer是数据的处理中心。编写完成后，它应该作为一种黑盒的存在。


09. Reducer 更新State.jpg
通过Object.assign创建state副本后再进行修改，不要直接修改原state。


10. Reducer 合成.jpg
通过子Reducer函数管理不同的分组数据，最后合成唯一一棵state树。


11. Store 职责.jpg
Store负责对整个state树进行管理。通过监听action，实现数据的传递。


12. Store 创建、监听、分发.jpg
组件卸载时，要注意停止store的监听，以免影响性能。


13. 数据流.jpg
数据流从用户行为触发的action开始。
Action->Store->Reducer->Store->UI。


14. React-Redux.jpg
Redux是独立的库，需要通过React-Redux库实现与React Native的配合使用。
设计组件的层次结构，主要搞清楚不同的组件需要处理什么数据，实现什么功能的回调。


15.React 连接到Redux.jpg
Redux通过Provider和connect两个组件，实现与React的连接。


16. 完整的 ReactNative APP文件结构.jpg
Redux的主要工作在容器组件上。Actions和Reducers都是纯函数。


17. Redux APP 结构.jpg
store和 connect这层是开发调试时的主要对象。


18. 异步Action.jpg
异步Action，一般需要提供三种以上的状态Action。


19.state 结构.jpg
通过ID引用数据，可以实现更简洁清晰的数据结构。


20. redux-thunk.jpg
中间件技术，通过切片组合，使得action传递过程中可以实现更多的控制。


21.Fetch.jpg
Fetch是更简洁清晰的请求方式。


22.服务端渲染：异步 action creator.jpg
直接在action creator里dispatch 请求action，将使得业务逻辑更连贯。


23.处理异步Action的选择.jpg
Thunk middleware是目前最多人使用的方案。


24.异步数据流.jpg
异步数据流通过使用异步中间件包装store的dispatch方法来实现。最终要返回一个普通对象的action，重回同步数据流。


25.中间件 Middleware.jpg
链式组合，使得代码逻辑更简单清晰。


26.Middleware 的演化.jpg
中间件可以层层叠加，非常灵活地修改功能函数的功能。


27. Redux迁移-Flux 项目.jpg
迁移的关键工作在于把Flux store重写为Redux 的reducer。


28.减少样板代码.jpg
通过上面的原则，可以使Redux App的代码更易于维护。


29.服务端渲染.jpg
服务端渲染可以进一步提升React 的性能。


30.Redux 测试.jpg
Action 和 Reducer都是纯函数，使得测试可以覆盖到更多代码。


31.计算衍生数据.jpg
Reselect 可以省去数据不必要的重新计算。


32.实现撤销历史.jpg
通过同时维护三个数据域来实现撤销与重做。


33. Redux Undo.jpg
Redux-undo使得撤销重做更容易实现。

如果你有任何问题想找我交流，可以到我的支付宝经费群来找我：）