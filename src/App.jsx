import React, { memo } from 'react'
import { Route, Redirect } from 'react-router-dom'



import List from './list/list'
import Home from './Home';
import Detail from './detail/detail'

export default memo(function App() {
    return (
            <>
                <Route path="/home" children={props => <Home {...props}/>}></Route>
                <Route path="/list" children={props => <List {...props}/>}></Route>
                <Route path="/detail" children={props => <Detail {...props}/>}></Route>
                <Redirect from="/" to="/home"></Redirect>
            </>
    )
})
