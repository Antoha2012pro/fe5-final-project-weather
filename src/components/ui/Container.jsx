import React from 'react'
import { cn } from '../../utils/cn'

const Container = ({className = '', children}) => {
  return (
    <div className={cn('w-full px-5 mx-auto max-w-83.25 site-md:max-w-168.5 site-xl:max-w-300', className)}>
      {children}
    </div>
  )
}

export default Container
