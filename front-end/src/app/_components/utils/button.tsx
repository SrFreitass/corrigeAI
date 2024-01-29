import React from 'react';

interface propsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean;
}

export function Button({
    children,
    ...props
}: { children: React.ReactNode } & propsButton) {
    return (
        <button
            {...props}
            className={`
            p-2.5
            rounded-md
            ${props.className} 
            ${props.outline ? 'border-2' : 'bg-secundary'}`}
        >
            {children}
        </button>
    );
}
