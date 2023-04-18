import PropTypes from 'prop-types';
import { MessageStyle } from './Message.styled';

export const Message = ({ message }) => {
    return <MessageStyle>{message}</MessageStyle>;
};

Message.propTypes = {
    message: PropTypes.string.isRequired,
};
