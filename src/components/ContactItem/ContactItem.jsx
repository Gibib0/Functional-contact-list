import './ContactItem.css'

const ContactItem = ({ contact, onSelect, onDelete }) => {
  const { firstName, lastName, id } = contact

  const handleSelect = () => {
    onSelect(contact)
  }

  const handleDeleteClick = (e) => {
    e.stopPropagation()
    onDelete(id)
  }

  return (
    <div className="contact-item" onDoubleClick={handleSelect}>
      <span className="contact-name">{firstName} {lastName}</span>
      <button className="contact-delete-btn" onClick={handleDeleteClick}>
        x
      </button>
    </div>
  )
}

export default ContactItem