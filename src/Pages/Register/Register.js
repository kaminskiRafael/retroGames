import './Register.css';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';

export default function Register(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const handleSubmit = event =>{
        event.preventDefault();

        const user = {
            name: name,
            email: email,
            nickname: nickname,
            password: password,
            passwordConfirmation: passwordConfirmation
        }

        axios.post('user/register', user)
        .then(response => console.log(response))
    }

        return(
            <>
                <div className='register'>
                    <div className='register-container'>
                        <h2>Cadastre-se no site retrôGames</h2>
                        <form className='register-form' onSubmit={handleSubmit}>
                            <label>Nome</label>
                            <input type='text' require onChange={event => setName(event.target.value)} />
                            <label>NickName</label>
                            <input type='text' require onChange={event => setNickname(event.target.value)} />
                            <label>E-mail</label>
                            <input type='email' require onChange={event => setEmail(event.target.value)} />
                            <label>Senha</label>
                            <input type='password' require onChange={event => setPassword(event.target.value)} />
                            <label>Confirmar Senha</label>
                            <input type='password' require onChange={event => setPasswordConfirmation(event.target.value)} />
                            <div className='register-btn'>
                                <input type='submit' value='Enviar' />
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    
}