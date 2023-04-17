import shortid from 'shortid';

export const Filter = ({ filter, onHandleChangeFilter }) => {
    const filterId = shortid.generate();
    return (
        <>
            <label htmlFor={filterId}>Find contacts by me</label>
            <input
                id={filterId}
                type="text"
                name="filter"
                value={filter}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={onHandleChangeFilter}
            />
        </>
    );
};
