import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async ({ count }) => {
    const res = await axios.get(`https://build-team.vercel.app/users?count=${count}`);
    const data = res.data;
    return data;
});

export const fetchUsersByName = createAsyncThunk('users/fetchUsersByName', async ({ count, name }) => {
    const res = await axios.get(`https://build-team.vercel.app/users?count=${count}&name=${name}`);
    const data = res.data;
    return data;
});

export const fetchFilteredUser = createAsyncThunk('users/fetchFilteredUser', async ({ count, domain, gender, available }) => {
    const res = await axios.post(`https://build-team.vercel.app/users?count=${count}`, { domain, gender, available });
    const data = res.data;
    return data;
})


const counterSlice = createSlice({
    name: "users",
    initialState: {
        isLoading: true,
        users: [],
        error: ""
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload
            state.error = ""
        });

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false
            state.users = []
            state.error = action.error.message
        });

        builder.addCase(fetchUsersByName.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchUsersByName.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload
            state.error = ""
        });

        builder.addCase(fetchUsersByName.rejected, (state, action) => {
            state.isLoading = false
            state.users = []
            state.error = action.error.message
        });

        builder.addCase(fetchFilteredUser.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchFilteredUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload
            state.error = ""
        });

        builder.addCase(fetchFilteredUser.rejected, (state, action) => {
            state.isLoading = false
            state.users = []
            state.error = action.error.message
        });


    }
});

export default counterSlice.reducer