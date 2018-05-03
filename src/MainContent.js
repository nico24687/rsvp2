import React from 'react'
import Counter from './Counter'
import GuestList from './GuestList'
import ConfirmedFilter from './ConfirmedFilter'

const MainContent = (props) => 
  <div className="main">
    <div>
      <h2>Invitees</h2>
      <ConfirmedFilter 
        withChange={props.whenChange}
        testChecked={props.isChecked}
      />
    </div>

    <Counter
      totalInvited={props.countInvited}
      numberUnconfirmed={props.countUnconfirmed}
      numberAttending={props.countAttending}
    />

    <GuestList
      guests={props.allGuests}
      toggleConfirmationAt={props.switchConfirmationAt}
      toggleEditingAt={props.switchEditingAt}
      setNameAt={props.alterNameAt}
      isFiltered={props.filteredState}
      removeGuestAt={props.deleteGuestAt}
      pendingGuest={props.pendingState}
    />
  </div>


export default MainContent