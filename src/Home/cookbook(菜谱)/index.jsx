import React, { PureComponent } from 'react'



import {
    CookBooksWrapper,
} from './style'
import Swiper from './swiper'
import Search from '../../components/search/search.jsx'
import HotCate from './hotCate'


export default class CookBooks extends PureComponent {
    render() {
        return (
            <CookBooksWrapper>
                <header>美食大全</header>
                <Swiper/>
                <Search/>
                <HotCate/>
            </CookBooksWrapper>
        )
    }
}
