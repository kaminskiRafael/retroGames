import Container from '../../Components/Container/Container';
import Card from '../../Components/Card/Card';
import axios from'axios';
import { useEffect, useState } from 'react/cjs/react.development';

export default function Favorites(){

    const [favorites, setFavorites] = useState([])
    const [mounted, setMounted] = useState(false)
    const [notLogged, setNotLogged] = useState(true)

    useEffect(() =>{
        setMounted(true)
        if(localStorage.token){
            const token = localStorage.token;
            const config = {
                Headers: { Authorization: `Bearer ${token}`}
            }

            axios.get(`/games/myWishlist`, config)
            .then(response =>{
                setNotLogged(false)
                setFavorites(response.data.games)
            })
        }
    }, [mounted])

    return(
        <>
            <Container title='Favoritos'>
                {
                    favorites.map(game =>(
                        <Card
                            id={game.id}
                            image={game.image}
                            title={game.name}
                            preco={game.price}
                            key={game.id}
                        />
                    ))
                }
            </Container>
        </>
    )
}