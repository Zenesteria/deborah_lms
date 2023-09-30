import React from 'react'
import Btn from './Btn'

interface compProps{

}

export default function ShelfNav({}:compProps) {
  return (
    <div className='w-full flex items-center my-4 py-2'>
        <Btn text='All Books' cat='All Books'/>
        <Btn text='Favorite' cat='Favorite'/>
        <Btn text='Borrowed Books' cat='Borrowed Books'/>
        <Btn text='E-Books' cat='E-Books'/>
        <Btn text='Audio Books' cat='Audio Books'/>
        <Btn text='Articles & Journals' cat='Articles and Journals'/>
    </div>
  )
}
