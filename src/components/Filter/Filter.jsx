import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import { TbUserSearch } from 'react-icons/tb';
import css from './Filter.module.css';

import { getFilter } from '../../redux/selectors';
import { setFilter } from 'redux/filterSlise';

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    const filterId = nanoid();

    const onHandleChangeFilter = e => {
        dispatch(setFilter(e.target.value.trim()));
    };

    return (
        <div className={css.wrapper}>
            <label className={css.labelf} htmlFor={filterId}>
                Find contacts by me
            </label>
            <input
                className={css.fieldf}
                id={filterId}
                type="text"
                name="filter"
                value={filter}
                pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Search by name ..."
                maxLength={10}
                required
                autoComplete="off"
                onChange={onHandleChangeFilter}
            />
            <TbUserSearch className={css.svg} />
        </div>
    );
};
