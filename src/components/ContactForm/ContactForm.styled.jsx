import styled from '@emotion/styled';

export const Form = styled.form`
    padding: 15px;
    max-width: 400px;
    border: 2px solid #fe6b53;
    border-radius: 5px;
    margin: 0 auto 25px auto;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    margin-left: 10px;
    color: #fe6b53;
`;

export const Input = styled.input`
    display: block;
    height: 25px;
    width: 70%;
    padding: 2px 5px;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    margin-bottom: 15px;
    color: #fe6b53;

    ::placeholder {
        color: #bdbdbd;
    }

    :focus {
        outline: none;
        border: 1px solid #fe6b53;
    }
`;
