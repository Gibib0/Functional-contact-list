import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/contact-service'
import { initialContact } from '../../model/initialContact'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/')
      return data || []
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await api.post('/', contact)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { id } = contact
      const { data } = await api.put(`/${id}`, contact)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/${id}`)
      return id
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  list: [],
  currentContact: { ...initialContact },
  isEditing: false,
  error: null,
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    selectContact: (state, action) => {
      state.currentContact = action.payload
      state.isEditing = true
    },
    newContact: (state) => {
      state.currentContact = { ...initialContact }
      state.isEditing = false
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    // Fetch
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = null
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.list = action.payload
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload
      })

    // Create
    builder
      .addCase(createContact.pending, (state) => {
        state.error = null
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.list.push(action.payload)
        state.currentContact = { ...initialContact }
        state.isEditing = false
      })
      .addCase(createContact.rejected, (state, action) => {
        state.error = action.payload
      })

    // Update
    builder
      .addCase(updateContact.pending, (state) => {
        state.error = null
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.list.findIndex((contact) => contact.id === action.payload.id)
        if (index !== -1) {
          state.list[index] = action.payload
        }
        state.currentContact = action.payload
        state.isEditing = true
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.error = action.payload
      })

    // Delete
    builder
      .addCase(deleteContact.pending, (state) => {
        state.error = null
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.list = state.list.filter((contact) => contact.id !== action.payload)
        state.currentContact = { ...initialContact }
        state.isEditing = false
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload
      })
  },
})

export const { selectContact, newContact, clearError } = contactsSlice.actions
export default contactsSlice.reducer
