import {fetchContacts} from './contacts-operations'
import { createSlice } from '@reduxjs/toolkit'

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: (state) => {state.isLoading =true},
        [fetchContacts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: (state, {payload}) => {
            state.isLoading = false;
      state.error = payload;
        },
    },
  });


export const contactsReducer = contactsSlice.reducer;
// export default  contactsSlice.reducer;