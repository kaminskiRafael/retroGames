import './Slider.css';
import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';

export default function Slider(props){

    const [game, setGame] = useState([])
    const [mounted, setMounted] = useState(false)

    const getData = async() =>{
        await axios.get(`/game/find/${props.id}`)
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
        <div className='slider'>
            <div className='slider-content'>
                <img className='slider-img' src={game.image} alt={game.name} />
                <h1>{game.title}</h1>
                <div className='slider-desc'>
                    <h4>Já Disponível!!</h4>
                    <div className='more'>
                        <a href={game.moreLink}>Saiba Mais ></a>
                    </div>
                    <div className='classificaton'>{props.classification}</div>
                </div>
            </div>
        </div>
    )
}