import { configureStore } from '@reduxjs/toolkit';
import { UserStateType, userSlice } from './user';

export type StoreStateType = {
    user: UserStateType;
};

export default configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});
