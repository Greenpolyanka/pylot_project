import React from 'react';
import { Link } from 'react-router-dom';
import navs from './Nav.module.css';
import img1 from '../images/logo.png';
import './Nav.module.css';

const Nav = () => {
    return (
        <nav className={navs.nav}>
            <div className={navs.container}>
                <img className={navs.img} src={img1} alt='pic'/>
            </div>
            <div className={navs.links}>
                <li><Link to="/Main">Главная</Link></li>
                <li><Link to="/Aboutus">О нас</Link></li>
                <li><Link to="/Cats">Коты и кошки</Link></li>
                <li><Link to="/Dogs">Собаки</Link></li>
                <li><Link to="/Contacts">Контакты</Link></li>
            </div>
        </nav>
    );
};

export default Nav;