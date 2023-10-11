import { configureStore } from '@reduxjs/toolkit';

import { countSlice } from './count';

export default configureStore({
    reducer: {
        // module
        count: countSlice.reducer,
    },
});
