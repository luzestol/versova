import './NavBar.css';
import logo from '../../img/logoweb.svg';
import person from '../../img/person.svg';

export const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <a className="navbar-brand">
                   <img src={logo}></img> 
                </a>
                <div className="navbar-collapse">
                    <ul>
                        <li className="active-item"><a>Limpieza</a></li>
                        <li><a>Métricas</a></li>
                        <li><a>Merchandising</a></li>
                        <li><a>Beneficios</a></li>
                        <li><a><img src={person}></img></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}