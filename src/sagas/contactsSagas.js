import {call, put} from 'redux-saga/effects'
import * as contactService from '../api/contact-service'
import * as actions from '../store/actions/contactActions'

// FETCH
export function* fetchContactsSaga() {
  try {
    yield put(actions.fetchContactsRequest())
    const { data } = yield call(contactService.getAllContacts)
    yield put(actions.fetchContactsSuccess(data || []))
  } catch (error) {
    yield put(actions.fetchContactsError(error.message))
  }
}

// CREATE
export function* createContactSaga(action) {
  try {
    yield put(actions.createContactRequest(action.payload))
    const { data } = yield call(contactService.createContact, action.payload)
    yield put(actions.createContactSuccess(data))
  } catch (error) {
    yield put(actions.createContactError(error.message))
  }
}

// UPDATE
export function* updateContactSaga(action) {
  try {
    yield put(actions.updateContactRequest(action.payload))
    const { id } = action.payload
    if (!id) {
      throw new Error('Contact ID is required for update')
    }
    const { data } = yield call(contactService.updateContact, id, action.payload)
    yield put(actions.updateContactSuccess(data))
  } catch (error) {
    yield put(actions.updateContactError(error.message))
  }
}

//DELETE
export function* deleteContactSaga(action) {
  try {
    yield put(actions.deleteContactRequest(action.payload))
    yield call(contactService.deleteContact, action.payload)
    yield put(actions.deleteContactSuccess(action.payload))
  } catch (error) {
    yield put(actions.deleteContactError(error.message))
  }
}