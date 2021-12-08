import './Footer.css';
import mailIcon from '../../img/mail.svg';
import instagramIcon from '../../img/instagram.svg';
import facebookIcon from '../../img/facebook.svg';

export const Footer = () => {
    return (
        <>
        <div className="footer-wrapper">
            <div className="footer-top">
                <div>
                <h4>¡Muchas gracias!</h4>
                <ul>
                    <li><img alt="" src={mailIcon}></img>somosversova@gmail</li>
                    <li><img alt="" src={instagramIcon}></img>@somosversova</li>
                    <li><img alt="" src={facebookIcon}></img>/somosversova</li>
                </ul>
                </div>
                <div></div>
                <div></div>
            </div>          
            <div className="footer-bottom">
                <h5>ALUMNA: María Luz Estol</h5>
                <h5>CAMADA: 19745</h5>
                <h5>PROFESOR: Agustín Molés</h5>
            </div>
        </div>
        
        </>
    )
}