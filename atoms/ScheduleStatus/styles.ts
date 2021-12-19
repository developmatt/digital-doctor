import styled from 'styled-components'

export const Container = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    color: #fff;
    padding: 5px 12px 7px 10px;
    border-radius: 4rem;
    font-size: 0.8rem;

    svg {
        margin-right: 5px;
    }

    &.pending {
        background: var(--linear-gradient);
    }

    &.completed {
        background: green;
    }
`