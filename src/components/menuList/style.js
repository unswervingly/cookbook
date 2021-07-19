import styled from 'styled-components';

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    overflow: hidden;
    border-top: 1px solid #ccc;
    aside {
        overflow-y: scroll;
        width: .9rem;

        ul {
            li {
                height: 0.5rem;
                text-align: center;
                line-height: 0.5rem;

                &.active {
                    background-color: #fff;
                    /* color: #ee742f; */
                    span {
                        display: inline-block;
                        height: 0.5rem;
                        color: #ee742f;
                        border-bottom: 1px solid #ee742f;
                    }
                }
                
            }
        }
    }

    section {
        flex: 1;
        padding: .25rem;
        background-color: #fff;
        overflow-y: scroll;

        ul {
            display: flex;
            flex-wrap: wrap;
            li {
                width: 33.33333%;
                height: .45rem;
                text-align: center;
                line-height: .45rem;
            }
        }
    }
`