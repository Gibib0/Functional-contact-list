import {
	SET_CONTACTS,
	SELECT_CONTACT,
	NEW_CONTACT,
	ADD_CONTACT,
	UPDATE_CONTACT,
	DELETE_CONTACT,
} from '../actionTypes.js'

export const setContacts = (contacts) => ({
	type: SET_CONTACTS,
	payload: contacts,
})

export const selectContact = (contact) => ({
	type: SELECT_CONTACT,
	payload: contact,
})

export const newContact = () => ({
	type: NEW_CONTACT,
})

export const addContact = (contact) => ({
	type: ADD_CONTACT,
	payload: contact,
})

export const updateContact = (contact) => ({
	type: UPDATE_CONTACT,
	payload: contact,
})

export const deleteContact = (id) => ({
	type: DELETE_CONTACT,
	payload: id,
})