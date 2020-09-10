import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import Footer from '../components/comm/footer/Footer'
import Home from '../components/Home/Home';
export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  render() {
    return (
      <View className='main'>
        <View className='body'>
          <Home />
        </View>
        <View className='footer'>
          <Footer />
        </View>
      </View>
    )
  }
}

