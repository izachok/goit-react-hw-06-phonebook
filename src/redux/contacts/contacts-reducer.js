import actions from './contacts-actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({ items, filter });
