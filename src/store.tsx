import { configureStore } from '@reduxjs/toolkit';
import marketReducer from './reducers/marketReducer';
import orderBookReducer from './reducers/orderBookReducer';
import recentTradesReducer from './reducers/recentTradesReducer';

export const store = configureStore({
    reducer: {
        market: marketReducer,
        orderBook: orderBookReducer,
        recentTrades: recentTradesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
