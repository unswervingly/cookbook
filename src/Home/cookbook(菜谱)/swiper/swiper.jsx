import React from 'react'
import { Carousel } from "antd-mobile";
import 'antd-mobile/dist/antd-mobile.css';
import PropTypes from 'prop-types'



import {
    SwiperWrapper,
} from './style'



const Swiper = (props) => {
    return (
        <SwiperWrapper>
            <Carousel 
                autoplay={true}
                infinite
                effect="fade"
                // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            >
               {
                   props.list.length > 0 && props.list.map((item, index) => {
                       return (
                           <img key={item.id} src={item.img} alt="" />
                       )
                   })
               }
            </Carousel>
        </SwiperWrapper>
    )
}

// 函数式组件绑定类型检查
Swiper.propTypes = {
    list: PropTypes.array
}

export default Swiper;