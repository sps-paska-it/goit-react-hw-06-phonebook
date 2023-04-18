import React from 'react';
import PropTypes from 'prop-types';
import { ContactsItem } from './ContactsItem';
import { Container, Message } from './Contacts.styled';

export class Contacts extends React.Component {
    render() {
        const { contacts, deleteContact } = this.props;
        return (
            <Container>
                {contacts.length === 0 ? (
                    <Message>You don't have any contact added</Message>
                ) : (
                    contacts.map(contact => {
                        return (
                            <ContactsItem
                                key={contact.id}
                                id={contact.id}
                                name={contact.name}
                                number={contact.number}
                                deleteContact={() => deleteContact(contact.id)}
                            />
                        );
                    })
                )}
            </Container>
        );
    }
}

Contacts.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
};
