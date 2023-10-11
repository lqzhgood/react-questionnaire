import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Count from './Count';

const Redux = () => {
    return (
        <Provider store={store}>
            <Count />
        </Provider>
    );
};

export default Redux;
