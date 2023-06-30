import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface value {
    value: Array<orderBookData>;
}

export interface orderBookData {
    market: string;
    timestamp: number;
    total_ask_size: number;
    total_bid_size: number;
    orderbook_units: orderBookUnit[];
}

export interface orderBookUnit {
    ask_price: number;
    bid_price: number;
    ask_size: number;
    bid_size: number;
}

const initialState: value = {
    value: [],
};

export const asyncGetOrderBook = createAsyncThunk(
    'orderBookSlice/asyncGetOrderBook',
    async (term: string) => {
        const res = await fetch(
            `https://api.upbit.com/v1/orderbook?markets=${term}`
        );
        const data = await res.json();
        return data;
    }
);

const orderBookSlice = createSlice({
    name: 'orderBook',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(asyncGetOrderBook.fulfilled, (state, action) => {
            state.value = action.payload;
        });
    },
});

export default orderBookSlice.reducer;
