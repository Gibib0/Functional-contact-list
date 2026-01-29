import * as ACTION_TYPES from '../actionTypes.js'

// FETCH
export const fetchContacts = () => ({
	type: ACTION_TYPES.FETCH_CONTACTS,
})

export const fetchContactsRequest = () => ({
	type: ACTION_TYPES.FETCH_CONTACTS_REQUEST,
})

export const fetchContactsSuccess = (contacts) => ({
	type: ACTION_TYPES.FETCH_CONTACTS_SUCCESS,
	payload: contacts,
})

export const fetchContactsError = (error) => ({
	type: ACTION_TYPES.FETCH_CONTACTS_ERROR,
	payload: error,
})

// CREATE
export const createContact = (contact) => ({
	type: ACTION_TYPES.CREATE_CONTACT,
	payload: contact,
})

export const createContactRequest = (contact) => ({
	type: ACTION_TYPES.CREATE_CONTACTS_REQUEST,
	payload: contact,
})

export const createContactSuccess = (contact) => ({
	type: ACTION_TYPES.CREATE_CONTACTS_SUCCESS,
	payload: contact,
})

export const createContactError = (error) => ({
	type: ACTION_TYPES.CREATE_CONTACTS_ERROR,
	payload: error,
})

// UPDATE
export const updateContact = (contact) => ({
	type: ACTION_TYPES.UPDATE_CONTACT,
	payload: contact,
})

export const updateContactRequest = (contact) => ({
	type: ACTION_TYPES.UPDATE_CONTACTS_REQUEST,
	payload: contact,
})

export const updateContactSuccess = (contact) => ({
	type: ACTION_TYPES.UPDATE_CONTACTS_SUCCESS,
	payload: contact,
})

export const updateContactError = (error) => ({
	type: ACTION_TYPES.UPDATE_CONTACTS_ERROR,
	payload: error,
})

//DELETE
export const deleteContact = (id) => ({
	type: ACTION_TYPES.DELETE_CONTACT,
	payload: id,
})

export const deleteContactRequest = (id) => ({
	type: ACTION_TYPES.DELETE_CONTACTS_REQUEST,
	payload: id,
})

export const deleteContactSuccess = (id) => ({
	type: ACTION_TYPES.DELETE_CONTACTS_SUCCESS,
	payload: id,
})

export const deleteContactError = (error) => ({
	type: ACTION_TYPES.DELETE_CONTACTS_ERROR,
	payload: error,
})


export const selectContact = (contact) => ({
	type: ACTION_TYPES.SELECT_CONTACT,
	payload: contact,
})

export const newContact = () => ({
	type: ACTION_TYPES.NEW_CONTACT,
})