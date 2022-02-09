import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'



class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired 
    }


state = {
    query: ""
}


clearQuery = () => {
this.updateQuery('')
}

updateQuery = (query) => {
   
this.setState(()=>({
    query: query.trim()
}))
console.log(this.state.query)

}

  render() {
const showingContacts = this.state.query === ''
? this.props.contacts
: this.props.contacts.filter((c)=>(
    c.name.toLowerCase().includes(this.state.query.toLowerCase())
))


    return <div className='list-contacts'>
        <div className='list-contacts-top'>
            <input className='search-contacts' type="text" placeholder="Search Contacts" value={this.state.query} onChange={(event)=>this.updateQuery(event.target.value)}/>
            <Link to="/create" className='add-contact'>Add Contact</Link>
        </div>



    {showingContacts.length !== this.props.contacts.length && (
        <div className='showing-contacts'>
                        <span>Now showing {showingContacts.length}out of {this.props.contacts.length} contacts</span>
                        <button onClick={this.clearQuery}>Show all</button>
        </div>
    )}



<ol className='contact-list'>

        {showingContacts.map((contact)=>(
            <li key={contact.id} className='contact-list-item'>
               <div className='contact-avatar' style={{
                   backgroundImage:`url(${contact.avatarURL})`
               }}>
               
               </div>
               <div className='contact-details'>
               
                    <p>{contact.name}</p>
                    <p>@ {contact.handle}</p>
               </div>
               <button onClick={()=>this.props.onDeleteContact(contact)} className='contact-remove'>x</button>
            </li>
        ))}
     </ol>

    </div>;
  }
}




// function ListContacts(props){
//     return(
//         <ol className='contact-list'>
//         {props.contacts.map((contact)=>(
//             <li key={contact.id} className='contact-list-item'>
//                <div className='contact-avatar' style={{
//                    backgroundImage:`url(${contact.avatarURL})`
//                }}>
               
//                </div>
//                <div className='contact-details'>
               
//                     <p>{contact.name}</p>
//                     <p>@ {contact.handle}</p>
//                </div>
//                <button onClick={()=>props.onDeleteContact(contact)} className='contact-remove'>x</button>
//             </li>
//         ))}
//      </ol>
//     )
// }





export default ListContacts