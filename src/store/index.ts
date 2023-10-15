import { configureStore } from '@reduxjs/toolkit';
import { UserStateType, userSlice } from './user';
import { PageInfoType, pageInfoSlice } from './pageInfo';
import { ComponentStateType, componentsSlice } from './componentsReducer';

export type StoreStateType = {
    user: UserStateType;
    components: ComponentStateType;
    pageInfo: PageInfoType;
};

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        components: componentsSlice.reducer,
        pageInfo: pageInfoSlice.reducer,
    },
});
