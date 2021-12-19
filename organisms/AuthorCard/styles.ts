import styled from 'styled-components'

export const Container = styled.div`

`

export const Header = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: solid 2px #fff;
    overflow: hidden;
    margin: 0 auto;

    .picture {
        object-fit: cover;
        display: block;
    }
`

export const Body = styled.div`
    background: #fff;
    border-radius: 12px ;
    padding: 2rem 1rem 1.5rem 1rem;
    margin-top: -2rem;
    text-align: center;
    flex-direction: column;
    display: flex;

    .name {
        font-weight: bold;
    }

    .email {
        font-size: .7rem;
        opacity: .7;
        margin-bottom: 10px;
    }
`