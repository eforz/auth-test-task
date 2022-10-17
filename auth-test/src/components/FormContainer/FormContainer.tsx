import classes from './FormContainer.module.css'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';
import { postUser } from '../../store/reducers/ActionCreators';
import AuthForm from '../Form/AuthForm';

const FormContainer: FC = () => {

    const dispatch = useAppDispatch();
    const {setLogin, setPass} = userSlice.actions;
    const {login, pass, isLoading, error, success} = useAppSelector(state => state.userReducer)
  
    const loginChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setLogin(e.target.value))
    }
  
    const passChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setPass(e.target.value))
    }
  
    const PostClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      dispatch(postUser(login, pass))
    }

  return (
    <div className={classes['form-container']}>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {success && <h1>Успешно</h1>}
        <AuthForm login={login} pass={pass} loginHandle={loginChangeHandler} passHandle={passChangeHandler} clickHandle={PostClickHandler}></AuthForm>
    </div>
  )
}

export default FormContainer