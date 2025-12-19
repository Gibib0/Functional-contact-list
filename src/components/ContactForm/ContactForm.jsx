import { Component } from "react";
import './ContactForm.css'

class ContactForm extends Component {
	state = {
		form: {...this.props.contact}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.contact.id !== prevState.form.id) {
			return {
				form: {...nextProps.contact}
			}
		}
		return null
	}

	onInputChange = (e) => {
		const {name, value} = e.target
		this.setState({
			form: {
				...this.state.form,
				[name]: value
			}
		})
	}

	onFormSubmit = (e) => {
		e.preventDefault()
		const {form} = this.state
		this.props.onSave(form)

		if (!this.state.isEditing) {
			this.setState({
				form: {
					id: null,
					firstName: '',
					lastName: '',
					email: '',
					phone: ''
				}
			})
		} else {
			this.setState({
				form: {...form}
			})
		}
	}

	handleClearField = (field) => {
		this.setState({
			form: {
				...this.state.form,
				[field]: ''
			}
		})
	}

	handleNew = () => {
		this.props.onNew()
	}

	handleDeleteClick = () => {
		const {form} = this.state
		this.props.onDelete(form.id)
	}

	render() {
		const {isEditing} = this.props
		const {form} = this.state

		return (
			<form className="contact-form" onSubmit={this.onFormSubmit}>
				<div className="form-container">
					<div className="input-container">
						<input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={this.onInputChange}
              placeholder="First Name"
              className="form-input"
            />

						{form.firstName && (
              <button
                type="button"
                className="clear-field-btn"
                onClick={() => this.handleClearField('firstName')}
              >
                ×
              </button>
            )}
					</div>
				</div>

				<div className="form-container">
					<div className="input-container">
						<input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={this.onInputChange}
              placeholder="Last Name"
              className="form-input"
            />

						{form.lastName && (
              <button
                type="button"
                className="clear-field-btn"
                onClick={() => this.handleClearField('lastName')}
              >
                ×
              </button>
            )}
					</div>
				</div>

				<div className="form-container">
					<div className="input-container">
						<input
              type="email"
              name="email"
              value={form.email}
              onChange={this.onInputChange}
              placeholder="Email"
              className="form-input"
            />

						{form.email && (
              <button
                type="button"
                className="clear-field-btn"
                onClick={() => this.handleClearField('email')}
              >
                ×
              </button>
            )}
					</div>
				</div>

				<div className="form-container">
					<div className="input-container">
						<input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={this.onInputChange}
              placeholder="Phone"
              className="form-input"
            />

						{form.phone && (
              <button
                type="button"
                className="clear-field-btn"
                onClick={() => this.handleClearField('phone')}
              >
                ×
              </button>
            )}
					</div>
				</div>

				<div className="form-buttons">
					<button 
            type="button" className="btn btn-new" onClick={this.handleNew}>New</button>

					<button type="submit" className="btn btn-save">
            Save
          </button>

					{isEditing &&(
						<button type="button" className="btn btn-delete" onClick={this.handleDeleteClick}>Delete</button>
					)}
				</div>
			</form>
		)
	}
}

export default ContactForm