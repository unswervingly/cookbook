import React, { PureComponent } from 'react'


import {
    CategoryWrapper,
} from './style'
import Search from '../../components/search/search.jsx'

import Menu from './menu/menu';

export default class Category extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
            type: 'category'
        }
    }
 
    handleClick(index) {
        this.setState({
            tabIndex: index,
            type: index === 0 ? "category" : "material"
        })
    }

    render() {
        // console.log(this.state.type);
        return (
            <CategoryWrapper>
                <nav>
                    <ul>
                        <li className={this.state.tabIndex === 0 ? "active" : ''} onClick={e => this.handleClick(0)}>分类</li>
                        <li className={this.state.tabIndex === 1 ? "active" : ''} onClick={e => this.handleClick(1)}>食材</li>
                        <li className={this.state.tabIndex === 0 ? "slide" : 'slide right'}></li>
                    </ul>
                </nav>

                <Search outer="#fff" inner="#efefef" harborer={false}/>

                <Menu type={this.state.type}/>
            </CategoryWrapper>
        )
    }

    
}
