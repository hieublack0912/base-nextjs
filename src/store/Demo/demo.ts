import {createSlice} from "@reduxjs/toolkit";

export interface SliceState {
    test: string;
}

// First approach: define the initial state using that type
const initialState: SliceState = { test: "demo-test-store" }

export const demoSlice = createSlice({
    name: 'demoSlice',
    initialState, // type SliceState is inferred for the state of the slice
    reducers: {},
})

export const demoReducer = demoSlice.reducer;
