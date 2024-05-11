import { createSlice } from '@reduxjs/toolkit'

export const AccountSlice = createSlice({
    name: 'account',
    initialState: {
        addressAccount: "No address present",
        bal: 0,
    },
    reducers: {
        address: (state, action) => {
            state.addressAccount = action.payload;
        },
        balance: (state, action) => {
            state.bal = action.payload;
        },
    },
})

export const { address, balance } = AccountSlice.actions

export default AccountSlice.reducer;
