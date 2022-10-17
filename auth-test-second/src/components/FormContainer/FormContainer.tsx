import classes from './FormContainer.module.css'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';
import AuthForm from '../Form/AuthForm';
import { ILoginCredentials, postUserAPI } from '../../services/PostService';

const FormContainer: FC = () => {

  const dispatch = useAppDispatch();
  const {setLogin, setPass} = userSlice.actions;
  const {login, pass} = useAppSelector(state => state.userReducer)
  const [postUser, result] = postUserAPI.useLoginMutation()

  const LoginCredentials:ILoginCredentials =  {
    "username": login,
    "password": pass
  }

  const loginChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLogin(e.target.value))
  }

  const passChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPass(e.target.value))
  }

  const PostClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    postUser(LoginCredentials)
  }

  return (
    <div className={classes['form-container']}>
          {result.isLoading && <h2>Loading...</h2>}
          {result.isError && <h2>error status:<br/>{result.status}</h2>}
          {result.isSuccess && <h2>Успешно</h2>}
        <AuthForm login={login} pass={pass} loginHandle={loginChangeHandler} passHandle={passChangeHandler} clickHandle={PostClickHandler}></AuthForm>
    </div>
  )
}

export default FormContainer