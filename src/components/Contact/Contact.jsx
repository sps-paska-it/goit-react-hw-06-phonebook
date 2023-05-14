import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/actions';
import { MdClose } from 'react-icons/md';
import css from './Contact.module.css';

export const Contact = ({ task }) => {
    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(deleteContacts(task.id));
    };

    return (
        <div className={css.wrapper}>
            <p className={css.text}>{task.name}</p>
            <p className={css.text}>{task.number}</p>
            <button type="button" className={css.btn} onClick={onDelete}>
                <MdClose size={24} />
            </button>
        </div>
    );
};
