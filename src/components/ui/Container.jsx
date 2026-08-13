import React from 'react'
import { cn } from '../../utils/cn'

const Container = ({className = '', children}) => {
  return (
    <div className={cn('w-full px-5 mx-auto max-w-xs md:max-w-3xl site-xl:max-w-300', className)}>
      {children}
    </div>
  )
}

export default Container
