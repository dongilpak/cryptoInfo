import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface recentTradesData {
    value: Array<recentTradeUnit>;
}

export interface recentTradeUnit {
    market: string;
    trade_date_utc: string;
    trade_time_utc: string;
    timestamp: number;
    trade_price: number;
    trade_volume: number;
    prev_closing_price: number;
    change_price: number;
    ask_bid: string;
    sequential_id: number;
}

const initialState: recentTradesData = {
    value: [],
};

export const asyncGetRecentTrades = createAsyncThunk(
    'recentTradesSlice/asyncGetRecentTrades',
    async (term: string) => {
        const res = await fetch(
            `https://api.upbit.com/v1/trades/ticks?market=${term}&count=30`
        );
        const data = await res.json();
        return data;
    }
);

const recentTradesSlice = createSlice({
    name: 'recentTrades',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(asyncGetRecentTrades.fulfilled, (state, action) => {
            state.value = action.payload;
        });
    },
});

export default recentTradesSlice.reducer;
