import React, { Component, useState } from 'react';
import ListContacts from './ListContacts';
import Activity from './Activity'
import AddTasks from './AddTasks';

 

class App extends Component {



state = {


contacts: [
  {
    "id": "karen",
    "name": "Karen Isgrigg",
    "handle": "karen_isgrigg",
    "avatarURL": "http://localhost:5001/karen.jpg"
  },
  {
    "id": "richard",
    "name": "Richard Kalehoff",
    "handle": "richardkalehoff",
    "avatarURL": "http://localhost:5001/richard.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "handle": "tylermcginnis",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
 ],

 activities :  [
  {
    id: 1,
    activity: "pool"
  },

  {
    id: 2,
    activity: "games"
  },

  {
    id: 3,
    activity: "sports"
  }
],
query: ""


}


updateQuery = (e)=>{
 
let string = e.target.value
console.log(string)
this.setState({query: string})
console.log(this.state.query)
}



addTask = ()=>{
console.log(this.state.query)

this.state.activities.push({
  
  id: this.state.activities[this.state.activities.length-1].id+1,
  activity: this.state.query
})
this.setState({activities: this.state.activities})

}
 
deleteActivity = (activity)=>{


  this.setState((currentState)=>({
    activities: currentState.activities.filter((act)=>{
      console.log(act)
      return act.id !== activity.id
    })
  }))
}



removeContact = (contact) =>{
  console.log(contact)
this.setState((currentState) => ({
    contacts: currentState.contacts.filter((c)=>{
      return c.id !== contact.id
    })
}))
}

  render() {
    return (
      <div>
       <ListContacts contacts={this.state.contacts}
       onDeleteContact={this.removeContact}
       />
       {/* <AddTasks addTask={this.addTask}  updateQuery={this.updateQuery}/>
       <Activity activities={this.state.activities} deleteActivity={this.deleteActivity} /> */}
      </div>
    )
  }
}

export default App;
