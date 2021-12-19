import styled from "styled-components"

export const Container = styled.nav`
    background: var(--white);
    box-shadow: var(--box-shadow);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 470px) {
        justify-content: center;
    }
`