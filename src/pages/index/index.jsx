import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import Child from './child'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
      name: "Hello World!",
      obj: null
  }

  componentWillMount () {
    // this.setState({
    //     name: '123',
    //     obj: {'key': [{text: 'obj对象'}]}
    // })
    // 在setState时，需要使用参数的形式获取之前的state
    this.setState(prevState => ({ 
        name: prevState.name + "123",
        obj: {'key': [{text: 'obj对象'}]}
      })
    ) 
   }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () {
      console.log("小程序页面打开时触发")
   }

  componentDidHide () {
      console.log("小程序页面隐藏时触发")
  }

  componentWillUpdate(){
      console.log("state数据将要更新")
  }

  componentWillReceiveProps(nextProps) {
      console.log("接收父组件的传递的属性")
  }

  shouldComponentUpdate(nextProps, nextState) {
      // 直接获取state的值，state更新时异步，还没有更新，所以可以使用这里的nextState
      // 检查此次state更新，是否需要重新渲染render
      // 如果返回false,则不更新render,如果返回true,则更新
  }

  render () {
    return (
      <View className='index'>
          <Text>{this.state.name}</Text>
          <Child name={this.state.name} obj={this.state.obj}></Child>
      </View>
    )
  }
}
