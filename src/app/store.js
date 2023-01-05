
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/users.slice'
import counterReducer from '../features/counter/counter.slice'
import teamReducer from '../features/team/team.slice'

const store = configureStore({
    reducer: {
        users: userReducer,
        counter: counterReducer,
        team: teamReducer
    }
})

export default store;