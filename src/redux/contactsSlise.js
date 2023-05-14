import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        localContacts: [{ id: 0, name: 'Довідкова служба', number: '101' }],
    },
    reducers: {
        addContacts(state, action) {
            state.contacts.push(action.payload);
        },
        deleteContacts(state, action) {
            return state.contacts.filter(task => task.id !== action.payload);
        },
    },
});

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
    // version: 1,
};

export const contactsLocalReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);

export const { addContacts, deleteContacts } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
