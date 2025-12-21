import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import './App.css'

const App = () => {
  const createEmptyContact = () => ({
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  const [contacts, setContacts] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('contacts'))
    return saved || []
  })
  const [currentContact, setCurrentContact] = useState(createEmptyContact())
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const handleSelectContact = (contact) => {
    setCurrentContact(contact)
    setIsEditing(true)
  }

  const handleNewContact = () => {
    setCurrentContact(createEmptyContact())
    setIsEditing(false)
  }

  const handleSaveContact = (item) => {
    if (isEditing) {
      const updatedContacts = contacts.map(c => 
        c.id === item.id ? item : c
      )
      setContacts(updatedContacts)
      setCurrentContact(item)
    } else {
      const newContact = {
        ...item,
        id: nanoid()
      }
      const updatedContacts = [...contacts, newContact]
      setContacts(updatedContacts)
      setCurrentContact(createEmptyContact())
      setIsEditing(false)
    }
  }

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id)
    setContacts(updatedContacts)
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