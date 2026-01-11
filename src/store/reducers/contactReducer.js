import { initialContact } from "../../model/initialContact";
import {
	SET_CONTACTS,
	SELECT_CONTACT,
	NEW_CONTACT,
	ADD_CONTACT,
	UPDATE_CONTACT,
	DELETE_CONTACT,
} from '../actionTypes';

const initialState = {
	list: [],
	currentContact: {...initialContact},
	isEditing: false,
}

const contactReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CONTACTS:
			return {
				...state,
				list: action.payload,
			}
		case SELECT_CONTACT:
			return {
				...state,
				currentContact: action.payload,
				isEditing: true,
			}
		case NEW_CONTACT:
			return {
				...state,
				currentContact: {...initialContact},
				isEditing: false,
			}
		case ADD_CONTACT:
			return {
				...state,
				list: [...state.list, action.payload],
				currentContact: {...initialContact},
				isEditing: false,
			}
		case UPDATE_CONTACT:
			return {
				...state,
				list: state.list.map(contact => contact.id === action.payload.id ? action.payload : contact),
				currentContact: action.payload,
				isEditing: true,
			}
		case DELETE_CONTACT:
			return {
				...state,
				list: state.list.filter(contact => contact.id !== action.payload),
				currentContact: {...initialContact},
				isEditing: false,
			}
		default: return state
	}
}

export default contactReducer