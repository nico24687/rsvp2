import React, { Component } from 'react';
import Counter from './Counter'
import GuestList from './GuestList'
import Header from './Header'
import MainContent from './MainContent'
import './App.css';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: "Treasure",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Nick",
        isConfirmed: true,
        isEditing: false
      },
      {
        name: "Matt K",
        isConfirmed: true,
        isEditing: true
      }
    ]
  }


  toggleGuestPropertyAt = (property, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange){
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest
      })
    })
  }

  setNameAt = (name, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          }
        }
        return guest
      })
    })
  }

  toggleConfirmationAt = (index) => {
    this.toggleGuestPropertyAt("isConfirmed", index)
  }

  removeGuestAt = (index) => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0,index),
        ...this.state.guests.slice(index + 1)
      ]
    })
  }

  toggleEditingAt = (index) => {
    this.toggleGuestPropertyAt("isEditing", index)
  }

  toggleFilter = () =>{
    this.setState({
      isFiltered: !this.state.isFiltered
    })
  }

  handleNameInput = (event) => {
    this.setState({
      pendingGuest: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ""
    })
  }


  getTotalInvited = () => {
    this.state.guests.length
  }

  getAttendingGuests = () => {
    this.state.guests.reduce((total, guest)=> {
      guest.isConfirmed? total + 1 : total 
    },0)
  }
  

  render() {
    // const totalInvited = this.getTotalInvited()
    // const numberAttending = this.getAttendingGuests()
    // const numberUnconfirmed = totalInvited - numberAttending
    return (
      <div className="App">
        <Header 
          inputValue={this.state.pendingGuest} 
          handleChange={this.handleNameInput} 
          handleClick={this.handleSubmit}
        />

        <MainContent 
          whenChange={this.toggleFilter}
          isChecked={this.state.isFiltered}
          countInvited={this.state.guests.length}
          countUnconfirmed={this.state.guests.length}
          countAttending={this.state.guests.length}
          allGuests={this.state.guests}
          switchConfirmationAt={this.toggleConfirmationAt}
          switchEditingAt={this.toggleEditingAt}
          alterNameAt={this.setNameAt}
          filterdState={this.state.isFiltered}
          deleteGuestAt={this.removeGuestAt}
          pendingState={this.state.pendingGuest}
        />

    </div>
    );
  }
}

export default App;
