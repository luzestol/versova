import './NavBar.css';
import logo from '../../img/logoweb.svg';
import person from '../../img/person.svg';
import { CartWidget } from '../cartwidget/CartWidget';

export const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <a className="navbar-brand">
                   <img src={logo}></img> 
                </a>
                <div className="navbar-collapse">
                    <ul>
                        <li className="active-item"><a>LIMPIEZA</a></li>
                        <li><a>MÉTRICAS</a></li>
                        <li><a>MERCHANDISING</a></li>
                        <li><a>BENEFICIOS</a></li>
                        <li><a><img src={person}></img></a></li>
                        <li><CartWidget /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}