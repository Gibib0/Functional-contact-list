import * as ACTION_TYPES from '../actionTypes.js'

export const fetchContactsRequest = () => ({
	type: ACTION_TYPES.FETCH_CONTACTS_REQUEST,
})

export const fetchContactsSuccess = (contacts) => ({
	type: ACTION_TYPES.FETCH_CONTACTS_SUCCESS,
	payload: contacts,
})

export const createContactRequest = (contact) => ({
	type: ACTION_TYPES.CREATE_CONTACTS_REQUEST,
	payload: contact,
})

export const createContactSuccess = (contact) => ({
	type: ACTION_TYPES.CREATE_CONTACTS_SUCCESS,
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

export const deleteContactRequest = (id) => ({
	type: ACTION_TYPES.DELETE_CONTACTS_REQUEST,
	payload: id,
})

export const deleteContactSuccess = (id) => ({
	type: ACTION_TYPES.DELETE_CONTACTS_SUCCESS,
	payload: id,
})

export const selectContact = (contact) => ({
	type: ACTION_TYPES.SELECT_CONTACT,
	payload: contact,
})

export const newContact = (contact) => ({
	type: ACTION_TYPES.NEW_CONTACT,
	payload: contact,
})