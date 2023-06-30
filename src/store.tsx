import { configureStore } from '@reduxjs/toolkit';
import marketReducer from './reducers/marketReducer';
import orderBookReducer from './reducers/orderBookReducer';

export const store = configureStore({
    reducer: {
        market: marketReducer,
        orderBook: orderBookReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
