import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    login: string,
    pass: string,
}

const initialState: UserState = {
    login: '',
    pass:'',
}

export const userSlice = createSlice(
{
    name: 'user',
    initialState,
    reducers: {
        setLogin(state, action: PayloadAction<string>) {
            state.login = action.payload;
        },
        setPass(state, action: PayloadAction<string>) {
            state.pass = action.payload;
        },
    }
},)

export default userSlice.reducer;