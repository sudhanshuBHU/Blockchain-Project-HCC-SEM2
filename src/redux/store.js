import { configureStore } from '@reduxjs/toolkit'
import AccountSlice from './AccountSlice';
import CounterSlice from './CounterSlice';

export default configureStore({
    reducer: {
        account: AccountSlice,
        counter: CounterSlice,
    },
});