import { useDispatch, useSelector } from 'react-redux';

import FormButton from '../FormButton';
import { MdDelete } from 'react-icons/md';
import React from 'react';
import contactsActions from '../../redux/contacts/contacts-actions';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, phoneNumber }) => (
        <li key={id} className={s.item}>
          <span className={s.itemName}>{name}</span>
          <span className={s.itemPhone}>{phoneNumber}</span>
          <FormButton
            onClick={() => dispatch(contactsActions.deleteContact(id))}
            aria-label="Delete contact"
          >
            <MdDelete size="18" />
          </FormButton>
        </li>
      ))}
    </ul>
  );
}
