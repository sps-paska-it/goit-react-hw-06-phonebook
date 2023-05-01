import { useState, useEffect } from 'react';
import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { MainTitle, Title } from './App.styled';
import { Message } from 'components/Message';

export const App = () => {
    const [filterContacts, setFilterContacts] = useState('');
    const [contacts, setContacts] = useState(() => {
        return JSON.parse(localStorage.getItem('Key_contacts')) || [];
    });

    useEffect(() => {
        localStorage.setItem('Key_contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = newContact => {
        const repead = contacts.find(
            contact => contact.name === newContact.name
        );
        if (repead) {
            alert(`${newContact.name} is already in contacts`);
            return;
        }
        setContacts(prevState => [...prevState, newContact]);
    };

    const deleteContact = id => {
        setContacts(prevState =>
            prevState.filter(contact => contact.id !== id)
        );
    };

    const getVisibleContacts = () => {
        const normalizedFilter = filterContacts.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    const isFilterContacts = getVisibleContacts().length;

    const handleChangeFilter = e => {
        setFilterContacts(e.target.value);
    };

    return (
        <>
            <MainTitle>Phone book</MainTitle>
            <ContactForm onAddContact={addContact} />
            <Title>Contacts</Title>
            <Filter
                filter={filterContacts}
                onHandleChangeFilter={handleChangeFilter}
            />
            {contacts.length === 0 ? (
                <Message message={"You don't have any contact added"} />
            ) : isFilterContacts ? (
                <Contacts
                    contacts={getVisibleContacts()}
                    deleteContact={deleteContact}
                />
            ) : (
                <Message message={'No contacts found'} />
            )}
        </>
    );
};
