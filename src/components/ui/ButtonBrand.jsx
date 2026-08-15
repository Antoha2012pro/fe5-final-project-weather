import React from 'react'
import { cn } from '../../utils/cn'

const ButtonBrand = ({children, className, onClick, }) => {
  return (
    <button className={cn('rounded-[5px] site-xl:rounded-[10px] bg-brand text-[9px] site-xl:text-[10px] font-medium', className)} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonBrand
