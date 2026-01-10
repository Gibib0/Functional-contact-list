import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import {
  fetchContacts,
  selectContact,
  newContact,
  saveContact,
  removeContact
} from './store/actions/contactActions'
import './App.css'

const App = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.list)
  const currentContact = useSelector(state => state.currentContact)
  const isEditing = useSelector(state => state.isEditing)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className='app-container'>
      <header className='header'>
        <h1>Contact list</h1>
      </header>

      <main className='main'>
        <div className='main-container'>
          <ContactList 
            contacts={contacts}
            onSelect={(contact) => dispatch(selectContact(contact))}
            onDelete={(id) => dispatch(removeContact(id))}
          />

          <div className='form'>
            <ContactForm
              contact={currentContact}
              isEditing={isEditing}
              onSave={(contact) => dispatch(saveContact(contact, isEditing))}
              onNew={() => dispatch(newContact())}
              onDelete={(id) => dispatch(removeContact(id))}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App