import styled from 'styled-components';
import border from '../assets/styled/border'
import ellipsis from '../assets/styled/ellipsis'

export const ListWrapper =styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

    ul {
        flex: 1;
        overflow-y: scroll;
    }
`

export const EllipsisWrapper = ellipsis(styled.h2``)

export const LiWrapper = border(styled.li`

        display: flex;
        padding: .1rem;
        background-color: #fff;
        img {
            margin-right: .15rem;
        }

        div:last-child {
            h1 {
                font-size: .16rem;
                line-height: .3rem;
            }
            h2 {
                font-weight: normal;
            }
            h3 {
                font-size: .12rem;
                font-weight: normal;
                /* transform: scale(1);
                transform-origin: 0; */
                line-height: .25rem;

            }
        } 
`)