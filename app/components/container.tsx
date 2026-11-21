import React from 'react'
import { cn } from '@/lib/utils'

export const Container = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full mx-auto", className)}>
      {children}
    </div>
  )
}

export default Container
