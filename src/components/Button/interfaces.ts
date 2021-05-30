import { ReactNode, ButtonHTMLAttributes }  from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    color: string;
    hoverColor: string;
}

export interface ColorButton {
    color: string;
    hoverColor: string;
}