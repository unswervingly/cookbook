import styled from 'styled-components';
import border from '../../assets/styled/border'

export const SearchWrapper = styled.div`

    padding: .1rem .15rem;
    background-color: ${props => props.outer};  
`;

export const InnerWrapper = border(styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: .4rem;
    /* border: ${props => props.harborer ? "1px solid #ee742f" : ''}; */
    /* border-radius: 0.06rem; */
    background-color: ${props => props.inner};

    svg {
        width: .18rem;
        height: .18rem;
        margin-right: .06rem;
        fill: #ee742f;
    }

    span {
        color: #666;
    }
`)
