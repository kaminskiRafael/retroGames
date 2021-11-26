import Slider from '../../Components/Slider/Slider';
import Search from '../../Components/Search/Search';
import Card from '../../Components/Card/Card';
import Container from '../../Components/Container/Container';
import axios from 'axios';
import { useLayoutEffect, useState } from 'react/cjs/react.development';


export default function Home(){

    const [games, setGames] = useState([])
    const [mounted, setMounted] = useState(false)

    const getData = async() =>{
        await axios.get(`/game/findmany`)
        .then(response =>{
            if(mounted){
                setGames(response.data)
            }
        })
    }

    useLayoutEffect(() =>{
        setMounted(true)
        getData()
    }, [mounted])

    return(
        <>
            
            <Slider
                id='a3de5f67-0aea-4312-818e-df969fe6d1c4'
                classification='L'
                classificationText=''
            />
            <Search /> 
            <Container title='Destaques'>
                {
                    games.map(game =>(
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