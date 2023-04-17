export const ContactsItem = ({ id, name, number, deleteContact }) => {
    return (
        <li id={id}>
            <p>
                {name}:{number}
            </p>
            <button type="button" id={id} onClick={deleteContact}>
                Delete
            </button>
        </li>
    );
};
