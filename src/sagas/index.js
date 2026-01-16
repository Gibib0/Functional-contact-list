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
		takeEvery(ACTION_TYPES.FETCH_CONTACTS_REQUEST, fetchContactsSaga),
		takeEvery(ACTION_TYPES.CREATE_CONTACTS_REQUEST, createContactSaga),
		takeEvery(ACTION_TYPES.UPDATE_CONTACTS_REQUEST, updateContactSaga),
		takeEvery(ACTION_TYPES.DELETE_CONTACTS_REQUEST, deleteContactSaga),
	])
}