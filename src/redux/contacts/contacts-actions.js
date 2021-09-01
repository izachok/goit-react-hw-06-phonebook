import { createAction } from '@reduxjs/toolkit';
import { v1 as uuid } from 'uuid';

const addContact = createAction('contacts/add', (name, phoneNumber) => ({
  payload: {
    id: uuid(),
    name,
    phoneNumber,
  },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

const contactsActions = { addContact, deleteContact, changeFilter };

export default contactsActions;
