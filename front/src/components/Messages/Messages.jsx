import React from 'react'
import "./Messages.css"

export const Messages = ({text = "hola"}) => {
  return (
    <li className='message'>{text}</li>
  )
}
