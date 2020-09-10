import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"

import './Home.scss'
import Banner from '../comm/banner/banner'
import Notic from '../comm/Notic/Notic'
const bannerList =[
{key:1, src: 'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180'},
{key:2, src: 'https://img12.yiguoimg.com/d/items/2018/181112/9288733893305708_1125x652.jpg?w=1125&h=652'},
{key:3, src: 'https://img13.yiguoimg.com/d/items/2018/181112/9288733893305708_1125x652.jpg?w=1125&h=652'},
{key:4, src: 'https://img14.yiguoimg.com/d/items/2018/181111/9288733871940971_1125x652.jpg?w=1125&h=652'},
]
export default class Home extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  handleClick = () => {
    console.error(123);
  }
  render() {
    return (
      <View className='Home'>
        <Banner
          bannerList={bannerList}
        />
        <Notic
          title='这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏'
          marquee={true}
          icon='volume-plus'
          speed={60}
        />
        <AtList>
          <AtListItem title='标题文字' onClick={this.handleClick} />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' extraText='详细信息' />
          <AtListItem title='禁用状态' disabled extraText='详细信息' />
          <AtListItem title='标题文字' onClick={this.handleClick} />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' extraText='详细信息' />
          <AtListItem title='禁用状态' disabled extraText='详细信息' />
          <AtListItem title='标题文字' onClick={this.handleClick} />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' extraText='详细信息' />
          <AtListItem title='禁用状态' disabled extraText='详细信息' />
          <AtListItem title='标题文字' onClick={this.handleClick} />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' extraText='详细信息' />
          <AtListItem title='禁用状态' disabled extraText='详细信息' />
          <AtListItem title='标题文字' onClick={this.handleClick} />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' extraText='详细信息' />
          <AtListItem title='禁用状态' disabled extraText='详细信息' />
          <AtListItem title='标题文字' onClick={this.handleClick} />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' extraText='详细信息' />
          <AtListItem title='禁用状态' disabled extraText='详细信息' />
          <AtListItem title='标题文字' onClick={this.handleClick} />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' extraText='详细信息' />
          <AtListItem title='禁用状态' disabled extraText='详细信息' />
          <AtListItem title='标题文字' onClick={this.handleClick} />
          <AtListItem title='标题文字' arrow='right' />
          <AtListItem title='标题文字' extraText='详细信息' />
          <AtListItem title='禁用状态' disabled extraText='详细信息' />
          <AtListItem title='王耀杰' disabled extraText='详细信息' />
        </AtList>
      </View>
    )
  }
}
