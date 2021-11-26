import './Search.css';

export default function Search() {
    return(
        <div className='search'>
            <h3>Procurar:</h3>
            <form className='form-search'>
                <input className='input' type='text' placeholder='Procure por jogos...'></input>
                <input className='btn-search' type='submit' value='Ache aqui!!'></input>
            </form>
        </div>
    )
}