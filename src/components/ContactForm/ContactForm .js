import { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Form, Input, Label } from './ContactForm.styled';

export const ContactForm = ({ onAddContact }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const newContact = {
            id: shortid.generate(),
            name: name,
            number: number,
        };
        onAddContact(newContact);
        setName('');
        setNumber('');
    };

    const nameId = shortid.generate();
    const numberId = shortid.generate();

    return (
        <Form onSubmit={handleSubmit}>
            <Label htmlFor={nameId}>Name</Label>
            <Input
                id={nameId}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Anna Maria"
                required
                onChange={e => setName(e.target.value)}
            />
            <Label htmlFor={numberId}>Number</Label>
            <Input
                id={numberId}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="+38 099 01 010 01"
                required
                onChange={e => setNumber(e.target.value)}
            />
            <button type="submit">Add contact</button>
        </Form>
    );
};

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
};
