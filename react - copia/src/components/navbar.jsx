import React from 'react';
import SmoothScrollLink from './smoothScrollLink';

const Navbar = () => {
    return (
        <nav className="barra-navegacion" aria-label="Menú de navegación principal">
            <input type="checkbox" id="menu" className="menu-toggle" />
            <label htmlFor="menu" className="hamburger">☰</label>
            <ul className="nav-list"></ul>
            <ul>
                <li><SmoothScrollLink href="#inicio">Inicio</SmoothScrollLink></li>
                <li><SmoothScrollLink href="#acerca-de">Acerca de</SmoothScrollLink></li>
                <li><SmoothScrollLink href="#mujeres">Información</SmoothScrollLink></li>
                <li><SmoothScrollLink href="#seccion-noticias">Noticias</SmoothScrollLink></li>
                <li><SmoothScrollLink href="#contacto">Contacto</SmoothScrollLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;