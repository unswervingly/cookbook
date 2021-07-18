import React, { PureComponent } from 'react'
import { Carousel } from "antd-mobile";
import 'antd-mobile/dist/antd-mobile.css';

import img1 from '../../assets/images/swiper-1.png'
import img2 from '../../assets/images/swiper-2.jpeg'
import img3 from '../../assets/images/swiper-3.jpeg'

import {
    SwiperWrapper,
} from '../cookbook(菜谱)/style'

export default class Swiper extends PureComponent {
    render() {
        return (
            <SwiperWrapper>
                <Carousel 
                    autoplay={true}
                    infinite
                    effect="fade"
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                >
                   <img src={img2} alt=""/> 
                   <img src={img3} alt=""/> 
                   <img src={img1} alt=""/> 
                </Carousel>
            </SwiperWrapper>
        )
    }
}
