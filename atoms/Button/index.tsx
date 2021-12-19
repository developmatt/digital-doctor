import React, { MouseEventHandler } from 'react'
import { DefaultButtonStyles, SecondaryButtonStyles } from './styles'

interface DefaultButtonProps {
    children: any
    onClick: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    style?: any
}

const DefaultButton: React.FC<DefaultButtonProps> = ({children, onClick, style, disabled}) => {
    return (
        <DefaultButtonStyles style={style} onClick={onClick} disabled={disabled || false}>
            {children}
        </DefaultButtonStyles>
    )
}

const SecondaryButton: React.FC<DefaultButtonProps> = ({children, onClick, style, disabled}) => {
    return (
        <SecondaryButtonStyles style={style} onClick={onClick} disabled={disabled || false}>
            {children}
        </SecondaryButtonStyles>
    )
}

export { DefaultButton, SecondaryButton }