import React from 'react'
import UserSearch from './UserSearch'
import Language from './Language'
import DateDisplay from './DateDisplay'
import UserProfile from './UserProfile'

interface compProps{

}

export default function index({}:compProps) {
  return (
    <div className='w-full h-[10vh] flex items-center py-4'>
      <UserSearch/>
      <Language/>
      <DateDisplay/>
      <UserProfile/>
    </div>
  )
}
