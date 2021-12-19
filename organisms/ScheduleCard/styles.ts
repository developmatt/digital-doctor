import styled from 'styled-components'

export const Container = styled.div`
    display: block;
    width: 100%;
    padding: 15px 10px;
    background: #fff;
    border-bottom: solid 1px #eee;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .fullDate {
        display: block;

        .date, .time {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;

            svg {
                margin-right: 10px;
            }
        }
    }
`

export const Title = styled.span`
    font-weight: bold;
    margin-bottom: 10px;
    display: block;
`

export const Footer = styled.span`
    display: block;
`