import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// redux/reducers/countReducer.js
interface CounterState {
    count: number;
}

const initialState : CounterState = {
  count: 0,
};

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case "COUNT_INCREASE":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case "COUNT_DECREASE":
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     default:
//       return state;
//   }
// };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementBy: (state, action) => {
            state.count += action.payload;
        },
        decrementBy: (state, action) => {
            state.count -= action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.count += 1;
            })
            .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.count += action.payload;
            })
            .addCase(decrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.count -= action.payload;
            });
    }
});

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
);

export const decrementAsync = createAsyncThunk(
    'counter/decrementAsync',
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
);

export const { increment, decrement, incrementBy, decrementBy } = counterSlice.actions;

export default counterSlice.reducer;