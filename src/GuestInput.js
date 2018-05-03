import React from 'react'

const GuestInput = (props) => 
  <form>
    <input
      type="text"
      value={props.enterValue}
      onChange={props.whenChange}
      placeholder="Invite Someone"
    />
    <button type="submit" name="submit" value="submit" onClick={props.whenClick} >Submit</button>
  </form>


export default GuestInput