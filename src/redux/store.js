import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import storage from 'redux-persist/lib/storage';

const LOCAL_STORAGE_CONTACTS = 'contacts';

const contactsPersistConfig = {
  key: LOCAL_STORAGE_CONTACTS,
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: persistReducer(contactsPersistConfig, contactsReducer),
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

const persistedStore = { store, persistor };

export default persistedStore;
