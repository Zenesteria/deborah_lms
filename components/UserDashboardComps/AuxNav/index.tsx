import React from 'react'
import UserSearch from './UserSearch'
import Language from './Language'
import DateDisplay from './DateDisplay'
import UserProfile from './UserProfile'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import getFormattedDate from '@/util/getDate'

interface compProps{

}

export default function index({}:compProps) {
  const date = getFormattedDate()
  const user = useSelector((state:RootState) => (state.dashboardSlice))
  return (
    <div className='w-full h-[10vh] flex items-center py-4'>
      <UserSearch/>
      <Language/>
      <DateDisplay
        date={date}
      />
      <UserProfile
        name={user.fullName}
        pfp={user.pfp}
      />
    </div>
  )
}
