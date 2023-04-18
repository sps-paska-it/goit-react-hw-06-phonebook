import { Item, Contact } from './ContactsItem.stuled';
import PropTypes from 'prop-types';

export const ContactsItem = ({ id, name, number, deleteContact }) => {
    return (
        <Item id={id}>
            <Contact>
                {name}:{number}
            </Contact>
            <button type="button" id={id} onClick={deleteContact}>
                Delete
            </button>
        </Item>
    );
};

ContactsItem.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
