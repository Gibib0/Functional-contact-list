import {
	getAllContacts,
	createContact,
	updateContact,
	deleteContact,
} from '../../api/contact-service'

export const SELECT_CONTACT = 'SELECT_CONTACT'
export const NEW_CONTACT = 'NEW_CONTACT'
export const SET_CONTACT = 'SET_CONTACT'

export const ADD_CONTACT = 'ADD_CONTACT'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT'

export const setContact = (contact) => ({
	type: SET_CONTACT,
	payload: contact,
})

export const selectContact = (contact) => ({
	type: SELECT_CONTACT,
	payload: contact,
})

export const newContact = (contact) => ({
	type: NEW_CONTACT,
	payload: contact,
})

export const fetchContacts = () => async (dispatch) => {
	const {data} = await getAllContacts()
	dispatch(setContact(data || []))
}

export const saveContact = (contact, isEditing) => async (dispatch) => {
	if (isEditing) {
		const {data} = await updateContact(contact.id, contact)
		dispatch({
			type: UPDATE_CONTACT,
			payload: data
		})
	} else {
		const {data} = await createContact(contact)
		dispatch({
			type: ADD_CONTACT,
			payload: data
		})
	}
}

export const removeContact = (id) => async (dispatch) => {
	await deleteContact(id)
	dispatch({
		type: DELETE_CONTACT,
		payload: id
	})
}