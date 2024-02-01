import React from 'react'

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>
export function TextArea(props: TextAreaProps) {
  return <textarea {...props}></textarea>
}
