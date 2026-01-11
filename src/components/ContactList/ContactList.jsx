import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ContactItem from '../ContactItem/ContactItem'
import './ContactList.css'
import { getAllContacts } from '../../api/contact-service'
import { setContacts } from '../../store/actions/contactActions'

const ContactList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.list)

  useEffect(() => {
    const load = async () => {
      const { data } = await getAllContacts()
      dispatch(setContacts(data || []))
    }
    load()
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