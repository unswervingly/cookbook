import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CookBooks from './cookbooks'
import { getLoadDateAction } from './store/createAction'


class Cookbook extends PureComponent {

    componentDidMount() {
        this.props.loadDate()
    }

    componentDidUpdate() {
        // console.log(this.props.list);
    }

    handleDetail(title) {
        this.props.history.push('/detail', { title })
    }

    render() {
        return (
            <div>
                <CookBooks list={this.props.list} onGoDetail={title => this.handleDetail(title)}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        list: state.cookbookReducer.list,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadDate() {
            dispatch(getLoadDateAction())
        },
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cookbook));