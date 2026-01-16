import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ContactItem from '../ContactItem/ContactItem'
import './ContactList.css'
import { fetchContactsRequest } from '../../store/actions/contactActions'

const ContactList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.list)

  useEffect(() => {
    dispatch(fetchContactsRequest())
  }, [dispatch])

  return (
    <div className='contact-list'>
      <div className='contact-list-content'>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  )
}

export default ContactList