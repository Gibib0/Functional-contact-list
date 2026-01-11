import './ContactItem.css'
import { useDispatch } from 'react-redux'
import { selectContact, deleteContact as deleteContactAction } from '../../store/actions/contactActions'
import { deleteContact as deleteContactApi } from '../../api/contact-service'

const ContactItem = ({ contact }) => {
  const { firstName, lastName, id } = contact
  const dispatch = useDispatch()

  const handleDeleteClick = async (e) => {
    e.stopPropagation()
    await deleteContactApi(id)
    dispatch(deleteContactAction(id))
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