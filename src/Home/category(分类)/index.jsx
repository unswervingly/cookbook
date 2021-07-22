import React, { PureComponent } from 'react'
import { connect } from "react-redux";

import {
    CategoryWrapper,
    UlWrapper,
} from './style'
import Search from '../../components/search/search.jsx'

import Menu from './menu/menu';
import { changeCateAsideAction, changeCateTypeAction } from './store/createAction';

class Category extends PureComponent {

    handleClick(type) {
        // console.log(type);
        this.props.changeCateType(type);
        this.props.changeCateAside(type === 'category' ? '热门' : '肉类')
    }

    render() {
        // console.log(this.state.type);
        // console.log(this.props.cateType);
        // console.log(this.props);
        return (
            <CategoryWrapper>
                <nav>
                    <UlWrapper color="pink" radius={0.15}>
                        <li className={this.props.cateType === 'category' ? "active" : ''} onClick={e => this.handleClick('category')}>分类</li>
                        <li className={this.props.cateType === 'material' ? "active" : ''} onClick={e => this.handleClick('material')}>食材</li>
                        <li className={this.props.cateType === 'category' ? "slide" : 'slide right'}></li>
                    </UlWrapper>
                </nav>

                <Search outer="#fff" inner="#efefef" harborer={false}
                    radius={0.06} />

                <Menu />
            </CategoryWrapper>
        )
    }
}


const mapStateToProps = state => {
    return {
        cateType: state.cateReducer.routeInfo.cateType,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeCateType(cateType) {
            dispatch(changeCateTypeAction(cateType))
        },
        changeCateAside(cateAside) {
            dispatch(changeCateAsideAction(cateAside))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);