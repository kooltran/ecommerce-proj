import React from 'react';
import classnames from 'classnames'
import './Button.scss'
import Button, { ButtonSize } from 'antd/lib/button';
import Icon from 'antd/lib/icon';

export interface IButtonProps {
    children: any;
    isBGBtn?: boolean;
    isBtnOutline?: boolean;
    className?: string;
    size?: ButtonSize;
    onClick?: (e: any) => void;
    loading?: boolean,
    iconType?: string;
}

const MainButton: React.SFC<IButtonProps> = ({
    children,
    isBGBtn,
    isBtnOutline,
    className,
    onClick,
    size,
    loading,
    iconType
}) => {
    const styleButton = classnames(className, {
        btn: true,
        'btn-bg': isBGBtn,
        'btn-outline': isBtnOutline
    })

    return (
        <Button className={styleButton} onClick={onClick} size={size} loading={loading}>
            {
                iconType && <Icon type={iconType} />
            }
            {children}
        </Button>
    )
}

export default MainButton;