import './NavBar.css';
import logo from '../../img/logoweb.svg';
import person from '../../img/person.svg';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <div className="navbar-brand">
                    <Link to="/">
                        <img  alt="" src={logo}></img> 
                    </Link>
                </div>
                <div className="navbar-collapse">
                    <ul>
                        <li><NavLink to="/category/merch">MERCH</NavLink></li>
                        <li><NavLink to="/category/starterpack">CLEANUP STARTER PACK</NavLink></li>
                        <li><img alt="" src={person}></img></li>
                        <li><CartWidget /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
