import css from './App.module.css';
import { Component } from 'react';

import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterContacts = this.state.contacts;

  handleFilterQuery = event => {
    const { value } = event.currentTarget;
    const { contacts } = this.state;
    this.setState({ filter: value });

    this.filterContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(value.toLowerCase())
    );
  };

  handleDelItem = event => {
    const { name } = event.currentTarget;
    const delEl = this.filterContacts.findIndex(({ id }) => id === name);
    this.filterContacts.splice(delEl, 1);
    this.setState({ contacts: this.filterContacts });
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const findElement = contacts.some(contact => contact.name === data.name);
    findElement
      ? alert(`${data.name} is alredy in contact`)
      : contacts.push(data);
    this.setState({ contacts });
    this.filterContacts = contacts;
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilterQuery} />
        <ContactList
          contacts={this.filterContacts}
          onClick={this.handleDelItem}
        />
      </div>
    );
  }
}

export default App;
