import './Footer.css';
import FB from './FB.png';
import IG from './IG.png';
import TW from './TW.png';
import YT from './YT.png';

export default function Footer(){
    return(
        <div className='footer'>
            <div className='social-media'>
                <img src={FB} alt='facebook' />
                <img src={IG} alt='instagram' />
                <img src={TW} alt='twiter' />
                <img src={YT} alt='youtube' />
            </div>
            <div className=''>
                <h6>@2021 - copright Rafael F. Kaminski</h6>
            </div>
        </div>
    )

}