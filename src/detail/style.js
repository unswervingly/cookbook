import styled from 'styled-components';

export const DetailWrapper =styled.div`
    img {
        width: 100%;
    }

    .cookbook_name {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 1.7rem;

        h1 {
            font-size: .2rem;
        }

        h3 {
            font-weight: normal;
            font-size: .14rem;
            margin: .1rem 0;
        }

        button {
            width: 1.3rem;
            height: .44rem;
            background-color: #ee742f;
            border: 0;
            border-radius: .06rem;
            color: #fff;
            font-size: .16rem;
        }
    }
`