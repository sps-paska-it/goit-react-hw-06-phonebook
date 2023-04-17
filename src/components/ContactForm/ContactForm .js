import React from 'react';
import shortid from 'shortid';
import { Form, Input, Label } from './ContactForm.styled';

export class ContactForm extends React.Component {
    state = {
        name: '',
        number: '',
        isUnique: undefined,
    };

    notRepeatName = () => {
        const { name } = this.state;
        const { contacts } = this.props;
        const nameCase = name.toLowerCase();
        const contact = contacts.find(
            contact => contact.name.toLowerCase() === nameCase
        );
        this.setState({
            isUnique: contact,
        });
        if (contact) {
            alert(`${name} is already in contacts`);
        }
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState(
            {
                [name]: value,
            },
            this.notRepeatName
        );
    };
    handleSubmit = e => {
        e.preventDefault();
        const { name, number } = this.state;
        const { onAddContact } = this.props;
        const newContact = {
            id: shortid.generate(),
            name,
            number,
        };
        onAddContact(newContact);
        this.setState({ name: '', number: '' });
    };

    nameId = shortid.generate();
    numberId = shortid.generate();
    render() {
        const { name, number, isUnique } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label htmlFor={this.nameId}>Name</Label>
                <Input
                    id={this.nameId}
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder="Anna Maria"
                    required
                    onChange={this.handleChange}
                />
                <Label htmlFor={this.numberId}>Number</Label>
                <Input
                    id={this.numberId}
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder="+38 099 01 010 01"
                    required
                    onChange={this.handleChange}
                />
                <button type="submit" disabled={isUnique}>
                    Add contact
                </button>
            </Form>
        );
    }
}
