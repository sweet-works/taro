import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtNoticebar } from 'taro-ui';
import './Notic.scss'
export interface NoticProps {
  marquee: boolean;
  title?: string;
  icon?: string;
  close?: boolean;
  single?: boolean;
  speed?: number;
  showMore?: boolean;
  moreText?: string;
}
export default class Notic extends Component<NoticProps, any> {
  render() {
    let { title, marquee, ...rest } = this.props;
    return (
      <View className='Notic'>
        <AtNoticebar marquee {...rest}>
          {title}
        </AtNoticebar>
      </View>
    )
  }
}
