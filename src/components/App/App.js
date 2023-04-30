import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { MainTitle, Title } from './App.styled';
import { Message } from 'components/Message';

export const App = () => {
    const [filterContacts, setFilterContacts] = useState('');
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const localContacts = JSON.parse(localStorage.getItem('Key_contacts'));

        if (!localContacts || !localContacts.length) {
            return;
        }
        setContacts(localContacts);
    }, []);

    useEffect(() => {
        localStorage.setItem('Key_contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = newContact => {
        const repead = contacts.find(
            contact => contact.name === newContact.name
        );
        if (repead) {
            // alert(`${newContact.name} is already in contacts`);
            toast.warn('is already in contacts');
            return;
        }
        setContacts([...contacts, newContact]);
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
            ) : (
                <Contacts
                    contacts={getVisibleContacts()}
                    deleteContact={deleteContact}
                />
            )}
            <ToastContainer autoClose={3000} />
        </>
    );
};
