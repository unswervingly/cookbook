import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CookBooks from './cookbooks'
import { getLoadDateAction } from './store/createAction'


class Cookbook extends PureComponent {

    componentDidMount() {
        this.props.loadDate()
    }

    componentDidUpdate() {
        // console.log(this.props.list);
    }

    render() {
        return (
            <div>
                <CookBooks list={this.props.list}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        list: state.cookbookReducer.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadDate() {
            dispatch(getLoadDateAction())
        },
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cookbook);