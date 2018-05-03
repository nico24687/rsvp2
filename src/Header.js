import React from 'react'
import GuestInput from './GuestInput'

const Header = (props) => 
  <header>
    <h1>RSVP</h1>
    <p>A Treehouse App</p>
    <GuestInput 
      enterValue={props.inputValue}
      whenChange={props.handleChange}
      whenClick={props.handleClick}
      />
  </header>




export default Header