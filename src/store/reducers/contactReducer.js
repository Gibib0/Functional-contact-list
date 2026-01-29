import { initialContact } from "../../model/initialContact";
import * as ACTION_TYPES from '../actionTypes';

const initialState = {
	list: [],
	currentContact: {...initialContact},
	isEditing: false,
	loading: false,
	error: null,
}

const contactReducer = (state = initialState, action) => {
	switch (action.type) {
		// FETCH
		case ACTION_TYPES.FETCH_CONTACTS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			}
		case ACTION_TYPES.FETCH_CONTACTS_SUCCESS:
			return {
				...state,
				list: action.payload,
				loading: false,
				error: null,
			}
		case ACTION_TYPES.FETCH_CONTACTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		
		// CREATE
		case ACTION_TYPES.CREATE_CONTACTS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			}
		case ACTION_TYPES.CREATE_CONTACTS_SUCCESS:
			return {
				...state,
				list: [...state.list, action.payload],
				currentContact: {...initialContact},
				isEditing: false,
				loading: false,
				error: null,
			}
		case ACTION_TYPES.CREATE_CONTACTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			}

		// UPDATE
		case ACTION_TYPES.UPDATE_CONTACTS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			}
		case ACTION_TYPES.UPDATE_CONTACTS_SUCCESS:
			return {
				...state,
				list: state.list.map(contact => contact.id === action.payload.id ? action.payload : contact),
				currentContact: action.payload,
				isEditing: true,
				loading: false,
				error: null,
			}
		case ACTION_TYPES.UPDATE_CONTACTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			}

		//DELETE
		case ACTION_TYPES.DELETE_CONTACTS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			}
		case ACTION_TYPES.DELETE_CONTACTS_SUCCESS:
			return {
				...state,
				list: state.list.filter(contact => contact.id !== action.payload),
				currentContact: {...initialContact},
				isEditing: false,
				loading: false,
				error: null,
			}
		case ACTION_TYPES.DELETE_CONTACTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			}


		case ACTION_TYPES.SELECT_CONTACT:
			return {
				...state,
				currentContact: action.payload,
				isEditing: true,
			}
		case ACTION_TYPES.NEW_CONTACT:
			return {
				...state,
				currentContact: {...initialContact},
				isEditing: false,
			}
		default: return state
	}
}

export default contactReducer