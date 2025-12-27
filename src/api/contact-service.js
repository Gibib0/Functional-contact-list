import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:5000/contacts',
	headers: {'Content-Type': 'application/json' },
})

export const getAllContacts = () => api.get('/')
export const createContact = (contact) => api.post('/', contact)
export const updateContact = (id, contact) => api.put(`/${id}`, contact)
export const deleteContact = (id) => api.delete(`/${id}`)

export default api