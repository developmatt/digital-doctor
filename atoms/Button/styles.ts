import styled from 'styled-components'

const DefaultButtonStyles = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    background: var(--linear-gradient);
    color: #fff;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    transition: 0.3s;
    font-weight: bold;

    :hover {
        opacity: .7;
    }

    :disabled {
        opacity: 0.3;
        cursor: initial;
    }
`

const SecondaryButtonStyles = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    background: #fff;
    color: var(--red);
    border: solid 1px var(--red);
    border-radius: 2rem;
    cursor: pointer;
    transition: 0.3s;
    font-weight: bold;

    :hover {
        opacity: .7;
        background: var(--linear-gradient);
        color: #fff;
    }

    :disabled {
        opacity: 0.3;
        cursor: initial;
    }

    :disabled:hover {
        background: #fff;
        color: var(--red);
    }
`

export { DefaultButtonStyles, SecondaryButtonStyles }