import { Component } from 'react'
import ContactItem from '../ContactItem/ContactItem'
import './ContactList.css'

class ContactList extends Component {
	render () {
		const {contacts, onSelect, onDelete} = this.props

		return (
			<div className='contact-list'>
				<div className='contact-list-content'>
					{contacts.map(contact => (
						<ContactItem
							key={contact.id}
							contact={contact}
							onSelect={onSelect}
							onDelete={onDelete}
						/>
					))}
				</div>
			</div>
		)
	}
}

export default ContactList