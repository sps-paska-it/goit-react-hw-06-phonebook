import React from 'react';
import { ContactsItem } from './ContactsItem';
import { Container } from './Contacts.styled';

export class Contacts extends React.Component {
    render() {
        const { contacts, deleteContact } = this.props;
        return (
            <Container>
                {contacts.map(contact => {
                    return (
                        <ContactsItem
                            key={contact.id}
                            id={contact.id}
                            name={contact.name}
                            number={contact.number}
                            deleteContact={() => deleteContact(contact.id)}
                        />
                    );
                })}
            </Container>
        );
    }
}
