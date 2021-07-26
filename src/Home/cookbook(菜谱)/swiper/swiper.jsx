import React, { memo } from 'react'
import { Carousel } from "antd-mobile";
import 'antd-mobile/dist/antd-mobile.css';
import PropTypes from 'prop-types'



import {
    SwiperWrapper,
} from './style'



const Swiper = memo(function(props) {
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
                           <img key={item.id} src={item.img} alt="" onClick={e => props.onGoDetail(item.name)}/>
                       )
                   })
               }
            </Carousel>
        </SwiperWrapper>
    )
})

// 函数式组件绑定类型检查
Swiper.propTypes = {
    list: PropTypes.array
}

export default Swiper;