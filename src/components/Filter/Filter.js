import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Container, Label, Input, InputIcon } from './Filter.styled';

export const Filter = ({ filter, onHandleChangeFilter }) => {
    const filterId = shortid.generate();
    return (
        <Container>
            <Label htmlFor={filterId}>Find contacts by me</Label>
            <Input
                id={filterId}
                type="text"
                name="filter"
                value={filter}
                pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Search by name ..."
                maxLength={30}
                required
                onChange={onHandleChangeFilter}
            />
            <InputIcon />
        </Container>
    );
};

Filter.propTypes = {
    onHandleChangeFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};
