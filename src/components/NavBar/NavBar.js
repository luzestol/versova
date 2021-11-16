import './NavBar.css';
import logo from '../../img/logoweb.svg';
import person from '../../img/person.svg';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <a href="/#" className="navbar-brand">
                   <img alt="" src={logo}></img> 
                </a>
                <div className="navbar-collapse">
                    <ul>
                        <li><a href="/#" className="active">LIMPIEZA</a></li>
                        <li><a href="/#">MÉTRICAS</a></li>
                        <li><a href="/#">MERCHANDISING</a></li>
                        <li><a href="/#">BENEFICIOS</a></li>
                        <li><a href="/#"><img alt="" src={person}></img></a></li>
                        <li><CartWidget /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
