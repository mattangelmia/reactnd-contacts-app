import React, {Component} from 'react'
import PropTypes from 'prop-types'




class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired 
    }

state = {
    query: ""
}

updateQuery = (query) => {
   
this.setState(()=>({
    query: query.trim()
}))
console.log(this.state.query)

}

  render() {
    // const {query } = this.state
    // const {contacts,} = this.props
// const showingContacts = if(query === ''){
//     showingContacts = contacts
// }




const showingContacts = this.state.query === ''
? this.props.contacts
: this.props.contacts.filter((c)=>(
    c.name.toLowerCase().includes(this.state.query.toLowerCase())
))


    return <div className='list-contacts'>
        <div className='list-contacts-top'>
            <input className='search-contacts' type="text" placeholder="Search Contacts" value={this.state.query} onChange={(event)=>this.updateQuery(event.target.value)}/>
   
        </div>
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