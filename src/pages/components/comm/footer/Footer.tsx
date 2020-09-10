import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import './Footer.scss'

class Footer extends Component<any, any> {
  state = {
    current: 0
  }
  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  render() {
    return (
      <View className="footer">
        <AtTabBar
          backgroundColor='#ececec'
          color='#ea6bb8'
          tabList={[
            { title: '待办事项', iconType: 'bullet-list', text: 'new' },
            { title: '拍照', iconType: 'camera' },
            { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    );
  }
}

export default Footer;
