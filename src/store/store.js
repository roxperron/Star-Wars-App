import { configureStore } from '@reduxjs/toolkit';
import auth from '../auth/store/authSlice';

export default configureStore({
    reducer: {
        auth,
    },
});