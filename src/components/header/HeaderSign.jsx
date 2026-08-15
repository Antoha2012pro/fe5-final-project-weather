import React from 'react'
import { cn } from '../../utils/cn'
import HeaderAvatar from './HeaderAvatar'
import HeaderSignUpButton from './HeaderSignUpButton'

const HeaderSign = ({className = ''}) => {
  return (
    <div className={cn('items-center flex flex-col site-md:flex-row gap-3.75 site-md:gap-6.25 site-xl:gap-7.25', className)}>
       <HeaderAvatar />
       <HeaderSignUpButton />
    </div>
  )
}

export default HeaderSign
