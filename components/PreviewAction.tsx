import React from 'react'

interface compProps{

}

export default function PreviewAction({}:compProps) {
  return (
    <div className='cursor-pointer text-center max-w-[100px] mx-auto rounded-lg text-red-500 w-full px-3 py-2 border-2 border-red-500'>
        <h1>
            Preview
        </h1>
    </div>
  )
}
