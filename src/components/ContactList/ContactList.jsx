import ContactItem from '../ContactItem/ContactItem'
import './ContactList.css'

const ContactList = ({ contacts = [], onSelect, onDelete }) => {
	return (
    <div className='contact-list'>
      <div className='contact-list-content'>
        {contacts.map((contact, index) => (
          <ContactItem
            key={contact.id || `fallback-${index}`}
            contact={contact}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  )
}

ContactList.defaultProps = {
  contacts: []
}

export default ContactList