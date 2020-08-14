import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import propTypes from 'prop-types'

class Child extends Component {
    
    // 也可以在这里定义默认属性
    static defaultProps = {
        obj: {'key': [{text: '默认属性'}]}
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { obj } = this.props
        return (
            <View>
                <Text>这是子节点------{this.props.name}------{obj.key[0].text}</Text>
            </View>
        )
    }
}
// 因为使用了obj对象中的属性key, 防止没有key的情况下，会出现报错的情况，所以必须定义默认属性
Child.defaultProps = {
    obj: {'key': [{text: '默认属性'}]}
}  
// 定义prop-type -- 好像还不支持
Child.propTypes = {
    name: propTypes.number
}

export default Child
