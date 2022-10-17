import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    login: string,
    pass: string,
    isLoading: boolean,
    error: string | null,
    success:string;
}

const initialState: UserState = {
    login: '',
    pass:'',
    isLoading: false,
    error: '',
    success:'',
}

export const userSlice = createSlice(
{
    name: 'user',
    initialState,
    reducers: {
        userFetching(state)  {
            state.isLoading = true;
        },
        userFetchingSuccess(state, action: PayloadAction<any>)  {
            state.isLoading = false;
            state.error = '';
            state.success = 'success';
        },
        userFetchingError(state, action: PayloadAction<string>)  {
            state.isLoading = false;
            state.error = action.payload;
        },
        setLogin(state, action: PayloadAction<string>) {
            state.login = action.payload;
        },
        setPass(state, action: PayloadAction<string>) {
            state.pass = action.payload;
        },
    }
},)

export default userSlice.reducer;