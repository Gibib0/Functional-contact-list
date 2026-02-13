import {Formik, Form, useField} from 'formik'
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
  
  const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
      <TextField
        {...field}
        label={label}
        fullWidth
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    )
  }

  return (
    <Paper elevation={3} sx={{p: 3}}>
      <Formik
        initialValues={contact}
        enableReinitialize
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, resetForm, values }) => (
          <Form>
            <Stack spacing={2}>
              <FormikTextField name="firstName" label="First Name" />
              <FormikTextField name="lastName" label="Last Name" />
              <FormikTextField name="email" label="Email" />
              <FormikTextField name="phone" label="Phone" />

              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  onClick={() => {
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
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => dispatch(deleteContact(values.id))}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                )}
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
    </Paper>
  )
}

export default ContactForm