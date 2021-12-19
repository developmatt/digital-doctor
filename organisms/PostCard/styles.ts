import styled from 'styled-components'

export const Container = styled.div`
    display: block;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 2px 0 rgb(0 0 0 / 12%);
    overflow: hidden;
    border-radius: 1rem;
    transition: 0.3s;

    :hover {
        opacity: 0.7;

        .postTitle {
            opacity: 0.7;
        }
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 150px;
    overflow: hidden;
    position: relative;

    img {
        object-fit: cover;
        width: 100%;
    }

    .postTitle {
        position: absolute;
        left: 0;
        bottom: 0;
        background: #000;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        color: #fff;
        padding: 0.5rem 1rem 0.3rem 1rem;
        opacity: 0;
        transition: 0.3s;
    }
`

export const Body = styled.div`
    display: block;
    padding: 1rem;
    
    .spanContent {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }
`

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1rem 1rem 1rem;

    .authorPicture {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;
        overflow: hidden;
    }

    .authorData {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        font-size: 0.8rem;
        width: calc(100% - 40px);
    }

    .authorName {
        font-weight: bold;
    }

    .authorEmail {
        opacity: 0.7;
    }
`