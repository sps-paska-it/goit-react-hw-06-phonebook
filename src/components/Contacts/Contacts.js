import React from 'react';
import PropTypes from 'prop-types';
import { ContactsItem } from './ContactsItem';
import { Container } from './Contacts.styled';

export const Contacts = ({ contacts, deleteContact }) => {
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
};

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
