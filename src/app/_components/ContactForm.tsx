import React from 'react'
import TextInput from './TextInput'
import '@/styles/form.scss'

function ContactForm() {
  return (
    <div className="form-container">
        <h2>Send us a message</h2>
            <TextInput label="Full Name" type="text" />
           <TextInput label="E-mail" type="email" />
           <TextInput label="Phone" placeholder="+63" type="number" />
           <TextInput label="Message" placeholder="Type your message here" type="text" />
    </div>
  )
}

export default ContactForm
