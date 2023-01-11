import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL ='https://63befa7b585bedcb36bc5122.mockapi.io/contacts'

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_,{rejectWithValue})=>
{try {
  const {data}=  await axios.get()
  console.log(data);
  return data
    
} catch (error) {
    return rejectWithValue(error)
    
}})
export const addContact  = createAsyncThunk('contacts/addContact')
export const deleteContact = createAsyncThunk('contacts/deleteContact')