import './Card.css';
import Heart from './heart.png';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Card(props){

    const navigate = useNavigate();

    const goToGamePage = () =>{
        navigate(`/game`, { state:props.id })
    }

    const favoriteGame = () =>{
        const token = localStorage.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const id = props.id;

        axios.get(`/game/wish/${id}`, config)
    }

    return(
        <div className='card'>
            <div className='card-item' onClick={goToGamePage}>
                <div className='card-image'>
                    <img src={props.image} alt={props.title}></img>
                </div>
                <h2 className='card-title'>{props.title}</h2>
                <span className='card-preco'>{`R$ ${props.preco}`}</span>
            </div>
            <button className='img-fav' onClick={favoriteGame}><img className='img-fav' src={Heart}></img></button>
        </div>
    )
}