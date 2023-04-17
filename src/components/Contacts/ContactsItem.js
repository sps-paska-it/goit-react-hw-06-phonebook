import { Item, Contact } from './ContactsItem.stuled';

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
