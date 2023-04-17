import React from 'react';
import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { MainTitle, Title } from './App.styled';

export class App extends React.Component {
    state = {
        filter: '',
        contacts: [],
    };

    addContact = newContact => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact],
        }));
    };

    deleteContact = id => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(
                    contact => contact.id !== id
                ),
            };
        });
    };

    getVisibleContacts = () => {
        const { filter, contacts } = this.state;
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    handleChangeFilter = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        const { filter, contacts } = this.state;
        const addContact = this.addContact;
        const handleChangeFilter = this.handleChangeFilter;
        const visibleContacts = this.getVisibleContacts();
        return (
            <>
                <MainTitle>Phonebook</MainTitle>
                <ContactForm onAddContact={addContact} contacts={contacts} />
                <Title>Contacts</Title>
                <Filter
                    filter={filter}
                    onHandleChangeFilter={handleChangeFilter}
                />
                <Contacts
                    contacts={visibleContacts}
                    deleteContact={this.deleteContact}
                />
            </>
        );
    }
}
