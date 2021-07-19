import styled from 'styled-components';

export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        height: .44rem;
        background-color: #ee742f;
        
        ul {
            position: relative;
            display: flex;
            width: 1.4rem;
            height: .3rem;
            border: 1px solid #fff;
            border-radius: 0.15rem;

            li {
                flex: 1;
                line-height: .3rem;
                text-align: center;
                transition: all 300ms ease-in;
                &.active {
                    color: #ee742f;
                    z-index: 2;
                }

                &.slide {
                    position: absolute;
                    top: -.01rem;
                    width: .7rem;
                    background-color: #fff;
                    height: .3rem;
                    border-radius: 0.15rem;

                    &.right {
                        left: 0.7rem;
                    }
                }
            }
        }
    }
`