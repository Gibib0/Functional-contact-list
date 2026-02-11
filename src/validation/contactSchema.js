import * as Yup from 'yup'

export const contactSchema = Yup.object().shape({
	firstName: Yup.string().required('First name is required'),
	lastName: Yup.string().required('Last name is required'),
	email: Yup.string()
		.email('Invalid email format')
		.required('Email is required'),
	phone: Yup.string()
		.matches(/^\+?[0-9\s()-]{10,20}$/, 'Invalid phone number')
		.required('Phone number is required'),
})