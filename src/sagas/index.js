import {all, takeEvery} from 'redux-saga/effects'
import * as ACTION_TYPES from '../store/actionTypes'
import {
	fetchContactsSaga,
	createContactSaga,
	updateContactSaga,
	deleteContactSaga
} from './contactsSagas'

export default function* rootSaga() {
	yield all([
		takeEvery(ACTION_TYPES.FETCH_CONTACTS, fetchContactsSaga),
		takeEvery(ACTION_TYPES.CREATE_CONTACT, createContactSaga),
		takeEvery(ACTION_TYPES.UPDATE_CONTACT, updateContactSaga),
		takeEvery(ACTION_TYPES.DELETE_CONTACT, deleteContactSaga),
	])
}