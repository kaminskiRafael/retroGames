import './Login.css';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';

export default function Login(){

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();

        const login = {
            email: email,
            password: password
        }

        axios.post(`/auth/login`, login)
        .then(response =>{
            const token = response.data.token;
            localStorage.setItem('token', token)
        })
    }

    return(
        <>
            <div className='login'>
                <h2 className='login-title'>Conta retrôGames</h2>
                <div className='login-container'>
                    <form className='form-login' onSubmit={handleSubmit}>
                        <input type='text' placeholder='E-mail' required onChange={event => setEmail(event.target.value)} />
                        <input type='password' placeholder='Senha' required onChange={event => setPassword(event.target.value)} />
                        <div className='login-ok'>
                            <a href='!#'><span>Esqueceu a senha?</span></a>
                            <input type='submit' value='Entrar!!' />
                        </div>
                    </form>
                    <div className='login-create'>
                        <span>Cadastre-se aqui!!</span>
                        <a className='btn-create' href='/register'>Fazer Cadastro</a>
                    </div>
                </div>
            </div>
        </>
    )
}