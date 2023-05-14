export const addContacts = contact => {
    return {
        type: 'contacts/addContacts',
        payload: contact,
    };
};

export const deleteContacts = contactsId => {
    return {
        type: 'contacts/deleteContacts',
        payload: contactsId,
    };
};

export const filterContacts = query => {
    return {
        type: 'filter/updateFilter',
        payload: query,
    };
};
