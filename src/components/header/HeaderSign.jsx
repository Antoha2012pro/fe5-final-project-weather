import React from 'react'
import { cn } from '../../utils/cn'
import HeaderAvatar from './HeaderAvatar'
import HeaderSignUpButton from './HeaderSignUpButton'

const HeaderSign = ({className = '', isMenu = false}) => {
  return (
    <div className={cn('items-center', isMenu ? 'flex flex-col gap-3.75' : 'md:flex hidden flex-row gap-6.25 site-xl:gap-7.25')}>
       <HeaderAvatar />
       <HeaderSignUpButton />
    </div>
  )
}

export default HeaderSign
