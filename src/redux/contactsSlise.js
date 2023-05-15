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
            state.localContacts.push(action.payload);
        },
        deleteContacts(state, action) {
            return {
                localContacts: state.localContacts.filter(
                    contact => contact.id !== action.payload
                ),
            };
        },
    },
});

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['localContacts'],
};

export const contactsLocalReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);

export const { addContacts, deleteContacts } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
