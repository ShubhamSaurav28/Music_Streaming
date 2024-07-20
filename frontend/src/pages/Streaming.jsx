import React from 'react'
import Stream from '../components/Stream'
import Chat from '../components/Chat'

export default function Streaming() {
  return (
    <>
    <div className='flex border border-black justify-between'>
        <Stream/>
        <Chat/>
    </div>
      
    </>
  )
}
