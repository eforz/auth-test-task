import axios from "axios"
import { userSlice } from "./UserSlice"
import { AppDispatch } from "../store"

export const postUser = (usernames:string, passwords:string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching())
        const responce = await 
        axios.post(
            'http://neurodoc.online/api/api/authenticate', 
        {
                username: usernames, 
                password: passwords,
                rememberMe: false
        },
        );
        console.log(responce.data)
        dispatch(userSlice.actions.userFetchingSuccess(responce.data))
    } catch (error) {
        dispatch(userSlice.actions.userFetchingError('Error'))
    }   
}
