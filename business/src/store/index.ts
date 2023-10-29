import { configureStore } from '@reduxjs/toolkit';
import { UserStateType, userSlice } from './user';
import { PageInfoType, pageInfoSlice } from './pageInfo';
import { ComponentStateType, componentsSlice } from './componentsReducer';
import undoable, { StateWithHistory, excludeAction } from 'redux-undo';

export type StoreStateType = {
    user: UserStateType;
    components: StateWithHistory<ComponentStateType>;
    pageInfo: PageInfoType;
};

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        components: undoable(componentsSlice.reducer, {
            limit: 20,
            filter: excludeAction([
                'components/resetComponents',
                'components/changeSelectedId',
                'components/moveSelectedComponent',
            ]),
        }),
        pageInfo: pageInfoSlice.reducer,
    },
});
