import {configureStore} from '@reduxjs/toolkit';
import UsersReducer from './usersSlice';

export default configureStore({
    reducer: {
        users: UsersReducer,
    },
});