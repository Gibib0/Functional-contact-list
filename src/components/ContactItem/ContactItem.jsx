import './ContactItem.css'
import { useDispatch } from 'react-redux'
import {
  selectContact,
  deleteContactRequest,
} from '../../store/actions/contactActions'

const ContactItem = ({ contact }) => {
  const { firstName, lastName, id } = contact
  const dispatch = useDispatch()

  const handleDeleteClick = async (e) => {
    e.stopPropagation()
    dispatch(deleteContactRequest(id))
  }

  return (
    <div className="contact-item" onDoubleClick={() => dispatch(selectContact(contact))}>
      <span className="contact-name">{firstName} {lastName}</span>
      <button className="contact-delete-btn" onClick={handleDeleteClick}>
        x
      </button>
    </div>
  )
}

export default ContactItem