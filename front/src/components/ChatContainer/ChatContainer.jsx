import React from 'react'
import './ChatContainer.css'

export const ChatContainer = ({children}) => {
  return (
    <div className='container'>
        <h1>ANONYMOUS CHAT</h1>
    {children}
    </div>
  )
}
