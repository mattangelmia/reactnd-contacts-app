import React, { Component, useState } from 'react';
import ListContacts from './ListContacts';
import Activity from './Activity'
import AddTasks from './AddTasks';
import * as ContactsAPI from './utils/ContactsAPI'
 

class App extends Component {



state = {


contacts: [

],
query: ""


}

componentDidMount(){
   ContactsAPI.getAll().then((contacts)=>{
     this.setState(()=>({
       contacts
     }))
   })
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
