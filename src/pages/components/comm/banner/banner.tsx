import React, { Component } from 'react'
// 引入 Swiper, SwiperItem 组件
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './banner.scss'
export interface ListType {
    key: number;
    src: string
}
export interface BannerProps {
    bannerList: Array<ListType>
}
class Banner extends Component<BannerProps, any> {
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        let { bannerList } = this.props;
        console.log(bannerList);
        return (
            <View className='banner'>
                <Swiper
                    className='banner_swiper'
                    indicatorColor='#999'
                    indicatorActiveColor='#333'
                    circular
                    indicatorDots
                    autoplay
                >
                    {
                        bannerList.map(item => {
                            return (<SwiperItem key={item.key}>
                                <View>
                                    <Image src={item.src} />
                                </View>
                            </SwiperItem>)
                        })
                    }
                </Swiper>
            </View>

        )
    }
}
export default Banner
    ;
