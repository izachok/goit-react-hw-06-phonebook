export const getContacts = state => state.items;

export const getFilter = state => state.filter;

export const getFilteredContacts = state => {
  const filter = getFilter(state);
  const contacts = getContacts(state);

  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
