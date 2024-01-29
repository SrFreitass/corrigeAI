import React from 'react';

interface propsInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: propsInput) {
    return <input {...props} />;
}
