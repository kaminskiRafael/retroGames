import './Game.css';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import Heart from './heart.png'

import axios from 'axios';

export default function Game(){
    const state = useLocation()
    const id = state.state;

    const [game, setGame] = useState ({})
    const [mounted, setMounted] = useState(false)

    const getData = async () =>{
        await axios.get(`/game/find/${id}`)
        .then(response =>{
            if(mounted){
                setGame(response.data)
            }
        })
    }

    useEffect(() =>{
        setMounted(true)
        getData()
    }, [mounted])

    return(
        <>
            <div className='game'>
                <div className='game-header'>
                    <img src={game.image} alt={game.name} />
                </div>
                <div className='game-favorites'>
                    <h2>{game.name}</h2>
                    <div className='game-like'>
                        <span>R$ {game.price}</span>
                        <a href='!#'><img className='img-fav' src={Heart}></img></a>
                    </div>
                </div>
                <h3>{game.year}</h3>
                <p>{game.storyline}</p>
            </div>
        </>
    )
}