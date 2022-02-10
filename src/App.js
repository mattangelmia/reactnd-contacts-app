import React, { Component, useState } from 'react';
import ListContacts from './ListContacts';
import Activity from './Activity'
import AddTasks from './AddTasks';
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'; 
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI';


class App extends Component {



state = {


contacts: [

],




query: ""


}


getBooks= ()=>{
  fetch(`https://www.googleapis.com/books/v1/volumes?q=coding&startIndex=0&maxResults=5&key=AIzaSyCAeLhuL-3SApWpwdugiXCOO93F3utnx2w`)
  .then(response => response.json())
  .then(result => {
console.log(result)
})
}


// bookArray = {
//   "kind": "books#volume",
//   "id": "qbygDgAAQBAJ",
//   "etag": "vMfbsa8osog",
//   "selfLink": "https://www.googleapis.com/books/v1/volumes/qbygDgAAQBAJ",
//   "volumeInfo": {
//       "title": "My First Coding Book",
//       "subtitle": "Packed with Flaps and Lots More to Help you Code without a Computer!",
//       "authors": [
//           "Kiki Prottsman"
//       ],
//       "publisher": "Penguin",
//       "publishedDate": "2017-07-04",
//       "description": "Teach kids as young as 5 years old the basic programming skills necessary to code, including sequencing and loops, without a computer. It's never too early to learn computer coding. My First Coding Book is a playful introduction to offline coding and programming that will give young children a head start. Filled with puzzles, mazes, and games to teach the basic concepts of sequences, algorithms, and debugging, this book will help children develop critical thinking, logic, and other skills to cement lifelong computer literacy, which is extremely valuable and sought-after in today's world. With its unique approach and colorful and creative imagery, My First Coding Book makes learning and fun one and the same and will have children playing their way to programming proficiency. Supporting STEM education initiatives, computer coding teaches kids how to think creatively, work collaboratively, and reason systematically, and is quickly becoming a necessary and sought-after skill. DK's computer coding books are full of fun exercises with step-by-step guidance, making them the perfect introductory tools for building vital skills in computer programming.",
//       "industryIdentifiers": [
//           {
//               "type": "ISBN_13",
//               "identifier": "9781465469731"
//           },
//           {
//               "type": "ISBN_10",
//               "identifier": "1465469737"
//           }
//       ],
//       "readingModes": {
//           "text": false,
//           "image": true
//       },
//       "pageCount": 24,
//       "printType": "BOOK",
//       "categories": [
//           "Juvenile Nonfiction"
//       ],
//       "averageRating": 1,
//       "ratingsCount": 1,
//       "maturityRating": "NOT_MATURE",
//       "allowAnonLogging": true,
//       "contentVersion": "1.1.1.0.preview.1",
//       "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//       },
//       "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=qbygDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=qbygDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//       },
//       "language": "en",
//       "previewLink": "http://books.google.com/books?id=qbygDgAAQBAJ&printsec=frontcover&dq=coding&hl=&cd=1&source=gbs_api",
//       "infoLink": "https://play.google.com/store/books/details?id=qbygDgAAQBAJ&source=gbs_api",
//       "canonicalVolumeLink": "https://play.google.com/store/books/details?id=qbygDgAAQBAJ"
//   },
//   "saleInfo": {
//       "country": "US",
//       "saleability": "FOR_SALE",
//       "isEbook": true,
//       "listPrice": {
//           "amount": 9.99,
//           "currencyCode": "USD"
//       },
//       "retailPrice": {
//           "amount": 9.99,
//           "currencyCode": "USD"
//       },
//       "buyLink": "https://play.google.com/store/books/details?id=qbygDgAAQBAJ&rdid=book-qbygDgAAQBAJ&rdot=1&source=gbs_api",
//       "offers": [
//           {
//               "finskyOfferType": 1,
//               "listPrice": {
//                   "amountInMicros": 9990000,
//                   "currencyCode": "USD"
//               },
//               "retailPrice": {
//                   "amountInMicros": 9990000,
//                   "currencyCode": "USD"
//               },
//               "giftable": true
//           }
//       ]
//   },
//   "accessInfo": {
//       "country": "US",
//       "viewability": "PARTIAL",
//       "embeddable": true,
//       "publicDomain": false,
//       "textToSpeechPermission": "ALLOWED",
//       "epub": {
//           "isAvailable": false
//       },
//       "pdf": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/My_First_Coding_Book-sample-pdf.acsm?id=qbygDgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//       },
//       "webReaderLink": "http://play.google.com/books/reader?id=qbygDgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
//       "accessViewStatus": "SAMPLE",
//       "quoteSharingAllowed": false
//   },
//   "searchInfo": {
//       "textSnippet": "Filled with puzzles, mazes, and games to teach the basic concepts of sequences, algorithms, and debugging, this book will help children develop critical thinking, logic, and other skills to cement lifelong computer literacy, which is ..."
//   }
// }



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
ContactsAPI.remove(contact)
}


CreateContact = (contact) =>{
  ContactsAPI.create(contact)
  .then((contact) => {
       this.setState((currentState)=>({
         contacts: currentState.contacts.concat([contact])
       }))
  })
}

  render() {
    return (
      <div>
       

<Route exact path='/' render={()=>(
  <div>
  <ListContacts contacts={this.state.contacts}
 onDeleteContact={this.removeContact} 
 
 />  

<button onClick={this.getBooks}>Click</button>
 </div>
 
)}/>
<Route path='/create' render={({history})=>(
  <CreateContact onCreateContact={(contact)=>{
    this.CreateContact(contact)
    history.push('/')
  }}/>
)}/>        
   
   
       {/* <AddTasks addTask={this.addTask}  updateQuery={this.updateQuery}/>
       <Activity activities={this.state.activities} deleteActivity={this.deleteActivity} /> */}
      </div>
    )
  }
}

export default App;
