import {fetchContacts, deleteContact, addContact} from './contacts-operations'
import { createSlice } from '@reduxjs/toolkit'


const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder)=>
  builder
  .addCase(fetchContacts.pending, (state) =>{state.isLoading =true})
  .addCase(fetchContacts.fulfilled, (state, action) =>{state.isLoading =
  state.error = null;
state.items = action.payload;})
.addCase(fetchContacts.rejected, (state, {payload}) =>{state.isLoading =false;
state.error=payload})


    
    
 
    //   [fetchContacts.rejected]: (state, {payload}) => {
    //       state.isLoading = false;
    // state.error = payload;
    //   },

    //   [addContact.pending]: (state) => {state.isLoading =true},
    //   [addContact.fulfilled]: (state, action) => {
    //       state.isLoading = false;
    //       state.error = null;
    //       state.items = [...state.items, action.payload];
    //   },
    //   [addContact.rejected]: (state, {payload}) => {
    //       state.isLoading = false;
    // state.error = payload;
    //   },
    //   [deleteContact.pending]: (state) => {state.isLoading =true},
    //   [deleteContact.fulfilled]: (state, {payload}) => {
    //       state.isLoading = false;
    //       state.error = null;
    //       state.items = state.items.filter(({id})=>id !== payload);
    //   },
    //   [deleteContact.rejected]: (state, {payload}) => {
    //       state.isLoading = false;
    // state.error = payload;
    //   },
  
});


export const contactsReducer = contactsSlice.reducer;



// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//     extraReducers: {
//         [fetchContacts.pending]: (state) => {state.isLoading =true},
//         [fetchContacts.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.error = null;
//             state.items = action.payload;
//         },
//         [fetchContacts.rejected]: (state, {payload}) => {
//             state.isLoading = false;
//       state.error = payload;
//         },

//         [addContact.pending]: (state) => {state.isLoading =true},
//         [addContact.fulfilled]: (state, action) => {
//             state.isLoading = false;
//             state.error = null;
//             state.items = [...state.items, action.payload];
//         },
//         [addContact.rejected]: (state, {payload}) => {
//             state.isLoading = false;
//       state.error = payload;
//         },
//         [deleteContact.pending]: (state) => {state.isLoading =true},
//         [deleteContact.fulfilled]: (state, {payload}) => {
//             state.isLoading = false;
//             state.error = null;
//             state.items = state.items.filter(({id})=>id !== payload);
//         },
//         [deleteContact.rejected]: (state, {payload}) => {
//             state.isLoading = false;
//       state.error = payload;
//         },
//     },
//   });


// export const contactsReducer = contactsSlice.reducer;
// export default  contactsSlice.reducer;