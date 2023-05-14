import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const initialState = {
  contactsArray: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const checkedName = state.contactsArray.find(
          ({ name }) => name === action.payload.name
        );
        if (checkedName) {
          Notify.warning(`${action.payload.name} is already in contacts`);
          return;
        }
        state.contactsArray.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contactsArray.findIndex(
        contact => contact.id === action.payload
      );
      state.contactsArray.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const getContacts = state => state.contacts.contactsArray;
