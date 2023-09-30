import React from 'react'
import {UserSideNav, UserAuxNav} from '@/components'

interface compProps{
    children:React.ReactNode
}

export default function UserDashboard({children}:compProps) {
  return (
    <div className='text-black bg-white'>
      <div className="flex">
        <UserSideNav />

        <div className="flex-1">
          <UserAuxNav />
          <div className="overflow-auto h-[90vh]">{children}</div>
        </div>
      </div>
    </div>
  );
}
