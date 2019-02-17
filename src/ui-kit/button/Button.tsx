import * as React from "react";

interface IButtonProps {
    children: any
}
export const Button: React.SFC<IButtonProps> = ({ children }) => {
    return <button>{children}</button>;
}