import * as React from "react";
import classnames from "classnames";

export interface ITextProps {
    children: any;
    className?: string;
    isHtml?: boolean;
    isBlock?: boolean;
    isBold?: boolean;
    isItalic?: boolean;
    onClick?: (e: any) => void;
    isI18n?: boolean;
}



const Text: React.SFC<ITextProps> = ({
    isHtml,
    isItalic,
    isBold,
    children,
    isBlock,
    onClick,
    className,
    isI18n,
}) => {
    const styleText = classnames(className, {
        text__text: true,
        'text--bold': isBold,
        'text--italic': isItalic,
        'text--block': isBlock
    });

    return (
        <span
            className={`text ${styleText}`}
            onClick={onClick ? onClick : () => null}
        >
            {children}
        </span>
    )
};

export default Text;

Text.displayName = 'Text';
