import { useState, useEffect } from 'react'
// import { nanoid } from 'nanoid'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import './App.css'
import {getAllContacts, createContact, updateContact, deleteContact} from './api/contact-service'

const App = () => {
  const createEmptyContact = () => ({
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const [contacts, setContacts] = useState([])
  const [currentContact, setCurrentContact] = useState(createEmptyContact())
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    getAllContacts().then(({data}) => {
      if (!data) {
        setContacts([])
      } else {
        setContacts(data)
      }
    })
  }, [])

  const handleSelectContact = (contact) => {
    setCurrentContact(contact)
    setIsEditing(true)
  }

  const handleNewContact = () => {
    setCurrentContact(createEmptyContact())
    setIsEditing(false)
  }

  const handleSaveContact = async (contact) => {
    if (isEditing && contact.id) {
      const {data} = await updateContact(contact.id, contact)
      setContacts((prev) => prev.map((item) => (item.id === contact.id ? data : item)))
      setCurrentContact(data)
    } else {
      const contactToSave = {
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
      }
      const {data} = await createContact(contactToSave)
      setContacts((prev) => [...prev, data])
      setCurrentContact(createEmptyContact())
      setIsEditing(false)
    }
  }

  const handleDeleteContact = async (id) => {
    await deleteContact(id)
    setContacts((prev) => prev.filter((contact) => contact.id !== id))
    setCurrentContact(createEmptyContact())
    setIsEditing(false)
  }

  return (
    <div className='app-container'>
      <header className='header'>
        <h1>Contact list</h1>
      </header>

      <main className='main'>
        <div className='main-container'>
          <ContactList 
            contacts={contacts}
            onSelect={handleSelectContact}
            onDelete={handleDeleteContact}
          />

          <div className='form'>
            <ContactForm
              contact={currentContact}
              isEditing={isEditing}
              onSave={handleSaveContact}
              onNew={handleNewContact}
              onDelete={handleDeleteContact}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App