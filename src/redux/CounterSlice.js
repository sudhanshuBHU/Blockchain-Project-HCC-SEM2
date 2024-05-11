import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        visitors: 80,
        cardsIssued: 50,
        meds: 20,
        certificate: 35,
    },
    reducers: {
        increaseVisitors: (state, action) => {
            state.visitors = action.payload;
        },
        increaseCards: (state, action) => {
            state.cardsIssued = action.payload;
        },
        increaseMeds: (state, action) => {
            state.meds = action.payload;
        },
        increaseCertificates: (state, action) => {
            state.certificate = action.payload;
        },
    },
})

export const { increaseCards, increaseCertificates, increaseMeds, increaseVisitors } = CounterSlice.actions;
export default CounterSlice.reducer;