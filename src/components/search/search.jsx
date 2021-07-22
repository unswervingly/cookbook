import React, { memo } from 'react'


import {
    SearchWrapper,
    InnerWrapper,
} from './style'


export default memo(function search(props) {
    // console.log(props);

    return (
        <SearchWrapper {...props}>
            <InnerWrapper {...props}>
                <svg t="1626516770011" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1296" width="200" height="200"><path d="M700.8 775.765333a384 384 0 1 1 74.965333-74.965333l147.370667 147.370667a53.034667 53.034667 0 0 1-74.965333 74.965333l-147.370667-147.370667zM469.333333 768a298.666667 298.666667 0 1 0 0-597.333333 298.666667 298.666667 0 0 0 0 597.333333z" p-id="1297"></path></svg>

                <span>想吃什么搜这里，如闽菜</span> 
            </InnerWrapper>
            
        </SearchWrapper>
    )
})

