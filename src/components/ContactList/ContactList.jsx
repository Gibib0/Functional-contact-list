import ContactItem from '../ContactItem/ContactItem'
import './ContactList.css'

const ContactList = ({ contacts = [], onSelect, onDelete }) => {
	return (
    <div className='contact-list'>
      <div className='contact-list-content'>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
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