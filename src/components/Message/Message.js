import PropTypes from 'prop-types';
// import { MessageStyle } from './Message.styled';

export const Message = ({ message }) => {
    return <b>{message}</b>;
};

Message.propTypes = {
    message: PropTypes.string.isRequired,
};
