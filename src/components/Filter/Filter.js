import shortid from 'shortid';
import { Container, Label, Input } from './Filter.styled';

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
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Search by name ..."
                required
                onChange={onHandleChangeFilter}
            />
        </Container>
    );
};
