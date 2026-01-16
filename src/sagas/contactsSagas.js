import {call, put} from 'redux-saga/effects'
import api from '../api/contact-service'
import {
	fetchContactsSuccess,
	createContactSuccess,
	updateContactSuccess,
	deleteContactSuccess,
} from '../store/actions/contactActions'

export function* fetchContactsSaga() {
	const {data} = yield call(api.get, '/')
	yield put(fetchContactsSuccess(data || []))
}

export function* createContactSaga(action) {
	const {data} = yield call(api.post, '/', action.payload)
	yield put(createContactSuccess(data))
}

export function* updateContactSaga(action) {
	const {id} = action.payload
	const {data} = yield call(api.put, `/${id}`, action.payload)
	yield put(updateContactSuccess(data))
}

export function* deleteContactSaga(action) {
	yield call(api.delete, `/${action.payload}`)
	yield put(deleteContactSuccess(action.payload))
}