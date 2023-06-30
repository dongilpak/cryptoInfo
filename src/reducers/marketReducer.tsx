import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const asyncGetMarket = createAsyncThunk(
    'marketSlice/asyncGetMarket',
    async () => {
        const res = await fetch('https://api.upbit.com/v1/market/all');
        const data = await res.json();
        return data;
    }
);

export interface marketList {
    value: Array<marketItem>;
    searchData: Array<marketItem>;
}

export interface marketItem {
    market: string;
    korean_name: string;
    english_name: string;
}

const initialState: marketList = {
    value: [],
    searchData: [],
};

const marketSlice = createSlice({
    name: 'market',
    initialState,
    reducers: {
        searchMarket: (state, action: PayloadAction<string>) => {
            state.searchData.splice(0);
            const patternEng = /[a-zA-Z]/gi;
            const patternKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;

            if (patternKor.test(action.payload)) {
                for (let i = 0; i < state.value.length; i++) {
                    if (state.value[i].korean_name.includes(action.payload)) {
                        state.searchData.push(state.value[i]);
                    } else {
                        continue;
                    }
                }
                return;
            }

            if (patternEng.test(action.payload)) {
                for (let i = 0; i < state.value.length; i++) {
                    if (
                        state.value[i].english_name.includes(action.payload) ||
                        state.value[i].market.includes(
                            action.payload.toUpperCase()
                        )
                    ) {
                        state.searchData.push(state.value[i]);
                    } else {
                        continue;
                    }
                }
                return;
            }
        },
    },
    extraReducers: builder => {
        builder.addCase(asyncGetMarket.fulfilled, (state, action) => {
            state.value = action.payload;
        });
    },
});

export const { searchMarket } = marketSlice.actions;

export default marketSlice.reducer;
