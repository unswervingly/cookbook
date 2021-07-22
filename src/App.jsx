import React, { memo } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'


import List from './list/list'
import Home from './Home';
import Detail from './detail/detail'

export default memo(function App() {
    return (
        <CSSTransition
            in={true}
            classNames="animate"
            timeout={1000}
            classNames={{
                enter: 'animate__animated',
                enterActive: 'animate__slideInRight',
                exit: 'animate__animated',
                exitActive: 'animate__slideOutLeft',
            }}
            mountOnEnter={true}
            unmountOnExit={true}
        >
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Redirect from="/" to="/home"></Redirect>
            </Switch>
        </CSSTransition>

    )
})
