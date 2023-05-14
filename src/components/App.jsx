import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import css from './App.module.css';

function App() {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>

      <div className={css.content}>
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
