import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import './App.css'

const App = () => {

  return (
    <div className='app-container'>
      <header className='header'>
        <h1>Contact list</h1>
      </header>

      <main className='main'>
        <div className='main-container'>
          <ContactList />

          <div className='form'>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App