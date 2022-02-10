import React from 'react'
import{Link} from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

export default function CreateContact(props) {
const handleSubmit = (e) =>{
e.preventDefault()
const values = serializeForm(e.target, {hash: true}) 
console.log(values)

if(props.onCreateContact){
  props.onCreateContact(values)
}


}
  
  return (
    <div>CreateContact

<Link className='close-create-contact' to='/'>Close</Link>
<form onSubmit={handleSubmit} className='create-contact-form'>
<ImageInput className='create-contact-avatar-input' name='avatarURL' maxHeight={24}/>
<div className='create-contact-details'>
            <input type='text' name='name' placeholder='Name' />
            <input type='text' name='handle' placeholder='Handle' />
            <button>Add Contact</button>
          </div>
</form>



    </div>
  )
}

