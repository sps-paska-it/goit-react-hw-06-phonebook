import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
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

    componentDidMount() {
        const localContacts = JSON.parse(localStorage.getItem('Key_contacts'));
        if (localContacts) {
            this.setState({
                contacts: localContacts,
            });
        }
    }

    componentDidUpdate() {
        localStorage.setItem(
            'Key_contacts',
            JSON.stringify(this.state.contacts)
        );
    }

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
        // toast.warn(`${newContact.name} is already in contacts`, {
        //     position: 'top-right',
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: 'light',
        // });
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
                <MainTitle>Phone book</MainTitle>
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
                {/* <ToastContainer /> */}
            </>
        );
    }
}
