import { configureStore } from '@reduxjs/toolkit';
import { UserStateType, userSlice } from './user';
import { ComponentStateType, componentsSlice } from './componentsReducer';

export type StoreStateType = {
    user: UserStateType;
    components: ComponentStateType;
};

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        components: componentsSlice.reducer,
    },
});
