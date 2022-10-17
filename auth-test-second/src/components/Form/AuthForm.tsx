import { FC } from 'react'
import classes from './AuthForm.module.css'

interface AuthFormProps {
    login: string;
    pass: string;
    loginHandle: (arg: any) => void;
    passHandle: (arg: any) => void;
    clickHandle: (arg: any) => void;
}

const AuthForm: FC<AuthFormProps> = ({login, pass, loginHandle, passHandle, clickHandle}) => {
  return (
    <form className={classes.form}>
        <div className={classes['form__header']}>Авторизация <hr/> </div>
        <div className={classes['form__inputs']}>
            <input value={login} onChange={loginHandle} name='login' type="text" placeholder='Введите логин'/>
            <input value={pass} onChange={passHandle} type="password" placeholder='Введите пароль'/>
        </div>
        <button onClick={clickHandle} className={classes['form__button']}> Войти </button>
    </form>
  )
}

export default AuthForm