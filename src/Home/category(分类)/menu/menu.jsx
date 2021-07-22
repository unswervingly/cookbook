import React, { PureComponent } from 'react'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import MenuList from '../../../components/menuList/menuList'
import { get } from '../../../services/cookbook'
import { changeCateAsideAction } from '../store/createAction';

class Menu extends PureComponent {
    static propTypes = {
        type: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.state = {
            cate: null,
            // type: 'category',
            // curCate: this.props.type === 'category' ? '热门' : '肉类'
        }
    }

    async componentDidMount() {
        let res = await get({
            url: '/api/category'
        })
        // console.log(res.data.data);
        this.setState({
            cate: res.data.data
        })

        if(!this.props.cateAside) {
            this.props.changeCateAside(this.props.cateType === 'category' ? '热门' : '肉类')
        }
    }

    // static getDerivedStateFromProps(nextProps, preState) {
    //     if (nextProps.type === preState.type) {
    //         return null
    //     } else {
    //         return {
    //             curCate: nextProps.type === 'category' ? '热门' : '肉类',
    //             type: nextProps.type
    //         }
    //     }
    // }


    render() {
        // console.log(this.state.cate && this.state.cate[this.props.type]);
        // console.log(this.props.type);
        return (
            <MenuList
                onAsideClick={(item) => this.handleCate(item)}
                curCate={this.props.cateAside}
                cate={this.state.cate && this.state.cate[this.props.cateType]}
                onGoList={title => this.handleGoList(title)}
            >
            </MenuList>
            // null
        )
    }

    handleCate(item) {
        // console.log(item);
        this.props.changeCateAside(item)
    }

    handleGoList(title) {
        // console.log(title);
        this.props.history.push('/list', { title })
    }
}

const mapStateToProps = state => {

    return {
        cateType: state.cateReducer.routeInfo.cateType,
        cateAside: state.cateReducer.routeInfo.cateAside,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeCateAside(cateAside) {
            dispatch(changeCateAsideAction(cateAside))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu));

