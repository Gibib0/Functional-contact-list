// import { useState, useEffect } from 'react'
import {Formik} from 'formik'
import {TextField, Button, Stack, Paper} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { useSelector, useDispatch } from 'react-redux'
import {
  createContact,
  updateContact,
  deleteContact,
  newContact,
} from '../../store/slices/contactsSlice'
import { contactSchema } from '../../validation/contactSchema'
import './ContactForm.css'

const ContactForm = () => {
  const dispatch = useDispatch()
  const contact = useSelector(state => state.contacts.currentContact)
  const isEditing = useSelector(state => state.contacts.isEditing)

  const handleSubmit = (values) => {
    if (isEditing) {
      dispatch(updateContact(values))
    } else {
      dispatch(createContact(values))
    }
  }

  return (
    <Paper elevation={3} sx={{p: 3}}>
      <Formik
        initialValues={contact}
        enableReinitialize
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                name='firstName'
                label='First Name'
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                fullWidth
              />

              <TextField
                name="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                fullWidth
              />

              <TextField
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                fullWidth
              />

              <TextField
                name="phone"
                label="Phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
                fullWidth
              />

              <Stack direction='row' spacing={2}>
                <Button variant='outlined' onClick={() => {
                    dispatch(newContact())
                    resetForm()
                  }}
                  startIcon={<AddIcon />}
                >
                  New
                </Button>

                <Button type='submit' variant='contained' disabled={!isValid} startIcon={<SaveIcon />}>
                  Save
                </Button>

                {isEditing && (
                  <Button variant='contained' color='error' onClick={() => dispatch(deleteContact(values.id))} startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                )}
              </Stack>
            </Stack>
          </form>
        )}
      </Formik>
    </Paper>
  )
}

export default ContactForm