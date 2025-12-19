import { Component } from 'react'
import { nanoid } from 'nanoid'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import './App.css'

class App extends Component {
  createEmptyContact = () => ({
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

  state = {
    contacts: [],
    currentContact: this.createEmptyContact(),
    isEditing: false
  }

  componentDidMount() {
    const saved = JSON.parse(localStorage.getItem('contacts'))
    if (saved) this.setState({contacts: saved})
  }

  saveToLocalStorage = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }

  handleSelectContact = (contact) => {
    this.setState({
      currentContact: contact,
      isEditing: true
    })
  }

  handleNewContact = () => {
    this.setState({
      currentContact: this.createEmptyContact(),
      isEditing: false
    })
  }

  handleSaveContact = (contact) => {
    const {contacts, isEditing} = this.state
    let updatedContacts

    if (isEditing) {
      updatedContacts = contacts.map(c => (c.id === contact.id ? contact : c))
      this.setState({
        contacts: updatedContacts,
        currentContact: contact,
        isEditing: true
      })
    } else {
      const newContact = {
        ...contact,
        id: nanoid()
      }
      updatedContacts = [...contacts, newContact]
      this.setState({
        contacts: updatedContacts,
        currentContact: this.createEmptyContact(),
        isEditing: false
      })
    }

    this.saveToLocalStorage(updatedContacts)
  }

  handleDeleteContact = (id) => {
    const {contacts} = this.state
    const updatedContacts = contacts.filter(contact => contact.id !== id)

    this.setState({
      contacts: updatedContacts,
      currentContact: this.createEmptyContact(),
      isEditing: false
    })

    this.saveToLocalStorage(updatedContacts)
  }

  render() {
    const {contacts, currentContact, isEditing} = this.state

    return (
      <div className='app-container'>
        <header className='header'>
          <h1>Contact list</h1>
        </header>

        <main className='main'>
          <div className='main-container'>
            <ContactList 
              contacts={contacts}
              onSelect={this.handleSelectContact}
              onDelete={this.handleDeleteContact}
            />

            <div className='form'>
              <ContactForm
                contact={currentContact}
                isEditing={isEditing}
                onSave={this.handleSaveContact}
                onNew={this.handleNewContact}
                onDelete={this.handleDeleteContact}
              />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App