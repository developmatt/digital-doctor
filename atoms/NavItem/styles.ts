import styled from 'styled-components'

export const Container = styled.li`
    transition: .3s;
    
    svg {
        margin-right: 0.7rem;
    }
    
    &:hover {
        color: var(--red);
    }
    
    .link {
        padding: 1rem;
        display: flex;
        align-items: center;
    }

    @media (max-width: 960px) {
        font-size: 1.5rem;
    }
`