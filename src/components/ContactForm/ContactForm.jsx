import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ContactForm.css'
import {
  createContact,
  updateContact,
  deleteContact,
  newContact,
} from '../../store/slices/contactsSlice'

const ContactForm = () => {
  const dispatch = useDispatch()
  const contact = useSelector(state => state.contacts.currentContact)
  const isEditing = useSelector(state => state.contacts.isEditing)

  const [form, setForm] = useState({ ...contact })

  useEffect(() => {
    setForm({...contact})
  }, [contact])

  const onInputChange = (e) => {
    const {name, value} = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onFormSubmit = (e) => {
    e.preventDefault()

    if (isEditing) {
      dispatch(updateContact(form))
    } else {
      dispatch(createContact(form))
    }
  }

  const handleClearField = (field) => {
    setForm(prev => ({
      ...prev,
      [field]: ''
    }))
  }

  const handleNew = () => {
    dispatch(newContact())
  }

  const handleDeleteClick = () => {
    dispatch(deleteContact(form.id))
  }

  return (
    <form className="contact-form" onSubmit={onFormSubmit}>
      <div className="form-container">
        <div className="input-container">
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={onInputChange}
            placeholder="First Name"
            className="form-input"
          />
          {form.firstName && (
            <button
              type="button"
              className="clear-field-btn"
              onClick={() => handleClearField('firstName')}
            >
              x
            </button>
          )}
        </div>
      </div>

      <div className="form-container">
        <div className="input-container">
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={onInputChange}
            placeholder="Last Name"
            className="form-input"
          />
          {form.lastName && (
            <button
              type="button"
              className="clear-field-btn"
              onClick={() => handleClearField('lastName')}
            >
              x
            </button>
          )}
        </div>
      </div>

      <div className="form-container">
        <div className="input-container">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onInputChange}
            placeholder="Email"
            className="form-input"
          />
          {form.email && (
            <button
              type="button"
              className="clear-field-btn"
              onClick={() => handleClearField('email')}
            >
              x
            </button>
          )}
        </div>
      </div>

      <div className="form-container">
        <div className="input-container">
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={onInputChange}
            placeholder="Phone"
            className="form-input"
          />
          {form.phone && (
            <button
              type="button"
              className="clear-field-btn"
              onClick={() => handleClearField('phone')}
            >
              x
            </button>
          )}
        </div>
      </div>

      <div className="form-buttons">
        <button 
          type="button" 
          className="btn btn-new" 
          onClick={handleNew}
        >
          New
        </button>

        <button type="submit" className="btn btn-save">
          Save
        </button>

        {isEditing && (
          <button 
            type="button" 
            className="btn btn-delete" 
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        )}
      </div>
    </form>
  )
}

export default ContactForm