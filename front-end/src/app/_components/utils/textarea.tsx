import React from 'react';

interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export function TextArea(props: TextAreaProps) {
    return <textarea {...props}></textarea>;
}
