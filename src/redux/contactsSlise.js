import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        localContacts: [
            { id: 0, name: 'Pasha', number: '0636750602' },
            { id: 1, name: 'Olia', number: '0636750603' },
            { id: 2, name: 'Busia', number: '0636750604' },
            { id: 3, name: 'Tania', number: '0636750605' },
            { id: 4, name: 'Ksiusha', number: '0636750605' },
        ],
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
