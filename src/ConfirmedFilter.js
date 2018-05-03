import React from 'react'

const ConfirmedFilter = (props) => 
  <label>
    <input
      type="checkbox"
      onChange={props.withChange}
      checked={props.testChecked}
    /> Hide those who haven't responded
  </label>


export default ConfirmedFilter