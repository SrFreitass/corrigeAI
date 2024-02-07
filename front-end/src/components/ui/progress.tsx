'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

interface propsProgress extends React.ButtonHTMLAttributes<HTMLDivElement> {
  bgPrimary: string
  bgSecundary: string
  value: number
  max: number
}

const Progress = React.forwardRef<HTMLDivElement, propsProgress>(
  ({ className, value, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-1.5 w-full overflow-hidden rounded-full',
        props.bgSecundary,
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={`h-full w-full flex-1 transition-all ${props.bgPrimary}`}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  ),
)
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
