import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContacts } from '../../redux/contactsSlise';

import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { toast } from 'react-toastify';

import { Button } from 'components/Button/Button';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.elements.name.value.trim();
        const repead = contacts.find(contact => contact.name === name);
        if (repead) {
            // alert(`${name} is already in contacts`);
            toast(`${name} is already in contacts`);
            return;
        }
        const number = form.elements.number.value.trim();
        const id = nanoid();
        const contact = { id, name, number };
        dispatch(addContacts(contact));
        form.reset();
    };

    const nameId = nanoid();
    const numberId = nanoid();

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label} htmlFor={nameId}>
                Name
            </label>
            <input
                className={css.field}
                id={nameId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Anna Maria"
                autoComplete="off"
                required
            />
            <label className={css.label} htmlFor={numberId}>
                Number
            </label>
            <input
                className={css.field}
                id={numberId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="+38 099 01 010 01"
                autoComplete="off"
                required
            />
            <Button type="submit">Add contacts</Button>
        </form>
    );
};
