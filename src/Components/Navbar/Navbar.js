import Logo from './logo.png';
import './Navbar.css';

export default function Navbar(){
    return(
        <div className='navbar'>
            <div className='navbar-left'>
                <a href='/'><img className='logo-navbar' src={Logo} alt='logo-navbar' /></a>
                <a href='/'><h1 className='h1-header'>retrôGames</h1></a>
            </div>
            <div className='navbar-right'>
                <ul>
                    <li><a href='https://google.com/'>Suporte</a></li>
                    <li><a href='/favorites'>Favoritos</a></li>
                    <li><a href='/login'>Fazer login/Criar conta</a></li>
                </ul>
            </div>

        </div>
    )
}