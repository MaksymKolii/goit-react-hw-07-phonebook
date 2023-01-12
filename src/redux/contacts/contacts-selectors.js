//* contacts идет из store - contacts: contactsReducer, а items идет из contactsSlice -  items: [],
export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getStatusFilter = state => state.filters.status;