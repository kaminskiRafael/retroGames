import './Profile.css';
import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';

export default function Profile(props){

    const [user, setUser] = useState({})
    const [mounted, setMounted] = useState(false)
    const [notLogged, setNotLogged] = useState(true)

    useEffect(() =>{
        setMounted(true)

        if(localStorage.token){
            const token = localStorage.token;
            const config = {
                Headers: { Authorization: `Bearer ${token}` }
            }

            axios.get('/auth/me', config)
            .then(response =>{
                setNotLogged(false)
                setUser(response.data)
            })
        }
    }, [mounted])

    return(
        <>
            <div className='profile'>
                <div className='profile-img'>
                    <img src='https://image.flaticon.com/icons/png/512/528/528079.png' alt='profile' />
                </div>
                {
                    !notLogged ? (
                        <>
                            <h2>{user.name}</h2>
                            <span>Email: {user.email}</span>
                            <span>Desde: {user.createdAt}</span>
                        </>
                    ):(
                        <h2>Faça Login!!</h2>
                    )
                }
            </div>
        </>
    )

}