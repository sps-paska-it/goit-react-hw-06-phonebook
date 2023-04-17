import React from 'react';
import shortid from 'shortid';

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
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameId}>Name</label>
                <input
                    id={this.nameId}
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                />
                <label htmlFor={this.numberId}>Number</label>
                <input
                    id={this.numberId}
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChange}
                />
                <button type="submit" disabled={isUnique}>
                    Add contact
                </button>
            </form>
        );
    }
}
