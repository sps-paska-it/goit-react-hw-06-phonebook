import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlise';
import { MdClose } from 'react-icons/md';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(deleteContacts(contact.id));
    };

    return (
        <div className={css.wrapper}>
            <p className={css.text}>{contact.name}</p>
            <p className={css.text}>{contact.number}</p>
            <button type="button" className={css.btn} onClick={onDelete}>
                <MdClose size={24} />
            </button>
        </div>
    );
};
