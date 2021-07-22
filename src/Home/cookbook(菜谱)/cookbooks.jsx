import React, { memo } from 'react'
import PropTypes from 'prop-types'
import memoize from 'memoize-one'

import {
    CookBooksWrapper,
} from './style'
import Swiper from './swiper/swiper'
import Search from '../../components/search/search.jsx'
import HotCate from './hotCate/hotCate'
import Boutique from './boutique/boutique'


const CookBooks = memo(function(props) {

    const swiper = memoize(list => list.slice(0, 5))

    const hotCate = memoize(list => list.slice(0, 5))
    
    return (
        <CookBooksWrapper>
            <header>美食大全</header>
            <Swiper list={swiper(props.list)} onGoDetail={props.onGoDetail}/>
            <Search outer="#f5f5f9" inner="#fff" harborer={true}
                    radius={0.06} color="#ee742f"/>
            <HotCate/>
            <Boutique  list={hotCate(props.list)} onGoDetail={props.onGoDetail}/>
        </CookBooksWrapper>
    )
})

// 函数式组件绑定类型检查
CookBooks.propTypes = {
    list: PropTypes.array
}

export default CookBooks;