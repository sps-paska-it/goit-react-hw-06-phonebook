import React from 'react';
import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { MainTitle, Title } from './App.styled';
import { Message } from 'components/Message';

export class App extends React.Component {
    state = {
        filter: '',
        contacts: [],
    };

    addContact = newContact => {
        const { contacts } = this.state;
        const repead = contacts.find(
            contact => contact.name === newContact.name
        );
        if (!repead) {
            this.setState(prevState => ({
                contacts: [...prevState.contacts, newContact],
            }));
            return;
        }
        alert(`${newContact.name} is already in contacts`);
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
                <ContactForm onAddContact={addContact} />
                <Title>Contacts</Title>
                <Filter
                    filter={filter}
                    onHandleChangeFilter={handleChangeFilter}
                />
                {contacts.length === 0 ? (
                    <Message message={"You don't have any contact added"} />
                ) : (
                    <Contacts
                        contacts={visibleContacts}
                        deleteContact={this.deleteContact}
                    />
                )}
            </>
        );
    }
}
