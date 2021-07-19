import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import MenuList from '../../../components/menuList/menuList'
import { get } from '../../../services/cookbook'

export default class Menu extends PureComponent {
    static propTypes = {
        type: PropTypes.string
    }
    
    constructor(props) {
        super(props);

        this.state = {
            cate: null,
            type: 'category',
            curCate: this.props.type === 'category' ? '热门' : '肉类'
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
    }

    static getDerivedStateFromProps(nextProps, preState) {
        if (nextProps.type === preState.type) {
          return null
        } else {
          return {
            curCate: nextProps.type === 'category' ? '热门' : '肉类',
            type: nextProps.type
          }
        }
      }

    render() {
        // console.log(this.state.cate && this.state.cate[this.props.type]);
        return (
            <MenuList
                onAsideClick={(item) => this.handleCate(item)} 
                curCate={this.state.curCate}
                cate={this.state.cate && this.state.cate[this.props.type]}
            >
            </MenuList>
            // null
        )
    }

    handleCate(item) {
        // return () => {
            this.setState({
                curCate: item
            })
        // }
        
    }
    
}
