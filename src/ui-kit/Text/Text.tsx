import * as React from 'react'
import classnames from 'classnames'
import './Text.scss'

export interface ITextProps {
    children: any
    className?: string
    isBlock?: boolean
    isBold?: boolean
    isLink?: boolean
    isItalic?: boolean
    onClick?: (e: any) => void
}

const Text: React.SFC<ITextProps> = ({
    isItalic,
    isBold,
    isLink,
    children,
    isBlock,
    onClick,
    className,
}) => {
    const styleText = classnames(className, {
        text__text: true,
        'text--bold': isBold,
        'text--italic': isItalic,
        'text--block': isBlock,
        'text--link': isLink,
    })

    return (
        <span
            className={`text ${styleText}`}
            onClick={onClick ? onClick : () => null}
        >
            {children}
        </span>
    )
}

export default Text

Text.displayName = 'Text'