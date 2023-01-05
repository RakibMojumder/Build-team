import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeam = createAsyncThunk('team/fetchTeam', async () => {
    const res = await axios.get('https://build-team.vercel.app/team')
    const data = res.data;
    return data
})

const teamSlice = createSlice({
    name: "team",
    initialState: {
        team: [],
        teamMember: 0,
        isLoading: false,
        error: ""
    },
    reducers: {
        addToTeam: (state, action) => {
            const member = action.payload;

            state.teamMember = state.teamMember + 1;
            state.team = [...state.team, member]

        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTeam.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchTeam.fulfilled, (state, action) => {
            state.isLoading = false
            state.team = action.payload.data
            state.teamMember = action.payload.totalMember;
            state.error = ""
        });

        builder.addCase(fetchTeam.rejected, (state, action) => {
            state.isLoading = false
            state.team = []
            state.teamMember = 0
            state.error = action.error.message
        });
    }

});

export const { addToTeam } = teamSlice.actions;
export default teamSlice.reducer;